using System.Net.Mail;
using System.Net;
using ETSystem.Model;

namespace ETSystem.Helper
{
    public static class StaticHelper
    {
        static HttpContextAccessor _accessor;
        static IConfiguration _configuration;
        public static void InitHttpContext()
        {
            _accessor = new HttpContextAccessor();
        }
        public static void InitConfig(IConfiguration config)
        {
            _configuration = config;
        }
        public static void SendEmailVerification(string Email)
        {
            InitHttpContext();
            try
            {
                var confirmationLink = _accessor.HttpContext.Request.Scheme + "://" + _accessor.HttpContext.Request.Host + "/LOGINREG_/VerifyEmail?email=" + Email;
      
                var htmltext = System.IO.File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Helper", "EmailTemplate", "VerifyEmail.html"));
                var modifyhtmltext = string.Empty;
                //modifyhtmltext += htmltext.Replace("%TokenVerifyURL%", "<a href=\"" + confirmationLink + "\" class=\"btn btn-success\" target=\"_blank\" title=\"Click here to Verify\">User Verfiried!</a>");
                modifyhtmltext += htmltext.Replace("%TokenVerifyURL%", "<a>User Verfiried!</a>");
                var email = new EmailHelperModel
                {
                    ToEmailAddress = Email,
                    Message = modifyhtmltext,
                    Subject = "Verify Email",
                    FromEmailAddress = _configuration["MailSettings:Mail"].ToString(),
                    SmtpUsername = _configuration["MailSettings:Mail"].ToString(),
                    SmtpPassword = _configuration["MailSettings:Password"].ToString(),
                    SmtpPort = _configuration["MailSettings:Port"].ToString(),
                    SmtpServer = _configuration["MailSettings:Host"].ToString(),
                    UseDefaultCredentials = _configuration["MailSettings:UseDefaultCredentials"].ToString(),
                    EnableSsl = _configuration["MailSettings:EnableSsl"].ToString(),
                };
                Task.Run(() =>
                {
                    StaticHelper.SendEmailAsync(email);
                });
            }
            catch (Exception ex)
            {

            }
        }
        public static Response SendEmailAsync(EmailHelperModel mailRequest)
        {
            var response = new Response();
            try
            {
                MailMessage mail = new MailMessage();
                mail.From = new MailAddress(mailRequest.FromEmailAddress);
                mail.To.Add(mailRequest.ToEmailAddress);
                if (!string.IsNullOrEmpty(mailRequest.CCEmail))
                {
                    mail.CC.Add(mailRequest.CCEmail);
                }
                mail.Subject = mailRequest.Subject;
                mail.Body = mailRequest.Message;
                mail.IsBodyHtml = true;
                SmtpClient smtp = new SmtpClient();
                smtp.UseDefaultCredentials = Convert.ToBoolean(mailRequest.UseDefaultCredentials);
                smtp.EnableSsl = Convert.ToBoolean(mailRequest.EnableSsl);
                smtp.Host = mailRequest.SmtpServer;
                smtp.Port = Convert.ToInt32(mailRequest.SmtpPort);
                smtp.Credentials = new NetworkCredential(mailRequest.SmtpUsername, mailRequest.SmtpPassword);
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtp.SendCompleted += (s, e) => { smtp.Dispose(); };
                smtp.Send(mail);
                response.StatusCode = 0;
                response.StatusMessage = "SUCCESS!";
                return response;
            }
            catch (Exception ex)
            {
                response.StatusCode = 0;
                response.StatusMessage = ex.Message;
                return response;
            }
        }
    }
}






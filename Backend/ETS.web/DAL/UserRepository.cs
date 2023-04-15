using ETSystem.Interface;
using ETSystem.Model;
using ETSystem.Model.Notice;
using ETSystem.Model.User;
using ETSystem.Repository;
using System.Data.SqlClient;

namespace ETS.web.DAL
{
    public class UserRepository : IUserRepository
    {
        public List<User> GetAll(SqlConnection connection)
        {
            List<User> list = new List<User>();
            Response response = new Response();
            try
            {
                // Notice notice= new Notice();

                //Open the connection to the database.
                connection.Open();
                string queryUser = "SELECT UserId, EmailId, FullName, Type FROM SchoolUser";



                using (SqlCommand cmdUser = new SqlCommand(queryUser, connection))
                {
                    //Add values to the parameters in the query.
                    SqlDataReader reader = cmdUser.ExecuteReader();
                    if (!reader.HasRows)
                    {
                        reader.Close();
                        response.StatusCode = 401;
                        response.StatusMessage = "User Details Failed";
                    }
                    else
                    {
                        while (reader.Read())
                        {
                            User user = new User();
                            user.UserId = (int)reader["UserId"];
                            user.EmailId = (string)reader["EmailId"];
                            user.FullName = (string)reader["FullName"];
                            user.Type = (string)reader["Type"];
                            list.Add(user);
                        }
                        //Close the reader if a matching record is found.
                        reader.Close();

                    }


                }

            }

            catch (Exception ex)
            {
                response.StatusCode = 500;
                response.StatusMessage = "An error occurred during User View :" + ex.Message;
            }
            finally
            {

                connection.Close();
            }

            return list;
        }
    }
}

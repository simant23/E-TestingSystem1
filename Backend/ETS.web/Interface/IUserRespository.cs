using ETSystem.Model.Notice;
using ETSystem.Model.User;
using System.Data.SqlClient;

namespace ETSystem.Interface
{
    public interface IUserRepository
    {
        List<User> GetAll(SqlConnection connection);
    }
}

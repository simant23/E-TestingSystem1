
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ChatPage from './ChatPage';


const getAllConnectedUsers = async () => {
  // sender is user_id who wants to chat
  let res = await axios.get(
    'https://localhost:7013/api/Message'
  );

  let data = res.data;
  // console.log(data);
  return data;
};

const ChatBar = () => {
  const SenderId = window.localStorage.getItem('UserId');
  const [users, setUsers] = useState([]); // unames and ids of conected users\

  useEffect(() => {
    getAllConnectedUsers().then((users) => setUsers(users));
  });

  const navigate = useNavigate();

  // username is consoled dynamically
  const handleButtonClick = (iid, id, receiveremail) => {
    window.localStorage.setItem('ReceiverEmailId',receiveremail)
    navigate(`/chat/${iid}/${id}`); // later redirect based on indivisual user
  };

  if (!users) return <div className="chat__sidebar">Loading...</div>;

  return (
    // <div style={{display:'flex'}}>
    //   <div style={{display:'flex', float:'left', width:'25%', }}>
    //   <div id="content">
    // //   <div className="chat__sidebar">
    // //     <h2>Open Chat</h2>

    // //     <div>
    // //       {/* <h4 className="chat__header">ACTIVE USERS</h4> */}
    // //       <div className="chat__users">
    // //         {users.map((user) => (
    //             <div key={user.UserId} onClick={() => handleButtonClick (SenderId, user.UserId, user.EmailId)}>
    //                 <p>Name: {user.FullName}</p>
    //                  {/* <p>Email: {user.EmailId}</p>  */}
    //                  <p>Type: {user.Type}</p>
    //             </div>
    //           )
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //   </div>
    //   <div style={{display:'flex', width:'75%', backgroundColor:'red'}}>
    // <ChatPage/>
    //   </div>
    // </div>
    <div>
      <div >

        <div>
          {/* <h4 className="chat__header">ACTIVE USERS</h4> */}
          <div >
            {users.map((user) => (
                <div key={user.UserId} onClick={() => handleButtonClick (SenderId, user.UserId, user.EmailId)}>
                  <div>
                  <table>
                    <tr>
                      <td>{user.FullName}</td>
                    </tr>
                  </table>
                  </div>
                    {/* {user.Type}</td></tr> */}
                     {/* <p>Email: {user.EmailId}</p>  */}
                     {/* <div style="border: 1px solid black; padding: 10px;">
                        <table>
                          <tr>
                            <td>{user.FullName}</td>
                          </tr>
                        </table>
                      </div> */}

                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBar;

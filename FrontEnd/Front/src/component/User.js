import React from "react";
import Nav from './test';
import axios from 'axios';
import { useState, useEffect } from "react";


const ViewUser = () => {
    const [user, setUser] = useState([]);
    const [status, setStatus] = useState({});
    // const [date, setDate] = useState('');
  
    useEffect(() => {
    //   const storedStatus = JSON.parse(localStorage.getItem('userStatus')) || {};
    // setStatus(storedStatus);

      axios.get(`https://localhost:7013/api/User`)
        .then(response => {
            setUser(response.data);
            const storedStatus = JSON.parse(localStorage.getItem("userStatus")) || {};
            setStatus(storedStatus);
            
          // setDate(notices.postedAt.slice(0,10));
        })
        .catch(error => {
          console.error(error);
        });
    }, [user]);

    const UserApproval = (UserId, IsApproved) => {
        if (window.confirm("Do you want to change the user status?")) {
        const url = `https://localhost:7013/api/LOGINREG_/UserApproval`;
        axios.post(url,{
          UserId: UserId,
          IsApproved: IsApproved,
          })
          .then(response => {
            console.log(response.data);
            alert("User Approved Successfully");
            const updatedStatus = {
              ...status,
              [UserId]: IsApproved ? "Approved" : "Rejected",
            };
            setStatus(updatedStatus);
            localStorage.setItem("userStatus", JSON.stringify(updatedStatus));
          })
          .catch(error => {
            console.error(error);
          });
        }
      };


      return (
        <div>
          <table style={{borderCollapse: 'collapse', width: '100%', border: '1px solid #ddd'}}>
            <thead>
              <tr style={{backgroundColor:'rgb(80, 146, 168)', color: 'white'}}>
                <th style={{textAlign: 'left',padding: '12px'}}>Email</th>
                <th style={{textAlign: 'left',padding: '12px'}}>Name</th>
                <th style={{textAlign: 'left',padding: '12px'}}>Type</th>
                <th style={{textAlign: 'left',padding: '12px'}}>Action</th>
                <th style={{textAlign: 'left',padding: '12px'}}>Status</th>
              </tr>
            </thead>
            <tbody>
              {user.map(user => (
                <tr key={user.UserId} style={{borderBottom: '1px solid #ddd'}}>
                  <td style={{textAlign: 'left',padding: '12px'}}>{user.EmailId}</td>
                  <td style={{textAlign: 'left',padding: '12px'}}>{user.FullName}</td>
                  <td style={{textAlign: 'left',padding: '12px'}}>{user.Type}</td>
                  <td style={{textAlign: 'left',padding: '12px'}}>
                    <button style={{backgroundColor: '#4CAF50', color: 'white', padding: '8px', borderRadius: '4px', border: 'none', marginRight: '8px'}} onClick={() => UserApproval(user.UserId, 1)}>Approve</button>
                    <button style={{backgroundColor: '#f44336', color: 'white', padding: '8px', borderRadius: '4px', border: 'none'}} onClick={() => UserApproval(user.UserId, 0)}>Reject</button>
                  </td>
                  <td style={{textAlign: 'left',padding: '12px', fontWeight: 'bold'}}>{status[user.UserId]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };



const UserDetails = () => {
  return(
    <div style={{backgroundColor:'#81A594', height:'100vh'}}>
      <ViewUser/>
    </div>
  )
}
export default UserDetails;
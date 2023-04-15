import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';




const Nav = () => {
  const Navigate = useNavigate();

  const handleChangePassword = () => {
    Navigate('/ChangePassword')
}
const handleMessage = () => {
    Navigate('/Message')
}
const handleNotice = () => {
    Navigate('/Notice');
    }
const handleAccount = () => {
    Navigate('/Account');
    }
const handleDashboard = () => {
    Navigate('/dashboard');
    }
const handleSampleQ = () => {
    Navigate('/SampleQ');
    }
const handleExam = () => {
    Navigate('/Exam');
    }
// const handleGraph = () => {
//     Navigate('/Graph');
//     }
const handleResult = () => {
    Navigate('/Result');
    }
const handleTDashboard = () => {
      Navigate('/teacherdashboard');
      }
const handleADashboard = () => {
      Navigate('/admindashboard');
      }      

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.localStorage.setItem('IsLoggedIn','0');
        Navigate('/Login')
    }

    const UserDetails = () => {
      Navigate('/UserDetails');
      }
  // const handleSDetails = () => {
  //     Navigate('/IndDet')
  // }

    return(
        <NContainer style={{backgroundColor:'#81A594', width:'263px', paddingTop:'102px'}}>
          {/* <div style={{backgroundColor:'red', marginBottom:'40px'}}>SImant Chaudhary </div> */}
          {window.localStorage.getItem("Type") === 'Student' &&<FormButton type="button" onClick={handleDashboard}>Dashboard </FormButton>}
          {window.localStorage.getItem("Type") === 'Teacher' &&<FormButton type="button" onClick={handleTDashboard}>Dashboard </FormButton>}
          {window.localStorage.getItem("Type") === 'Admin' &&<FormButton type="button" onClick={handleADashboard}>Dashboard </FormButton>}
          <FormButton type="button" onClick={handleNotice}>Notice </FormButton>
          {window.localStorage.getItem("Type") === 'Student' &&<FormButton type="button" onClick={handleMessage}>Message </FormButton>}
          {window.localStorage.getItem("Type") === 'Teacher' &&<FormButton type="button" onClick={handleMessage}>Message </FormButton>}
          {window.localStorage.getItem("Type") === 'Admin' &&<FormButton type="button" onClick={handleMessage}>Message </FormButton>}
          {window.localStorage.getItem("Type") === 'Student'  && <FormButton type="button" onClick={handleSampleQ}>Sample Questions </FormButton>}
          {window.localStorage.getItem("Type") === 'Teacher' && <FormButton type="button" onClick={handleSampleQ}>Sample Questions </FormButton>}
          {window.localStorage.getItem("Type") === 'Student' && <FormButton type="button" onClick={handleExam}>Examination </FormButton>}
          { window.localStorage.getItem("Type") === 'Teacher' && <FormButton type="button" onClick={handleExam}>Examination </FormButton>}
          {window.localStorage.getItem("Type") === 'Student' && <FormButton type="button" onClick={handleResult}>Result </FormButton>}
          { window.localStorage.getItem("Type") === 'Teacher' && <FormButton type="button" onClick={handleResult}>Result </FormButton>}
          {/* { window.localStorage.getItem("Type") ==='Teacher' && <FormButton type="button" onClick={handleGraph}>Progress Graph </FormButton>} */}
          {/* {window.localStorage.getItem("Type") === 'Student' && <FormButton type="button" onClick={handleGraph}>Progress Graph </FormButton>} */}
          {window.localStorage.getItem("Type") === 'Admin' &&<FormButton type="button" onClick={UserDetails}>User </FormButton>}
          {/* {window.localStorage.getItem("Type") === 'Admin' &&<FormButton type="button" onClick={handleSDetails}>Student </FormButton>} */}
          <FormButton type="button" onClick={handleAccount}>Account </FormButton>
          <FormButton type="button" onClick={handleChangePassword}>Change Password </FormButton>
          <FormButton type="button" onClick={handleLogout}>Logout </FormButton>
        </NContainer>
  );
};

export default Nav;

const NContainer = styled.div`

`;

const FormButton = styled.button`
background-color: lightblue;
color: black;
padding: 1.07rem;
border-radius: 20px;
font-size: 1.2rem;
width: 250px;
cursor: pointer;
box-shadow: 0px 5px 10px lightgrey;
transition: all 0.3s ease-in-out;
margin-top: 13px;


&:hover {
  transform: translateY(-5px);
  box-shadow: 10px 10px 10px black;

}
`
;





 import React from 'react';
 import { useNavigate } from 'react-router-dom';
 import styled from 'styled-components';
 
 function GraphPage() {
     const Navigate = useNavigate();
     const handleLogout = () => {
         localStorage.removeItem('token');
         Navigate('/Login')
     }
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
     const handleGraph = () => {
         Navigate('/Graph');
         }
     const handleResult = () => {
         Navigate('/Result');
         }
   
     return(
         <FormContainer>
           <FormTitle>Progress Graph Board</FormTitle>
           <NContainer>
             <FormButton type="button" onClick={handleDashboard}>Dashboard </FormButton>
             <FormButton type="button" onClick={handleNotice}>Notice </FormButton>
             <FormButton type="button" onClick={handleMessage}>Message </FormButton>
             <FormButton type="button" onClick={handleSampleQ}>Sample Questions </FormButton>
             <FormButton type="button" onClick={handleExam}>Examination </FormButton>
             <FormButton type="button" onClick={handleResult}>Result </FormButton>
             <FormButton type="button" onClick={handleGraph}>Progress Graph </FormButton>
             <FormButton type="button" onClick={handleAccount}>Account </FormButton>
             <FormButton type="button" onClick={handleChangePassword}>Change Password </FormButton>
             <FormButton type="button" onClick={handleLogout}>Logout </FormButton>
           </NContainer>
         </FormContainer>
     );
   }
 
 
 export default GraphPage;
 
 
 
 
 const NContainer = styled.div`
   // background-color: white;
   padding-left: 10px;
   margin-top: -40px;
 `;
 
 const FormButton = styled.button`
 background-color: #330000;
 color: white;
 padding: 1rem;
 border-radius: 10px;
 border: none;
 font-size: 1.2rem;
 width: 230px;
 cursor: pointer;
 box-shadow: 0px 5px 10px lightgrey;
 transition: all 0.3s ease-in-out;
 margin-top: 10px;
 margin-right: 1335px;
 
 &:hover {
   transform: translateY(-5px);
   box-shadow: 0px 15px 20px lightgrey;
 
 }
 `
 ;
 
 const FormContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 95%;
   margin: 0 auto;
   padding: 2rem;
   box-shadow: 0px 10px 15px lightgrey;
   border-radius: 10px;
   margin-top: 15px;
   font-style: italic; 
   font-family: 'Cursive';
   background-color: rgb(147, 108, 108);
   
 `;
 
 
 const FormTitle = styled.h1 `
 font-size: 3rem; 
 margin-bottom: 2rem; 
 text-shadow: 0px 5px 10px lightgrey; 
 font-style: italic; 
 font-family: 'Cursive';
 margin-top: 0px;
 `;
 
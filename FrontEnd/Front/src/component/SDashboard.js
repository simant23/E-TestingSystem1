import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './test';


function Dashboard() {


  return(
        <div id="mainbg">
        <FormTitle>Student Dashboard</FormTitle>
        <div style={{display:"flex", gap: '0'}} >
          <NContainer>
          <Nav/>
          </NContainer>
        </div>
        </div>
  );
}
export default Dashboard;

const NContainer = styled.div`
  // background-color: white;
  padding-left: 10px;
  margin-top: -40px;
`;

// const FormButton = styled.button`
// background-color: #330000;
// color: white;
// padding: 1rem;
// border-radius: 10px;
// border: none;
// font-size: 1.2rem;
// width: 230px;
// cursor: pointer;
// box-shadow: 0px 5px 10px lightgrey;
// transition: all 0.3s ease-in-out;
// margin-top: 10px;
// margin-right: 1335px;

// &:hover {
//   transform: translateY(-5px);
//   box-shadow: 0px 15px 20px lightgrey;

// }
// `
// ;

// const FormContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 95%;
//   margin: 0 auto;
//   padding: 2rem;
//   box-shadow: 0px 10px 15px lightgrey;
//   border-radius: 10px;
//   margin-top: 15px;
//   font-style: italic; 
//   font-family: 'Cursive';
//   background-color: rgb(147, 108, 108);
  
// `;


const FormTitle = styled.h1 `
font-size: 3rem; 
margin-bottom: 2rem; 
text-shadow: 0px 5px 10px lightgrey; 
font-style: italic; 
font-family: 'Cursive';
margin-top: 0px;
`;
import React from 'react';
import Nav from './test';
import styled from 'styled-components';


function TeacherDashboard() {
  
  const login = window.localStorage.getItem('IsLoggedIn');
  
  return(
    <div class='main'> 
    <div class='navvv' style={{width:'320px'}}>
      <Nav/>
    </div>
    <div class='content'>
      <FormTitle>Teacher Dashboard</FormTitle>
    </div>
  </div>


  );
}
export default TeacherDashboard;






const FormTitle = styled.h1 `
font-size: 3rem; 
margin-bottom: 2rem; 
text-shadow: 0px 5px 10px lightgrey; 
font-style: italic; 
font-family: 'Cursive';
margin-top: -650px;
margin-left: -100px;
`; 

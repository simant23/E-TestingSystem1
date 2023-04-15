import React from 'react';
import styled from 'styled-components';
import Nav from './test';
import ChatBar from './ChatBar';
import ChatPage from './ChatPage';

function MessagePage() {
  
    return(
      // <div id="mainbg" style={{height:'100vh'}}>
      //     <FormTitle>Message Board</FormTitle>
      //     <Nav/>
      //     <ChatBar/>
      // </div>

      <div class='main'>
      <div class='navvv'>
        <Nav/>
      </div>

      <div class='content' style={{backgroundColor:'yellow', gap:'50px'}}>
        <FormTitle>Message Board</FormTitle>
          <div style={{backgroundColor:'red', width:'25%', float:'left'}}>

            <ChatBar/>
          </div>

          <div style={{backgroundColor:'blue',display:'flex',  width:'75%'}}>

            <ChatPage/>
        </div>
      </div>

    </div>
    );
  }


export default MessagePage;

const FormTitle = styled.h1 `
font-size: 3rem; 
margin-bottom: 2rem; 
text-shadow: 0px 5px 10px lightgrey; 
font-style: italic; 
font-family: 'Cursive';
margin-top: 0px;
`;

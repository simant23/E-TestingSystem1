import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingPageImage from './LandingPage.jpg';
import styled from 'styled-components';

function LandingPage() {
  // define styles for the component
  const styles = {
  backgroundImage: `url(${LandingPageImage})`,
  // background: 'red',
  backgroundSize: 'cover', // set background size to cover the element
  height: '100vh',
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  };
  
  // define hook to navigate to the homepage
  const Navigate = useNavigate();
  
  // function to handle redirect to the homepage
  const handleRedirect = () => {
  Navigate('/HomePage');
  }
  
  // render the Landing Page component
  return (
    <div style={styles}>
      
      <FormTitle>E-Testing System</FormTitle>
      <br/>
      <FormTitle1>A Testing Platform For <br/>
        Increased Efficiency!</FormTitle1>

      <br/>
      <FormButton 
        type="button"
        onClick={handleRedirect}>
        Get Started
      </FormButton>
    </div>
  );
}

export default LandingPage;


//Styled Components...

const FormTitle = styled.h1 `
font-size: 7rem; 
color: white;
text-shadow: 0px 5px 10px black; 
font-style: italic; 
font-family: 'Cursive';
sans-serif;

`;


const FormTitle1 = styled.h1 `
font-size: 3rem; 
color: white;
margin-bottom: 2rem; 
text-shadow: 0px 5px 10px black; 
font-style: italic; 
font-family: 'Cursive';
margin-top: 0px;
sans-serif;
`;


const FormButton = styled.button`
  background-color: #330000;
  color: white;
  padding: 1rem;
  border-radius: 30px;
  border: none;
  font-size: 1.2rem;
  width: 200px;
  cursor: pointer;
  box-shadow: 0px 5px 10px black;
  transition: all 0.3s ease-in-out;
  margin-right: 10px;
  margin-bottom: 300px;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7.41' height='12' viewBox='0 0 7.41 12'%3E%3Cpath d='M10,6,8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z' transform='translate(-8.59 -6)' fill='%23fff'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 24px center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 15px 20px black;
 
 }
`
;


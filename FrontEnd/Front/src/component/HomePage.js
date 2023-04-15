import React from 'react';
import Navbar from './Navbar';
import HomePageImage from './HomePage.jpg';
import styled from 'styled-components';

function HomePage() {
  // Set background image and styles
  const styles = {
    backgroundImage: `url(${HomePageImage})`,
    backgroundSize: 'cover', // set background size to cover the element
    backgroundPosition: ' center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  };

  return (
    <div>
      {/* Set background image and navbar */}
      <div style={styles}>
        <Navbar />

        {/* Set div for content */}
        <div style={{ 
          width: '350px', 
          height: '300px', 
          fontSize: '2rem', 
          paddingTop: '70px', 
          borderColor: 'black', 
          borderRadius: '20px' 
        }}>
          {/* Set heading text */}
          <b style={{ 
            color: 'lightbrown', 
            fontFamily: 'Cursive', 
            fontStyle: 'italic' 
          }}>
            <FormTitle>Tirupati School is Empowering education beyond boundaries with our innovative E-Testing System!</FormTitle>
          </b>
        </div>
      </div>
    </div>
  );
}

export default HomePage;


const FormTitle = styled.h1 `
font-size: 3rem; 
margin-bottom: 2rem; 
text-shadow: 0px 5px 10px black; 
font-style: italic; 
font-family: 'Cursive';
margin-top: 10px;
sans-serif;
`;
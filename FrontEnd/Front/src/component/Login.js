import axios from "axios";
import React, {useRef, useState} from "react";
import styled from 'styled-components';
import { useNavigate, Link } from "react-router-dom";
import LoginImage from "./Login2.jpg";


const Login = () => {
  // state variables for email, password, type, showPassword, and isEmpty
  const [EmailId, setemail] = useState('');
  const [Password, setpassword] = useState('');
  const [Type, settype] = useState('');
  const [showPassword, setshowPassword] = useState(false);
  const [isEmpty, setisEmpty] = useState(false);

  // styles for the container
  const styles = {
    backgroundImage: `url(${LoginImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  // useNavigate hook for programmatic navigation
  const Navigate = useNavigate();

  // function to redirect based on the type of user
  const handleRedirect = (Type) => {
    if (Type === 'Student') {
      Navigate('/dashboard');
    } else if (Type === 'Teacher') {
      Navigate('/teacherdashboard');
    } else if (Type === 'Admin') {
      Navigate('/admindashboard');
    } else {
      alert('Invalid Type!');
    }
  };

  // function to handle form submission
  const handleSave = async (e) => {
    e.preventDefault();
    setisEmpty(false); // reset isEmpty state
    if (!EmailId || !Password || !Type) {
      setisEmpty(true); // set isEmpty state to true if any of the fields are empty
      alert('All fields are required!');
      return;
    }
    const url = 'https://localhost:7013/api/LOGINREG_/Login';
    const data = {
      EmailId: EmailId,
      Type: Type,
      Password: Password,
    };
    // set values in local storage
    window.localStorage.setItem('EmailId', EmailId);
    window.localStorage.setItem('IsLoggedIn', '1');
    window.localStorage.setItem('Type', Type);

    // get user details from API and set in local storage
    const typee = window.localStorage.getItem('Type');
    const emaills = window.localStorage.getItem('EmailId');
    let respp = await axios.get(`https://localhost:7013/api/EUser/${emaills}/${typee}`);
    console.log(respp.data);
    window.localStorage.setItem('UserId', respp.data.UserId);
    window.localStorage.setItem('Class', respp.data.Class);

    try {
      // send request to API for login
      let resp = await axios.post(url, data);
      clear();
      const dt = resp.data;
      console.log(resp.data);
      if (dt.StatusMessage === 'Login Successful') {
        handleRedirect(Type);
      } else {
        alert(dt.StatusMessage);
      }
    } catch (e) {
      alert(e);
    }
  };

  // function to handle key press event
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSave(event);
    }
  };

  // function to clear form fields
  const clear = () => {
    setemail('');
    settype('');
    setpassword('');
  };

  // function to handle checkbox change event
  const handleCheckboxChange = (e) => {
    setshowPassword(e.target.checked);
  };

   
  return (
    <div style={styles}>
      <FormContainer>
        <FormTitle>Login Form</FormTitle>
          <br/>
              
            <FormLabel htmlFor="EmailId">Email ID:</FormLabel>

              <input  id ="LF"
                type="text"
                placeholder="Email ID"
                onChange={(e) => setemail(e.target.value)}
                value={EmailId}
                onKeyPress={handleKeyPress}
                required
              />
              {isEmpty && (
                <div style={{ color: "red" }}>
                  Email ID is required
                </div>
              )}
              <br/>
              <SelectContainer>
                <FormLabel htmlFor="Type">Type:</FormLabel>
                <select value={Type} onChange={(e) => settype(e.target.value)}>
                  <option value="">Select Type</option>
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Admin">Admin</option>
                </select>
                {/* {Type === ""  && <alert style={{color:'red'}}>Please select a type</alert>} */}
                {isEmpty && (
                <div style={{ color: "red" }}>
                  Select Type is required
                </div>
              )}

              </SelectContainer>
<br/>
                <FormLabel htmlFor="Password">Password:</FormLabel>
                  <input id="LF"
                    type={showPassword? "text" : "Password"}
                    placeholder="Password"
                    onChange={(e) => setpassword(e.target.value)}
                    value={Password}
                    onKeyPress={handleKeyPress}
                  />
                  {isEmpty && (
                        <div style={{ color: "red" }}>
                            Password is required
                        </div>
                    )}
               
                    <input 
                        type="checkbox" 
                        id="show-password" 
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="show-password">Show password</label>

              
                

                 
                    <FormButton type ="button"  onClick={clear}>
                        Clear
                    </FormButton>
                    <FormButton 
                    type="button"
                    onClick={handleSave}
                    onKeyPress={handleKeyPress}>
                        Login
                    </FormButton>
                    <br/>
              <FormLabel1>
              <Link to="/ForgotPwd"> <b>Forgot Password?</b></Link>
              </FormLabel1>
            <br/>
        </FormContainer>
      </div>
    )
}
export default Login;



const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 10px 15px lightgrey;
  border-radius: 20px;
  font-style: italic; 
  font-family: 'Cursive';
  background-color: rgb(189,190,186);
  margin-top: 0px;
  width: 400px;
  height: 700px;
  
`;

const FormTitle = styled.h1 `
font-size: 3rem; 
margin-bottom: 2rem; 
text-shadow: 0px 5px 10px black; 
font-style: italic; 
font-family: 'Cursive';
margin-top: 10px;
sans-serif;
`;

const FormLabel = styled.label`
  font-size: 2rem;
  margin-right: 1rem;
  margin-top: 10px;
  text-shadow: 0px 2px 5px lightgrey;
  display: block;
  font-style: italic; 
  font-family: 'Cursive'; 
`;

const FormLabel1 = styled.label`
  font-size: 20px;
  margin-right: 2rem;
  text-shadow: 0px 2px 5px lightgrey;
  color: black;
  display: block;
  font-style: Bold; 
  font-family: 'Cursive'; 

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 15px 20px lightgrey;
 }
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
  box-shadow: 0px 5px 10px lightgrey;
  transition: all 0.3s ease-in-out;
  margin-top: 20px;
  margin-right: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 15px 20px lightgrey;
 
 }
`
;

const SelectContainer = styled.div`
select {  
  width:390px;
  height: 35px;
  font-size: 1.8rem;
  border-radius: 5px;
  box-shadow: 0px 5px 10px lightgrey;
  font-style: italic; 
  font-family: 'Cursive';
  
}

`;

   


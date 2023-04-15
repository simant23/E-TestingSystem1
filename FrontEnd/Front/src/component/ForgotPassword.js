import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Password from "./Password.webp";

const ForgotPassword = () => {
  const styles = {
    backgroundImage: `url(${Password})`,
    backgroundSize: 'cover', // set background size to cover the element
    backgroundPosition: 'center center',
    height: '760px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };


  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/Login');
  };

  const handleSave = async () => {
    const url = 'https://localhost:7013/api/LOGINREG_/ForgetPassword';
    const data = {
      EmailId: email,
      Phone: phone,
      NewPassword: newPassword,
    };

    try {
      let resp = await axios.post(url, data);
      const dt = resp.data;
      console.log(dt.statusMessage);
      if (dt.statusMessage === "Password Successfully Updated") {
        handleRedirect();
        clear();
      } else {
        alert(dt.statusMessage);
      }
    } catch (e) {
      alert(e);
    }
  };

  const clear = () => {
    setEmail('');
    setPhone('');
    setNewPassword('');
  };

  const handleCheckboxChange = (e) => {
    setShowPassword(e.target.checked);
  };

  return (
    <div style={styles}>

    <FormContainer>
      <FormTitle>Forgot Password</FormTitle>
      <br />
      <FormLabel htmlFor="email">Email ID:</FormLabel>
      <FormInput
        type="email"
        id="email"
        placeholder="Email ID"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <FormLabel htmlFor="phone">Phone:</FormLabel>
      <FormInput
        type="phone"
        id="phone"
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />
      <FormLabel htmlFor="newPassword">New Password:</FormLabel>
      <FormInput
        type={showPassword ? "text" : "password"}
        id="newPassword"
        placeholder="New Password"
        onChange={(e) => setNewPassword(e.target.value)}
        value={newPassword}
      />
      <input
        type="checkbox"
        id="show-password"
        onChange={handleCheckboxChange}
      />
      <label htmlFor="show-password">Show password</label>
      <FormButton type="button" onClick={handleSave}>
        Save
      </FormButton>
    </FormContainer>
    </div>
  );
};

export default ForgotPassword;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin-top: 0px;
  margin-left: 0px;
  padding: 2rem;
  box-shadow: 0px 10px 15px lightgrey;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 1rem;
  font-style: italic;
  font-family: 'Cursive';
  background-color: rgb(147, 108, 108);
`;

const FormTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-shadow: 0px 5px 10px lightgrey;
  font-style: italic;
  font-family: 'Cursive';
  margin-top: 0px;
  sans-serif;
`;

const FormLabel = styled.label`
  font-size: 18px;
  display: flex;

  flex-direction: column;
  margin-top: 2%;
`;

const FormInput = styled.input`
  flex: 1;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid lightgrey;
  box-shadow: 0px 5px 10px lightgrey;
  font-style: italic; 
  font-family: 'Cursive';
  width: 17rem;
`;

const FormButton = styled.button`
  background-color: #330000;
  color: white;
  padding: 1rem;
  border-radius: 5px;
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
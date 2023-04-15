import axios from "axios";
import React, {useState} from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
// import LoginImage from "./Login2.jpg";
import bimage from "./SImage.jpg";


const Registration = () => {
    const styles = {
        backgroundImage: `url(${bimage})`,
        backgroundSize: 'cover', // set background size to cover the element
        backgroundPosition: 'center center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      };

    const [email, setemail] = useState('')
    const [fName, setfName] = useState('')
    const [phone, setphone] = useState('')
    const [sId, setsId] = useState('')
    const [gender, setgender] = useState('')
    const [address, setaddress] = useState('')
    const [password1, setpassword1] = useState('')
    const [dob, setdob] = useState('')
    // const [type, settype] = useState('')
    const [grade, setgrade] = useState('')
    const [guardianName, setguardianName] = useState('')
    const [enrollmentDate, setenrollmentDate] = useState('')
    const [showPassword, setshowPassword] = useState(false);
    const [isEmpty, setisEmpty] = useState(false);


    const Navigate = useNavigate();
    const handleRedirect = () => {
      Navigate('/Login')
    }

    const handleSave = async (e) => {
        e.preventDefault();
    setisEmpty(false); // reset isEmpty state
        if (!email|| !fName || !phone || !sId || !gender || !address || !password1 || !dob || !grade || !guardianName || !enrollmentDate) {
            setisEmpty(true);
          alert('All fields are required!');
          return;
        }
        const url ='https://localhost:7013/api/LOGINREG_/StudentRegistration';
        const data = {
          EmailId : email,
          FullName : fName,
          Phone : phone,
          Gender : gender,
          Address : address,
          Password : password1,
          StudentId : sId,
          // Type : type,
          DOB : dob,
          Grade : grade,
          GuardianName : guardianName,
          EnrollmentDate : enrollmentDate,
        }
        
            
        try {
          let resp = await axios.post(url, data);
            clear();
            const dt = resp.data;
            if (dt.StatusMessage === "Registration Successful"){
              handleRedirect();
            }
            else {
            alert(dt.StatusMessage);
              
            }
            
        }
        catch(e){
            alert(e);

        }
    }

    const clear = () => {
        setsId('');
        setfName('');
        setemail('');
        setphone('');
        setdob('');
        // settype('');
        setgender('');
        setgrade('');
        setguardianName('');
        setaddress('');
        setenrollmentDate('');
        setpassword1('');

    }


    const handleCheckboxChange = (e) => {
        setshowPassword(e.target.checked);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value) {
          alert(`${name} is required.`);
        }
      };


    return (
        <div style={styles}>
        <FormContainer>
            <FormTitle>Student Registration Form</FormTitle> 
            {/* <h1>Student Registration Form</h1> */}

            <br/>
    <div id='o'>
        <div id='col'>
                <div id='c'>
                    <FormLabel htmlFor="email">Email ID</FormLabel>

                    <FormInput  
                        type="email"
                        id="email"
                        name="Email ID"
                        placeholder="Email ID"
                        onChange={(e) => setemail(e.target.value)}
                        onBlur={handleBlur}
                        value={email}
                        required
                    />
                    {isEmpty && (
                <div style={{ color: "red" }}>
                  Email ID is required
                </div>
              )}
               </div>
               <div id='c'>
                    <FormLabel htmlFor="fName">Full Name</FormLabel>

                    <FormInput 
                        type="text"
                        id="fName"
                        name="Full Name"
                        placeholder="Full Name"
                        onChange={(e) => setfName(e.target.value)}
                        onBlur={handleBlur}
                        value={fName}
                        required


                    />
              </div>
              <div id='c'>
                    <FormLabel htmlFor="sId">Student ID</FormLabel>
                    <FormInput
                        type="text"
                        id="sId"
                        name="Student ID"
                        placeholder="Student ID"
                        onChange={(e) => setsId(e.target.value)}
                        onBlur={handleBlur}
                        value={sId}
                        required
                    />
                </div>
                <div id='c'>
                    <FormLabel htmlFor="phone">Phone Number</FormLabel>

                    <FormInput 
                        type="text"
                        name=""
                        placeholder="Phone Number"
                        onChange={(e) => setphone(e.target.value)}
                        value={phone}
                        required
                    />
                </div>

                <div id='c'>
                    <FormLabel htmlFor="dob">Date of Birth</FormLabel>

                    <FormInput 
                        type="date"
                        id="dob"
                        placeholder="Date of Birth"
                        onChange={(e) => setdob(e.target.value)}
                        value={dob}
                        required

                    />
                </div>

        </div>
        <div id='col'>
                <div id='c' style={{marginTop: '0px'}}>
                    <FormLabel htmlFor="enrollmentDate">Enrollment Date</FormLabel>

                    <FormInput 
                        type="date"
                        id="enrollmentDate"
                        placeholder="Enrollment Date"
                        onChange={(e) => setenrollmentDate(e.target.value)}
                        value={enrollmentDate}
                        required


                    />
                                </div>
                                <div>

                                <div id='g'>
                            
                    <FormLabel htmlFor="gender">Gender:</FormLabel>
                    <div >
                        <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={gender === "Male"}
                            onChange={(e) => setgender(e.target.value)}
                            required
                        />
                        Male
                        </label>
                        <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={gender === "Female"}
                            onChange={(e) => setgender(e.target.value)}
                            required
                        />
                        Female
                        </label>
                    </div>
                    
                </div>
                <div id='gr' style={{marginTop: '38px'}}>
                    <SelectContainer>
                    <FormLabel htmlFor="grade">Grade</FormLabel>
                    <select type="combobox"
                        id="grade"
                        onChange={(e) => setgrade(e.target.value)}
                        value={grade}
                        required>
                        <option value="" disabled>Select Grade</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        

                      </select>
                      </SelectContainer>
                      </div>
                </div>
                <div id='c'>
                    <FormLabel htmlFor="guardianName">Guardian's Name</FormLabel>

                    <FormInput 
                        type="text"
                        id="guardianName"
                        placeholder="Guardian's Name"
                        onChange={(e) => setguardianName(e.target.value)}
                        value={guardianName}
                        required


                    />
                </div>
                <div id='c'>
                    <FormLabel htmlFor="address">Address</FormLabel>

                    <FormInput 
                        type="text"
                        id="address"
                        placeholder="Address"
                        onChange={(e) => setaddress(e.target.value)}
                        value={address}
                        required

                        
                    />
                </div>
            </div>
        </div>
        <br/>
                    <FormLabel htmlFor="password">Password</FormLabel>

                    <FormInput 
                        type={showPassword? "text" : "password"}
                        id="password"
                        placeholder="Password"
                        onChange={(e) => setpassword1(e.target.value)}
                        value={password1}

                    />

                      <input 
                          type="checkbox" 
                          id="show-password" 
                          onChange={handleCheckboxChange}
                      />
                      <label htmlFor="show-password">Show password</label>



                    <div id="b" >
    
                      <FormButton type ="button"  onClick={clear}>
                          Clear
                      </FormButton>
                      <FormButton 
                      type="button"
                      onClick={handleSave}>
                          Register
                      </FormButton>

                    </div>
             
                
        </FormContainer>
    </div>
    )

}
export default Registration;


const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  padding: 2rem;
  margin-top: -10px;
  margin-left: -550px;
  box-shadow: 0px 10px 15px lightgrey;
  border-radius: 10px;
  font-style: italic; 
  font-family: 'Cursive';
  background-color: rgb(189,190,186);
  height: 700px;
`;


const FormTitle = styled.h1 `
font-size: 3rem; 
margin-bottom: 2rem; 
text-shadow: 0px 5px 10px black; 
font-style: italic; 
font-family: 'Cursive';
margin-top: -39px;
sans-serif;
`;



const FormLabel = styled.label`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const FormInput = styled.input`
  flex: 1;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid lightgrey;
  box-shadow: 0px 5px 10px black;
  font-style: italic; 
  font-family: 'Cursive';
  width: 17rem;
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
  flex: 5;
  padding: 1rem;
  width: 19rem;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 2px solid lightgrey;
  box-shadow: 0px 5px 10px lightgrey;
  font-style: italic; 
  font-family: 'Cursive';
  
}

`;




import axios from "axios";
import React, {useState} from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import timage from "./TRImage.jpg";


const TRegistration = () => {

    const styles = {
        backgroundImage: `url(${timage})`,
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
    const [tId, settId] = useState('')
    const [gender, setgender] = useState('')
    const [address, setaddress] = useState('')
    const [password2, setpassword2] = useState('')
    const [qualification, setqualification] = useState('')
    // const [type, settype] = useState('')
    const [major, setmajor] = useState('')
    const [subTeacher, setsubTeacher] = useState('')
    const [hireDate, sethireDate] = useState('')
    const [tExperience, settExperience] = useState();
    const [showPassword, setshowPassword] = useState(false);

    const Navigate = useNavigate();
    const handleRedirect = () => {
      Navigate('/Login')
    }

    const handleSave = async (e) => {
        e.preventDefault();
        if (!email|| !fName || !phone || !tId || !gender || !address || !password2 || !qualification || !major || !subTeacher || !hireDate || !tExperience) {
          alert('All fields are required!');
          return;
        }
        const url ='https://localhost:7013/api/LOGINREG_/TeacherRegistration';
        const data = {
          EmailId : email,
          FullName : fName,
          Phone : phone,
          Gender : gender,
          Address : address,
          Password : password2,
          TeacherId : tId,
          // Type : type,
          Qualification : qualification,
          Major : major,
          SubTeacher : subTeacher,
          HireDate : hireDate,
          TExperience : tExperience,
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
        settId('');
        setfName('');
        setemail('');
        setphone('');
        setqualification('');
        // settype('');
        setgender('');
        setmajor('');
        setsubTeacher('');
        setaddress('');
        sethireDate('');
        settExperience('');
        setpassword2('');

    }


    const handleCheckboxChange = (e) => {
        setshowPassword(e.target.checked);
    };


    return (
        <div style={styles}>

        <FormContainer>
            <FormTitle>Teacher Registration Form</FormTitle>
            <br/>
            <div id='m'>
        <div id='col'>
        <div id='c' style={{paddingLeft:'40px'}}>
            
                <FormLabel htmlFor="email">Email ID</FormLabel>

                    <FormInput  
                        type="email"
                        id="email"
                        placeholder="Email ID"
                        onChange={(e) => setemail(e.target.value)}
                        value={email}
                        required
                    />
</div>
                <div id='c' style={{paddingLeft:'40px'}}>
                
                <FormLabel htmlFor="fName">Full Name</FormLabel>

                    <FormInput 
                        type="text"
                        id="fName"
                        placeholder="Full Name"
                        onChange={(e) => setfName(e.target.value)}
                        value={fName}
                        required


                    />
                </div>
                <div id='c' style={{paddingLeft:'40px'}}>
                
                <FormLabel htmlFor="tId">Teacher ID</FormLabel>
                    <FormInput
                        type="text"
                        id="tId"
                        placeholder="Teacher ID"
                        onChange={(e) => settId(e.target.value)}
                        value={tId}
                        required
                    />
                </div>
                <div id='c' style={{paddingLeft:'40px'}}>
                    
                <FormLabel htmlFor="phone">Phone No</FormLabel>

                    <FormInput 
                        type="text"
                        placeholder="Phone No"
                        onChange={(e) => setphone(e.target.value)}
                        value={phone}
                        required
                    />
                </div>
                
                <div id='c' style={{paddingLeft:'40px'}}>
                <FormLabel htmlFor="qualification">Qualification</FormLabel>

                    <FormInput 
                        type="text"
                        id="qualification"
                        placeholder="Qualification"
                        onChange={(e) => setqualification(e.target.value)}
                        value={qualification}
                        required

                    />
                </div>
                

                <div id='c' style={{marginBottom: '50px', paddingLeft:'40px'}}>
                <FormLabel htmlFor="hireDate" >Hire Date</FormLabel>

                    <FormInput 
                        type="date"
                        id="hireDate"
                        placeholder="Hire Date"
                        onChange={(e) => sethireDate(e.target.value)}
                        value={hireDate}
                        required


                    />
                </div>
                </div>
 
                <div id='col'>
                
            <div id='d'>
               <FormLabel htmlFor="major">Major</FormLabel>
                    <FormInput 
                        type="text"
                        id="major"
                        placeholder="Major"
                        onChange={(e) => setmajor(e.target.value)}
                        value={major}
                        required

                    />
            </div>
            
            <div id='d'>
                <FormLabel htmlFor="subTeacher">Subject Teacher</FormLabel>

                    <FormInput 
                        type="text"
                        id="subTeacher"
                        placeholder="Subject Teacher"
                        onChange={(e) => setsubTeacher(e.target.value)}
                        value={subTeacher}
                        required


                    />
            </div>
            <div id='d'>
                <FormLabel htmlFor="tExperience">Teaching Experience</FormLabel>

                    <FormInput 
                        type="text"
                        id="tExperience"
                        placeholder="Teaching Experience"
                        onChange={(e) => settExperience(e.target.value)}
                        value={tExperience}
                        required


                    />

            </div>
            <div id='d'>
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
            <div id='g'>
                            
                            <FormLabel htmlFor="gender" style={{marginTop: '45px'}}>Gender</FormLabel>
                <div>
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
                <br/>
            <div id='d'>
                <FormLabel htmlFor="password">Password</FormLabel>

                    <FormInput 
                        type={showPassword? "text" : "password"}
                        id="password"
                        placeholder="Password"
                        onChange={(e) => setpassword2(e.target.value)}
                        value={password2}

                    />

                      <input 
                          type="checkbox" 
                          id="show-password" 
                          onChange={handleCheckboxChange}
                      />
                      <label htmlFor="show-password">Show password</label>

            </div>
            </div>
  
</div>
                
                </div>
                <div id="b" style={{paddingLeft:'50px'}}>
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
export default TRegistration;


const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
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
  box-shadow: 0px 5px 10px lightgrey;
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
  margin-right: 60px;

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



// const FormContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-top: 5%;
// `;

// const FormTitle = styled.h1`
//   font-size: 36px;
//   margin-bottom: 2%;
// `;

// const FormLabel = styled.label`
//   font-size: 18px;
//   display: flex;
//   flex-direction: column;
//   margin-top: 2%;
// `;

// const FormInput = styled.input`
//   width: 50%;
//   height: 35px;
//   font-size: 18px;
//   margin-top: 2%;
//   padding-left: 2%;
//   border-radius: 5px;
//   border: 1px solid #ccc;
// `;

// const FormButton = styled.button`
//   width: 25%;
//   height: 35px;
//   font-size: 18px;
//   margin-top: 2%;
//   border-radius: 5px;
//   border: none;
//   background-color: #4CAF50;
//   color: white;
//   &:hover {
//     cursor: pointer;
//     background-color: #3e8e41;
//   }
// `;




// const FormContainer = styled.div`
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto;
//   padding: 2rem;
//   box-shadow: 0px 10px 15px lightgrey;
//   border-radius: 10px;
//   margin-bottom: 1rem;
//   height: 683px;
//   display: grid;
//   grid-template-columns: 200px 200px;
//   width: 70%;
//   column-gap: 300px;
//   margin-left: 180px;
//   margin-right: auto;
//   background-color: rgb(147, 108, 108);
//   `;
  
  // const FormContainerInner = styled.div`
  // display: grid;
  // grid-template-columns: 200px 200px;
  // width: 70%;
  // column-gap: 300px;
  // margin-left: 180px;;
  // margin-right: auto;

  

  
// `;

// const FormLabel = styled.div`
//   display: grid;
//   grid-template-columns: 200px 200px;
//   column-gap: 5px;
//   padding: 10px;
//   margin: 2px;

// `;

// const LabelField2 = styled.div`
//   column-gap: 5px;
//   padding: 10px;
//   margin-left: 103px;
//   width: 300px;

// `;

// const FormTitle = styled.h1`
//   font-size: 4rem;
//   margin-bottom: 1rem;
//   position: relative;
//   text-align: center;
//   font-color: red;
//   margin-top: -20px;
//   margin-right: 1rem;
//   text-shadow: 0px 2px 5px lightgrey;
//   display: block;
//   font-style: italic; 
//   font-family: 'Cursive'; 
//   }
// `;


// const FormContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 1rem;
//   width: 100%;
// `;

// const FormLabel = styled.label`
//   font-size: 1.2rem;
//   margin-right: 1rem;
//   text-shadow: 0px 2px 5px lightgrey;
//   text-align: right;
//   font-style: italic; 
//   font-family: 'Cursive'; 
//   padding: 10px;
//   column-gap: 5px;
// `;



// const FormInput = styled.input`
//   flex: 1;
//   padding: 1rem;
//   font-size: 1.2rem;
//   border-radius: 5px;
//   border: 1px solid lightgrey;
//   box-shadow: 0px 5px 10px lightgrey;
//   width: 280px;
//   font-style: italic; 
//   font-family: 'Cursive'; 
// `;

// const FormInput2 = styled.input`
//   padding: 1rem;
//   font-size: 1.2rem;
//   border: 1px solid lightgrey;
//   width: 20px;
//   display: inline;

// `;

// const FormButton = styled.button`
// background-color: #330000;
// color: white;
//   color: white;
//   padding: 1rem;
//   border-radius: 5px;
//   border: none;
//   font-size: 1.2rem;
//   margin-top: 1rem;
//   width: 200px;
//   margin-right: 60px;
//   cursor: pointer;
//   box-shadow: 0px 5px 10px lightgrey;
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0px 15px 20px lightgrey;
//   }
// `;












// const PwdBtn = styled.div`
//   display: block;
//   position: absolute;
//   right: 270px;
//   top: 495px;
// `;


// const Pwd = styled.div`
// display: block;
// margin-right: 30px;
// margin-top: 5px;

// `;

// const SPwd = styled.div`
// display: block;


// `;

// const SelectContainer = styled.div`
// select {  
//   flex: 5;
//   padding: 1rem;
//   width: 310px;
//   font-size: 1.2rem;
//   border-radius: 5px;
//   border: 2px solid lightgrey;
//   box-shadow: 0px 5px 10px lightgrey;
// }

// `;

// const Btn = styled.div`
// margin-top: 20px;
// margin-right: 200px;


// `;

// const PSp = styled.div`
// margin-top: 23px;
// margin-left: 200px;

// `;






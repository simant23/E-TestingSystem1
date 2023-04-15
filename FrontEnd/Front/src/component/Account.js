import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './test';
import '../App.css'


function StudentDetails() {
  const [details, setDetails] = useState({});
  // const [DOB, setDob] = useState('');
  // const [EnrollmentDate, setEnrollmentDate] = useState('');

  useEffect(() => {
    const type = window.localStorage.getItem('Type');
    const email = window.localStorage.getItem('EmailId')
    const UserId = window.localStorage.getItem('UserId')
    let url = '';
    if (type === 'Student') {
      url = `https://localhost:7013/api/LOGINREG_/StudentDetails?email=${email}`;
    
    } else if (type === 'Teacher') {
      url = `https://localhost:7013/api/LOGINREG_/TeacherDetails?email=${email}`;
    } else if (type === 'Admin') {
      url = `https://localhost:7013/api/LOGINREG_/AdminDetails?email=${email}`;
    } 
    console.log(email);

    axios.get(url)
      .then(response => {
        // console.log(response.data);
        if (type === 'Student'){
          console.log(response.data.Result);
        setDetails(response.data.Result);
        // setDob(response.data.result.DOB.slice(0, 10));
        // setEnrollmentDate(response.data.result.EnrollmentDate.slice(0, 10));

        }
        else if (type === 'Teacher'){
        setDetails(response.data.teacherDetails);

        }
        else if (type === 'Admin'){
          setDetails(response.data.adminDetails);
        }
      })
      .catch(error => {
        console.error(error);
      });
    }, []);

  const type = window.localStorage.getItem('Type');

  // let itemsToDisplay = null;

 if (type === 'Student' ) {

     return (
      <div>
        <p>UserId: {details.UserId}</p>
        <p>StudentId: {details.StudentId}</p>
        <p>EmailId: {details.EmailId}</p>
        <p>FullName: {details.FullName}</p>
        <p>Phone: {details.Phone}</p>
        <p>Address: {details.Address}</p>
        <p>GuardianName: {details.GuardianName}</p>
        <p>Class: {details.Class}</p>
        <p>DOB: {details.DOB}</p>
        <p>Enrollment Date: {details.EnrollmentDate}</p>


        <EditSDetails
          UserId={details.UserId} 
          StudentId={details.StudentId} 
          EmailId={details.EmailId} 
          FullName={details.FullName} 
          Phone={details.Phone} 
          // Gender={details.Gender} 
          Address={details.Address} 
          GuardianName={details.GuardianName} 
          Class={details.Class} 
          DOB={details.DOB} 
          EnrollmentDate={details.EnrollmentDate} 
        />
      </div>
    );
  } else if (type === 'Teacher' ) {

    return (
      <div>
            <p>
              UserId: 
              {details.UserId}
            </p>
        <p>
          TeacherId: 
          {details.TeacherId}
          </p>
          
        <p>EmailId: 
            {details.EmailId}
          </p>
        <p>FullName: 
          {details.FullName}
          </p>
          
        <p>Phone: 
          {details.Phone}
          </p>
        <p>Address: 
          {details.Address}
          </p>
        <p>Gender: 
          {details.Gender}
          </p>
        <p>Qualification: 
          {details.Qualification}
          </p>
        <p>Major: 
          {details.Major}
          </p>
        <p>Subject Teacher: 
          {details.SubTeacher}
          </p>
        <p>Teaching Experience: 
          {details.TExperience}
          </p>
        {/* <p>FullName: {details.FullName}</p> */}
        {/* <p>Phone: {details.Phone}</p> */}
        {/* <p>Address: {details.Address}</p> */}
        {/* <p>Gender: {details.Gender}</p> */}
        {/* <p>Qualification: {details.Qualification}</p> */}
        {/* <p>Major: {details.Major}</p> */}
        {/* <p>Subject Teacher: {details.SubTeacher}</p> */}
        {/* <p>Teaching Experience: {details.TExperience}</p> */}
        

        <EditTDetails
          UserId={details.UserId} 
          TeacherId={details.TeacherId} 
          EmailId={details.EmailId} 
          FullName={details.FullName} 
          Phone={details.Phone} 
          Gender={details.Gender} 
          Address={details.Address} 
          Qualification={details.Qualification} 
          Major={details.Major} 
          SubTeacher={details.SubTeacher} 
          TExperience={details.TExperience} 
        />
        
        
      </div>
    );
  } else if (type === 'Admin') {
    return (
      <div style={{backgroundColor:'blue', width:'500px'}}>
        <div>
        <p>UserId: {details.UserId}</p>
        <p>EmailId: {details.EmailId}</p>
        <p>FullName: {details.FullName}</p>
        <p>Phone: {details.Phone}</p>
        <p>Address: {details.Address}</p>
        </div>
        <EditADetails
          UserId={details.UserId} 
          EmailId={details.EmailId} 
          FullName={details.FullName} 
          Phone={details.Phone} 
          Address={details.Address} 
        />
      </div>
    );
  }

}

const EditTDetails = ({UserId,TeacherId,EmailId,FullName,Phone,Gender,Address, Qualification,SubTeacher, Major,TExperience }) => {
 const [showUpdateDetails, setshowUpdateDetails] = useState(false);

 console.log('UserId',UserId);
 console.log('TeacherId',TeacherId);
 console.log('EmailId',EmailId);
 console.log('FullName',FullName);
 console.log('Phone',Phone);
 console.log('Gender',Gender);
 console.log('Address',Address);
 console.log('Qualification',Qualification);
 console.log('Major',Major);
 console.log('SubTeacher',SubTeacher);
 console.log('TExperience',TExperience);

const [details, setDetails] = useState({});

useEffect(() => {
  setDetails({
    UserId: UserId,
    TeacherId: TeacherId,
    EmailId: EmailId,
    FullName: FullName,
    Phone: Phone,
    Gender: Gender,
    Address: Address,
    SubTeacher: SubTeacher,
    Qualification: Qualification,
    Major: Major,
    TExperience: TExperience,
  })
}, [UserId]);

const handleChange = (e) => {
  setDetails({
    ...details,
    [e.target.name]: e.target.value
  });
};

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setDetails(prevState => ({
//     ...prevState,
//     [name]: value
//   }));
// };


const handleSubmit = (e) => {
  e.preventDefault();
  console.log(UserId);
  console.log(EmailId);
  console.log(TeacherId);
  console.log(FullName);
  console.log(Phone);
  console.log(Gender);
  console.log(Address);
  console.log(Qualification);
  console.log(SubTeacher);
  console.log(Major);
  console.log(TExperience);

  console.log(details);
  const url = `https://localhost:7013/api/Teacher`;
  axios.put(url, details)
    .then(respone => {
      console.log(respone.data);
      setshowUpdateDetails(false);
      alert("Details Successfully Updated");
    })
    .catch(e => {
      console.error(e);
      alert("Error Updating Details");
    });
}

  const handleCancel = () => {
    setshowUpdateDetails(false);
  };


  return(
    <div key={details.TeacherId}>
      {window.localStorage.getItem('Type') === 'Teacher' && <button onClick={() => setshowUpdateDetails(true)}>Edit</button>}
        {showUpdateDetails && (
          <form  onSubmit={handleSubmit}>
          {/* <label id="A1">
          <label id='A2'> 
              UserId:
            <input type="textarea" name="UserId" value={details.UserId} onChange={handleChange}  id="A2"  disabled />
          </label>
          <label id="D2" >
          TeacherId:
          <input type="textarea" name="TeacherId" value={details.TeacherId} onChange={handleChange}  id="D2"  
          disabled />
        </label>
        <label id="D2" >
          EmailId:
          <input type="textarea" name="EmailId" value={details.EmailId} onChange={handleChange}  id="D2"  
           />
        </label>
        <label id="D2" >
          Full Name:
          <input type="textarea" name="FullName" value={details.FullName} onChange={handleChange}  id="D2"  
           />
        </label>
        <label id="D2" >
          Phone:
          <input type="textarea" name="Phone" value={details.Phone} onChange={handleChange}  id="D2"  
           />
        </label>
        <label id="D2" >
          Gender:
          <input type="textarea" name="Gender" value={details.Gender} onChange={handleChange}  id="D2"  
           />
        </label>
        <label id="D2" >
          Address:
          <input type="textarea" name="Address" value={details.Address} onChange={handleChange}  id="D2"  
           />
        </label>
        <label id="D2" >
          Qualification:
          <input type="textarea" name="Qualification" value={details.Qualification} onChange={handleChange}  id="D2"  
           />
        </label>
        <label id="D2" >
          Major:
          <input type="textarea" name="Major" value={details.Major} onChange={handleChange}  id="D2"  
           />
        </label>
        <label id="D2" >
          Teaching Experience:
          <input type="textarea" name="TExperience" value={details.TExperience} onChange={handleChange}  id="D2"  
           />
        </label>
        </label> */}
  <div class="container">
    <label for="UserId">UserId:</label>
    <input type="textarea" name="UserId" value={details.UserId} onChange={handleChange} id="UserId" disabled />

    <label for="TeacherId">TeacherId:</label>
    <input type="textarea" name="TeacherId" value={details.TeacherId} onChange={handleChange} id="TeacherId" disabled />
</div>
<div class="container">

    <label for="EmailId">EmailId:</label>
    <input type="textarea" name="EmailId" value={details.EmailId} onChange={handleChange} id="EmailId" />

    <label for="FullName">Full Name:</label>
    <input type="textarea" name="FullName" value={details.FullName} onChange={handleChange} id="FullName" />
</div>
<div class="container">
    <label for="Phone">Phone:</label>
    <input type="textarea" name="Phone" value={details.Phone} onChange={handleChange} id="Phone" />


    <label for="Gender">Gender:</label>
    <input type="textarea" name="Gender" value={details.Gender} onChange={handleChange} id="Gender" />
</div>
<div class="container">

    <label for="Address">Address:</label>
    <input type="textarea" name="Address" value={details.Address} onChange={handleChange} id="Address" />

    <label for="Qualification">Qualification:</label>
    <input type="textarea" name="Qualification" value={details.Qualification} onChange={handleChange} id="Qualification" />
</div>
<div class="container">

    <label for="Major">Major:</label>
    <input type="textarea" name="Major" value={details.Major} onChange={handleChange} id="Major" />

    <label for="TExperience">Teaching Experience:</label>
    <input type="textarea" name="TExperience" value={details.TExperience} onChange={handleChange} id="TExperience" />
</div>
<div class="container">
    
    <label for="TExperience">Subject Teacher:</label>
    <input type="textarea" name="SubTeacher" value={details.SubTeacher} onChange={handleChange} id="SubTeacher" />

</div>

        <br/>
          {/* </div> */}
          <button id="B1" type="submit">Update</button>
          <button id="B3" type="button" onClick={handleCancel}>Cancel</button>
        </form>
        )

        }
    </div>
  )
}

// ---------------------------------------------------------------------------------------------------------------------------
const EditADetails = ({UserId,EmailId,FullName,Phone,Address }) => {
  const [showUpdateDetails, setshowUpdateDetails] = useState(false);
 
  console.log('UserId',UserId);
  console.log('EmailId',EmailId);
  console.log('FullName',FullName);
  console.log('Phone',Phone);
 
 const [details, setDetails] = useState({});
 
 useEffect(() => {
   setDetails({
     UserId: UserId,
     EmailId: EmailId,
     FullName: FullName,
     Phone: Phone,
     Address: Address,
   })
 }, [UserId]);
 
 const handleChange = (e) => {
   setDetails({
     ...details,
     [e.target.name]: e.target.value
   });
 };
 
 
 
 const handleSubmit = (e) => {
   e.preventDefault();
   console.log(UserId);
   console.log(EmailId);
   console.log(FullName);
   console.log(Phone);
   console.log(Address);
 
   console.log(details);
   const url = `https://localhost:7013/api/Admin/AdminDetails`;
   axios.put(url, details)
     .then(respone => {
       console.log(respone.data);
       setshowUpdateDetails(false);
       alert("Details Successfully Updated");
     })
     .catch(e => {
       console.error(e);
       alert("Error Updating Details");
     });
 }
 
   const handleCancel = () => {
     setshowUpdateDetails(false);
   };
 
 
   return(
     <div key={details.UserId}>
       {window.localStorage.getItem('Type') === 'Admin' && <button onClick={() => setshowUpdateDetails(true)}>Edit</button>}
         {showUpdateDetails && (
           <form  onSubmit={handleSubmit}>
   <div class="container">
     <label for="UserId">UserId:</label>
     <input type="textarea" name="UserId" value={details.UserId} onChange={handleChange} id="UserId" disabled />
 
     <label for="EmailId">EmailId:</label>
     <input type="textarea" name="EmailId" value={details.EmailId} onChange={handleChange} id="EmailId" />
 </div>
 <div class="container">
 
 
     <label for="FullName">Full Name:</label>
     <input type="textarea" name="FullName" value={details.FullName} onChange={handleChange} id="FullName" />
 </div>
 <div class="container">
     <label for="Phone">Phone:</label>
     <input type="textarea" name="Phone" value={details.Phone} onChange={handleChange} id="Phone" />
 
 
 </div>
 <div class="container">
 
     <label for="Address">Address:</label>
     <input type="textarea" name="Address" value={details.Address} onChange={handleChange} id="Address" />
 
 </div>
 
 
         <br/>
           {/* </div> */}
           <button id="B1" type="submit">Update</button>
           <button id="B3" type="button" onClick={handleCancel}>Cancel</button>
         </form>
         )
 
         }
     </div>
   )
 }

 const EditSDetails = ({UserId,StudentId,EmailId,FullName,Phone,Gender,Address, GuardianName,Class, DOB,EnrollmentDate }) => {
  const [showUpdateDetails, setshowUpdateDetails] = useState(false);
 

  console.log('UserId',UserId);
  console.log('StudentId',StudentId);
  console.log('EmailId',EmailId);
  console.log('FullName',FullName);
  console.log('Phone',Phone);
  console.log('Gender',Gender);
  console.log('Address',Address);
  console.log('GuardianName',GuardianName);
  console.log('Grade',Class);
  console.log('DOB',DOB);
  console.log('EnrollmentDate',EnrollmentDate);
 
 const [details, setDetails] = useState({});
 
 useEffect(() => {
   setDetails({
     UserId: UserId,
     StudentId: StudentId,
     EmailId: EmailId,
     FullName: FullName,
     Phone: Phone,
     Gender: Gender,
     Address: Address,
     GuardianName: GuardianName,
     Class: Class,
     DOB: DOB,
     EnrollmentDate: EnrollmentDate,
   })
 }, [UserId]);
 
 const handleChange = (e) => {
   setDetails({
     ...details,
     [e.target.name]: e.target.value
   });
 };
 
 // const handleChange = (e) => {
 //   const { name, value } = e.target;
 //   setDetails(prevState => ({
 //     ...prevState,
 //     [name]: value
 //   }));
 // };
 
 
 const handleSubmit = (e) => {
   e.preventDefault();
   console.log(UserId);
   console.log(EmailId);
   console.log(StudentId);
   console.log(FullName);
   console.log(Phone);
   console.log(Gender);
   console.log(Address);
   console.log(GuardianName);
   console.log(Class);
   console.log(DOB);
   console.log(EnrollmentDate);
 
   console.log(details);
   const url = `https://localhost:7013/api/Student/Update`;
   axios.put(url, details)
     .then(respone => {
       console.log(respone.data);
       setshowUpdateDetails(false);
       alert("Details Successfully Updated");
     })
     .catch(e => {
       console.error(e);
       alert("Error Updating Details");
     });
 }
 
   const handleCancel = () => {
     setshowUpdateDetails(false);
   };
 
 
   return(
     <div key={details.StudentId}>
       {window.localStorage.getItem('UserId') === String(details.UserId) && <button onClick={() => setshowUpdateDetails(true)}>Edit</button>}
         {showUpdateDetails && (
           <form  onSubmit={handleSubmit}>
   <div class="container">
     <label for="UserId">UserId:</label>
     <input type="textarea" name="UserId" value={details.UserId} onChange={handleChange}  disabled />
 
     <label for="StudentId">StudentId:</label>
     <input type="textarea" name="StudentId" value={details.StudentId} onChange={handleChange}  disabled />
 </div>
 <div class="container">
 
     <label for="EmailId">EmailId:</label>
     <input type="textarea" name="EmailId" value={details.EmailId} onChange={handleChange}  />
 
     <label for="FullName">Full Name:</label>
     <input type="textarea" name="FullName" value={details.FullName} onChange={handleChange} />
 </div>
 <div class="container">
     <label for="Phone">Phone:</label>
     <input type="textarea" name="Phone" value={details.Phone} onChange={handleChange} />
 
 
     <label for="Gender">Gender:</label>
     <input type="textarea" name="Gender" value={details.Gender} onChange={handleChange} />
 </div>
 <div class="container">
 
     <label for="Address">Address:</label>
     <input type="textarea" name="Address" value={details.Address} onChange={handleChange} />
 
     <label for="GuardianName">GuardianName:</label>
     <input type="textarea" name="GuardianName" value={details.GuardianName} onChange={handleChange} />
 </div>
 <div class="container">
 
     <label for="Class">Class:</label>
     <input type="textarea" name="Class" value={details.Class} onChange={handleChange} />
 
     <label for="DOB">Date of Birth:</label>
     <input type="textarea" name="DOB" value={details.DOB} onChange={handleChange} />
 </div>
 <div class="container">
     
     <label for="TExperience">TSubject Teacher:</label>
     <input type="textarea" name="SubTeacher" value={details.SubTeacher} onChange={handleChange} />

     <label for="EnrollmentDate">Enrollment Date:</label>
     <input type="textarea" name="EnrollmentDate" value={details.EnrollmentDate} onChange={handleChange} />
 
 </div>
 
         <br/>
           {/* </div> */}
           <button id="B1" type="submit">Update</button>
           <button id="B3" type="button" onClick={handleCancel}>Cancel</button>
         </form>
         )
 
         }
     </div>
   )
 }

function AccountPage() {
    return(      
    // <div id="mainbg" style={{height:'auto', background:'yellow'}}>
    //       <FormTitle>Account Information Board</FormTitle>
          
    //       <div style={{display:"flex", gap: '0'}} className=""></div>
    //       <Nav/>
    //     <div  style={{width:'400px', paddingLeft:'600px', marginTop:'100px'}}>
    //       <StudentDetails/>
    //     </div>

    //     </div>
    <div class='main' style={{height:'auto'}}>
      <div class='navvv'>
        <Nav/>
      </div>
      <div class='content'>
      <FormTitle>Account Information Board</FormTitle>
        <StudentDetails/>
      </div>
    </div>
        
    );
  }


export default AccountPage;




const NContainer = styled.div`
  // background-color: white;
  padding-left: 10px;
  margin-top: -55px;
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
  margin-top: 0px;
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
margin-bottom: 0px;
`;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Nav from './test';
import { Link } from 'react-router-dom';

// const CreateExam = () => {
//     const [SubjectId, setSubjectId] = useState('');
//     const [Class, setClass] = useState('');
//     const [FullMark, setFullMark] = useState('');
//     const [PassMark, setPassMark] = useState('');
//     const [ExamDate, setExamDate] = useState('');
//     const [StartTime, setStartTime] = useState('');
//     const [ExamDuration, setExamDuration] = useState('');
//     const [ExamDescription, setExamDescription] = useState('');
//     const UserId = window.localStorage.getItem('UserId');
//     const [showCreateExam, setShowCreateExam] = useState(false);
    
//     const handleExamClick = () => {
//       setShowCreateExam(true);

      
      
//     };
    
//     const handleSubmit = async (e) => {
//       e.preventDefault();
      
//       try {
//         console.log(SubjectId);
//         console.log(Class);
//         console.log(FullMark);
//         console.log(PassMark);
//         console.log(ExamDate);
//         console.log(StartTime);
//         console.log(ExamDuration);
//         console.log(ExamDescription);
//         console.log(UserId);
//         const response = await axios.post('https://localhost:7013/api/TExam', {
//           SubjectId: SubjectId,
//           Class: Class,
//           FullMark: FullMark,
//           PassMark: PassMark,
//           ExamDate: ExamDate,
//           StartTime: StartTime,
//           ExamDuration: ExamDuration,
//           ExamDescription: ExamDescription,
//           UserId: parseInt(UserId),
//         });
//         // const IExamId = window.localStorage.getItem('IExamId');
//       window.localStorage.setItem('IExamId');
        
        
//         alert("Exam Created");
  
//         // setShowCreateExam(true);
//       } catch (e) {
//         alert("Error Creating Exam")
//       }
//     }
  
//     const Clear = () => {
//       setSubjectId('');
//       setClass('');
//       setFullMark('');
//       setPassMark('');
//       setExamDate('');
//       setStartTime('');
//       setExamDuration('');
//       setExamDescription('');
//       alert("Exam Cleared");
  
//     }
  
//     const handleCancelClick = () => {
//       setShowCreateExam(false);
//       alert("Exam Cancelled");
  
//     };
  
//     return (
//       <div style={{paddingLeft:'500px', width:'500px', fontFamily:'Cursive', fontStyle:'italic' }}>
//         <div id="subject-table">
//       <table>
//         <thead>
//           <tr >
//             <th style={{width:'250px'}}>Subject Name</th>
//             <th style={{width:'250px'}}>Subject ID</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Computer Science</td>
//             <td>1</td>
//           </tr>
//           <tr>
//             <td>Mathematics</td>
//             <td>11</td>
//           </tr>
//           <tr>
//             <td>Science</td>
//             <td>21</td>
//           </tr>
//           <tr>
//             <td>English</td>
//             <td>31</td>
//           </tr>
//           <tr>
//             <td>Nepali</td>
//             <td>41</td>
//           </tr>
//           <tr>
//             <td>Social Studies</td>
//             <td>51</td>
//           </tr>
//           <tr>
//             <td>EPH</td>
//             <td>61</td>
//           </tr>
//           <tr>
//             <td>Opt. Mathematics</td>
//             <td>71</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//     <div style={{border:'1px solid black', padding:'10px', backgroundColor:'#f1f1f1'}}>
//             <p><b>Instruction:</b> Pleaes View the SubjectId from the above table and mention SubjectId for which you want to Create exam!!
//             Thank You!!</p>
//     </div>

         
//     {window.localStorage.getItem('Type') === 'Teacher' &&<FormButton id="AddQ" onClick={handleExamClick}>Create Exam</FormButton>}
//       {/* {window.localStorage.getItem("Type") === 'Teacher' && <FormButton id="AddQ" onClick={handleExamClick}>Create Exam</FormButton>} */}
  
//       {showCreateExam && (
//         <form onSubmit={handleSubmit}>
//   <label id="D1">
//   <label id="D2" style={{ 
//         width: '800px', 
//         height: '150px',
//         fontSize: '25px', 
//         border: '2px solid #ccc',
//       }}> 
//     Subject Id:
//     <input id="D2" style={{ 
//         width: '750px', 
//         height: '50px',}}
//       type="text" 
//       value={SubjectId} 
//       onChange={(e) => setSubjectId(e.target.value)} 
//     />
//   </label>
  
//   <label id="D2" style={{ 
//         width: '800px', 
//         height: '200px',
//         fontSize: '25px', 
//         border: '2px solid #ccc',
//       }}>
//     Class:
//     <textarea id="D2"  style={{ 
//         width: '750px', 
//         height: '100px',}}
//       value={Class} 
//       onChange={(e) => setClass(e.target.value)} 
//     />
//   </label>

//   <label id="D2" style={{ 
//         width: '800px', 
//         height: '200px',
//         fontSize: '25px', 
//         border: '2px solid #ccc',
//       }}>
//     FullMark:
//     <textarea id="D2"  style={{ 
//         width: '750px', 
//         height: '100px',}}
//       value={FullMark} 
//       onChange={(e) => setFullMark(e.target.value)} 
//     />
//   </label>
//   <label id="D2" style={{ 
//         width: '800px', 
//         height: '200px',
//         fontSize: '25px', 
//         border: '2px solid #ccc',
//       }}>
//     PassMark:
//     <textarea id="D2"  style={{ 
//         width: '750px', 
//         height: '100px',}}
//       value={PassMark} 
//       onChange={(e) => setPassMark(e.target.value)} 
//     />
//   </label>
//   <label id="D2" style={{ 
//         width: '800px', 
//         height: '200px',
//         fontSize: '25px', 
//         border: '2px solid #ccc',
//       }}>
//     ExamDate:
//     <textarea id="D2"  style={{ 
//         width: '750px', 
//         height: '100px',}}
//       value={ExamDate} 
//       onChange={(e) => setExamDate(e.target.value)} 
//     />
//   </label>
//   <label id="D2" style={{ 
//         width: '800px', 
//         height: '200px',
//         fontSize: '25px', 
//         border: '2px solid #ccc',
//       }}>
//     StartTime:
//     <textarea id="D2"  style={{ 
//         width: '750px', 
//         height: '100px',}}
//       value={StartTime} 
//       onChange={(e) => setStartTime(e.target.value)} 
//     />
//   </label>
//   <label id="D2" style={{ 
//         width: '800px', 
//         height: '200px',
//         fontSize: '25px', 
//         border: '2px solid #ccc',
//       }}>
//     ExamDuration:
//     <textarea id="D2"  style={{ 
//         width: '750px', 
//         height: '100px',}}
//       value={ExamDuration} 
//       onChange={(e) => setExamDuration(e.target.value)} 
//     />
//   </label>
//   <label id="D2" style={{ 
//         width: '800px', 
//         height: '200px',
//         fontSize: '25px', 
//         border: '2px solid #ccc',
//       }}>
//     ExamDescription:
//     <textarea id="D2"  style={{ 
//         width: '750px', 
//         height: '100px',}}
//       value={ExamDescription} 
//       onChange={(e) => setExamDescription(e.target.value)} 
//     />
//   </label>
//   </label>
  
//           <br />
//           <div id="BN">
//           <button id="C1" type="submit">Create</button>
//           <br />
//           <br />
//           <button id="C2" type="button" onClick={Clear}>Clear</button>
//           <br />
//           <br />
//           <button id="C3" type="button" onClick={handleCancelClick}>Cancel</button>
//           <br/>
//           <br/>
//         </div>
//         </form>
  
//       )}
//   </div>
  
  
//     )
//   }

const CreateExam = () => {
  const [SubjectId, setSubjectId] = useState('');
  const [Class, setClass] = useState('');
  const [FullMark, setFullMark] = useState('');
  const [PassMark, setPassMark] = useState('');
  const [ExamDate, setExamDate] = useState('');
  const [StartTime, setStartTime] = useState('');
  const [ExamDuration, setExamDuration] = useState('');
  const [ExamDescription, setExamDescription] = useState('');
  const UserId = window.localStorage.getItem('UserId');
  const [showCreateExam, setShowCreateExam] = useState(false);
  
  const handleExamClick = () => {
    setShowCreateExam(true);

    
    
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log(SubjectId);
      console.log(Class);
      console.log(FullMark);
      console.log(PassMark);
      console.log(ExamDate);
      console.log(StartTime);
      console.log(ExamDuration);
      console.log(ExamDescription);
      console.log(UserId);
      
      const response = await axios.post('https://localhost:7013/api/TExam', {
        SubjectId: SubjectId,
        Class: Class,
        FullMark: FullMark,
        PassMark: PassMark,
        ExamDate: ExamDate,
        StartTime: StartTime,
        ExamDuration: ExamDuration,
        ExamDescription: ExamDescription,
        UserId: parseInt(UserId),
      });
      // const IExamId = window.localStorage.getItem('IExamId');
    // window.localStorage.setItem('IExamId', IExamId);
      
      console.log(response);
      alert("Exam Created ");

      // setShowCreateExam(true);
    } catch (e) {
      alert("Error Creating Exam hhh")
    }
  }

  const Clear = () => {
    setSubjectId('');
    setClass('');
    setFullMark('');
    setPassMark('');
    setExamDate('');
    setStartTime('');
    setExamDuration('');
    setExamDescription('');
    alert("Exam Cleared");

  }

  const handleCancelClick = () => {
    setShowCreateExam(false);
    alert("Exam Cancelled");

  };

  return (
    <div style={{paddingLeft:'100px', width:'500px', fontFamily:'Cursive', fontStyle:'italic' }}>
    {window.localStorage.getItem("Type") === 'Teacher' &&
      <div id="subject-table">
    <table>
      <thead>
        <tr >
          <th style={{width:'250px'}}>Subject Name</th>
          <th style={{width:'250px'}}>Subject ID</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Computer Science</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Mathematics</td>
          <td>11</td>
        </tr>
        <tr>
          <td>Science</td>
          <td>21</td>
        </tr>
        <tr>
          <td>English</td>
          <td>31</td>
        </tr>
        <tr>
          <td>Nepali</td>
          <td>41</td>
        </tr>
        <tr>
          <td>Social Studies</td>
          <td>51</td>
        </tr>
        <tr>
          <td>EPH</td>
          <td>61</td>
        </tr>
        <tr>
          <td>Opt. Mathematics</td>
          <td>71</td>
        </tr>
      </tbody>
    </table>
  </div>
        }
        {window.localStorage.getItem("Type") === 'Teacher' &&
  <div style={{border:'1px solid black', padding:'10px', backgroundColor:'#f1f1f1'}}>
          <p><b>Instruction:</b> Pleaes View the SubjectId from the above table and mention SubjectId for which you want to Create exam!!
          Thank You!!</p>
  </div>
}
       
  {window.localStorage.getItem('Type') === 'Teacher' &&<FormButton id="AddQ" onClick={handleExamClick}>Create Exam</FormButton>}
    {/* {window.localStorage.getItem("Type") === 'Teacher' && <FormButton id="AddQ" onClick={handleExamClick}>Create Exam</FormButton>} */}

    {showCreateExam && (
      <form onSubmit={handleSubmit}>
<label id="D1">
<label id="D2" style={{ 
      width: '800px', 
      height: '150px',
      fontSize: '25px', 
      border: '2px solid #ccc',
    }}> 
  Subject Id:
  <input id="D2" style={{ 
      width: '750px', 
      height: '50px',}}
    type="text" 
    value={SubjectId} 
    onChange={(e) => setSubjectId(e.target.value)} 
  />
</label>

<label id="D2" style={{ 
      width: '800px', 
      height: '200px',
      fontSize: '25px', 
      border: '2px solid #ccc',
    }}>
  Class:
  <textarea id="D2"  style={{ 
      width: '750px', 
      height: '100px',}}
    value={Class} 
    onChange={(e) => setClass(e.target.value)} 
  />
</label>

<label id="D2" style={{ 
      width: '800px', 
      height: '200px',
      fontSize: '25px', 
      border: '2px solid #ccc',
    }}>
  FullMark:
  <textarea id="D2"  style={{ 
      width: '750px', 
      height: '100px',}}
    value={FullMark} 
    onChange={(e) => setFullMark(e.target.value)} 
  />
</label>
<label id="D2" style={{ 
      width: '800px', 
      height: '200px',
      fontSize: '25px', 
      border: '2px solid #ccc',
    }}>
  PassMark:
  <textarea id="D2"  style={{ 
      width: '750px', 
      height: '100px',}}
    value={PassMark} 
    onChange={(e) => setPassMark(e.target.value)} 
  />
</label>
<label id="D2" style={{ 
      width: '800px', 
      height: '200px',
      fontSize: '25px', 
      border: '2px solid #ccc',
    }}>
  ExamDate:
  <textarea id="D2"  style={{ 
      width: '750px', 
      height: '100px',}}
    value={ExamDate} 
    onChange={(e) => setExamDate(e.target.value)} 
  />
</label>
<label id="D2" style={{ 
      width: '800px', 
      height: '200px',
      fontSize: '25px', 
      border: '2px solid #ccc',
    }}>
  StartTime:
  <textarea id="D2"  style={{ 
      width: '750px', 
      height: '100px',}}
    value={StartTime} 
    onChange={(e) => setStartTime(e.target.value)} 
  />
</label>
<label id="D2" style={{ 
      width: '800px', 
      height: '200px',
      fontSize: '25px', 
      border: '2px solid #ccc',
    }}>
  ExamDuration:
  <textarea id="D2"  style={{ 
      width: '750px', 
      height: '100px',}}
    value={ExamDuration} 
    onChange={(e) => setExamDuration(e.target.value)} 
  />
</label>
<label id="D2" style={{ 
      width: '800px', 
      height: '200px',
      fontSize: '25px', 
      border: '2px solid #ccc',
    }}>
  ExamDescription:
  <textarea id="D2"  style={{ 
      width: '750px', 
      height: '100px',}}
    value={ExamDescription} 
    onChange={(e) => setExamDescription(e.target.value)} 
  />
</label>
</label>

        <br />
        <div id="BN">
        <button id="C1" type="submit">Create</button>
        <br />
        <br />
        <button id="C2" type="button" onClick={Clear}>Clear</button>
        <br />
        <br />
        <button id="C3" type="button" onClick={handleCancelClick}>Cancel</button>
        <br/>
        <br/>
      </div>
      </form>

    )}
</div>


  )
}

  const ViewExam = () => {
    const [Exams, setExam] = useState([]);
    // const [hideQuestions, setHideQuestions] = useState(false);
    const UserId = window.localStorage.getItem('UserId');

    const loadData=async()=>{
      axios.get(`https://localhost:7013/api/TExam/TeacherView`)
      .then(response => {
        setExam(response.data);
      }
      )
      .catch(error => {
        console.error(error);
      });
    }
    useEffect(() => {
    loadData()
     
    }, []);
    

    const DeleteExam = (IExamId) => {
      if (window.confirm("Do you want to delete the Exam?")) {
      const url = `https://localhost:7013/api/TExam/${IExamId}`;
      axios.delete(url)
        .then(response => {
          console.log(response.data);
          setExam(Exams.filter(n => n.IExamId !== IExamId));
          alert('Exam deleted successfully');
        })
        .catch(error => {
          console.error(error);
        });
      }
    };

    const makePublic=async(IExamId)=>{
      if (window.confirm("Do you want to make the Exam available to student?")) {
       
        const url = ` https://localhost:7013/api/TExam/UpdateExamStatus?IExamId=${IExamId}`;
        axios.put(url,{})
          .then(response => {
            console.log(response.data);
            alert('Exam is published');
            loadData()
          })
          .catch(error => {
            console.error(error);
          });
        }
    }
    const closeExam=async(IExamId)=>{
      if (window.confirm("Do you want to make the close exam to student?")) {
       
        const url = ` https://localhost:7013/api/TExam/UpdateExamStatusFalse?IExamId=${IExamId}`;
        axios.put(url,{})
          .then(response => {
            console.log(response.data);
            alert('Exam is closed');
            loadData()
          })
          .catch(error => {
            console.error(error);
          });
        }
    }

    return (
      <div id='noticep' style={{paddingLeft:'100px', marginTop:'100px'}}>
        {Exams.map(Exam => (
          <div id="question" key={Exam.IExamId}>
            <div id='nbtns' style={{display:'flex', flexDirection:'row', gap:'10px', paddingLeft:'680px'}} >
            {window.localStorage.getItem("Type") === 'Teacher' &&
            (
              <>
              {Exam?.ExamStatus===0?
            <button style={{color:'red'}}  key={Exam.IExamId} onClick={() => makePublic(Exam.IExamId)}>Publish Exam</button>:
            <button style={{color:'red'}}  key={Exam.IExamId} onClick={() => closeExam(Exam.IExamId)}>Close Exam</button>
          }
              </>
            )
            }
            {window.localStorage.getItem("Type") === 'Teacher' && 
            
            <EditExam id="ibtn" style={{marginTop:'20px'}}
            Class={Exam.Class}
            FullMark={Exam.FullMark}
            PassMark={Exam.PassMark} 
            ExamDate={Exam.ExamDate}
            StartTime={Exam.StartTime}
            ExamDuration={Exam.ExamDuration} 
            ExamDescription={Exam.ExamDescription}
            IExamId={Exam.IExamId}
            UserId={Exam.UserId}
            />}
            {window.localStorage.getItem("Type") === 'Teacher' && <button style={{color:'red'}}  key={Exam.IExamId} onClick={() => DeleteExam(Exam.IExamId)}>Delete</button>}
            </div>
            
            <div id="papers-table">
            <table>
              {/* <tr>
                <td><b>Exam Id:</b></td>
                <td>{Exams.IExamId}</td>
              </tr> */}
              <tr>
                <td><b>Exam Description:</b></td>
                <td>{Exam.ExamDescription}</td>
              </tr>
              <tr>
                <td><b>Subject:</b></td>
                <td>{Exam.SubjectName}</td>
              </tr>
              <tr>
                <td><b>Class:</b></td>
                <td>{Exam.Class}</td>
              </tr>
              <tr>
                <td><b>ExamDate:</b></td>
                <td>{Exam.ExamDate.slice(0,10)}</td>
              </tr>
              <tr>
                <td><b>Full Mark:</b></td>
                <td>{Exam.FullMark}</td>
              </tr>
              <tr>
                <td><b>Pass Mark:</b></td>
                <td>{Exam.PassMark}</td>
              </tr>
              <tr>
                <td><b>Start Time:</b></td>
                <td>{Exam.StartTime.slice(0,5)}</td>
              </tr>
              <tr>
                <td><b>ExamDuration:</b></td>
                <td>{Exam.ExamDuration}</td>
              </tr>
            </table>
            <br/>
              {window.localStorage.getItem("Type") === 'Teacher' &&<CreateEDetails IExamId={Exam.IExamId}/>}
            <ViewEDetails IExamId={Exam.IExamId} examStatus={Exam.ExamStatus}/>
            <br/>
            <br/>
               {window.localStorage.getItem("Type") === 'Teacher' &&<CreateEQuestions IExamId={Exam.IExamId}/>}
<br/>
<br/>
              {/* {window.localStorage.getItem("Type") === 'Teacher' &&
              <button onClick={handleShowQuestions}>Show Questions</button>
            }
            {window.localStorage.getItem("Type") === 'Teacher' && showQuestions &&
              <button onClick={handleHideQuestions}>Hide Questions</button>
            } */}
            
            {window.localStorage.getItem("Type") === 'Teacher' &&<ViewEQuestions IExamId={Exam.IExamId}/>}
            
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  const EditExam = ({IExamId,Class,FullMark,PassMark,ExamDate,StartTime,ExamDuration,ExamDescription}) => {
    const [showUpdateExam, setShowUpdateExam] = useState(false);
    const [Exam, setExam] = useState({
      IExamId: IExamId,
      Class: Class,
      FullMark: FullMark,
      PassMark: PassMark,
      ExamDate: ExamDate,
      StartTime: StartTime,
      ExamDuration: ExamDuration,
      ExamDescription: ExamDescription,
    });
    
    const handleChange = (event) => {
      setExam({
        ...Exam,
        [event.target.name]: event.target.value
      });
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(IExamId);

      const url = `https://localhost:7013/api/TExam/UpdateExam`;
      axios.put(url, Exam)
        .then(response => {
          console.log(response.data);
          setShowUpdateExam(false);
        })
        .catch(error => {
          console.error(error);
        });
    };
  
    const handleCancel = () => {
      setShowUpdateExam(false);
    };
  
    return (
      <div key={Exam.IExamId}>
        <button onClick={() => setShowUpdateExam(true)}>Edit</button>
        {showUpdateExam && (
          <form onSubmit={handleSubmit}>
            <br />
            <label id="A1">
            <label id="A2">
              Class:
              <input id="A2" type="text" name="Class" value={Exam.Class} onChange={handleChange} />
            </label>
            <br />
            <label id="A2">
              Full Mark:
              <input id="A2" type="text" name="FullMark" value={Exam.FullMark} onChange={handleChange} />
            </label>
            <br />
            <label id="A2">
              Pass Mark:
              <input id="A2" type="text" name="PassMark" value={Exam.PassMark} onChange={handleChange} />
            </label>
            <br />
            <label id="A2">
              Start Time:
              <input id="A2" type="text" name="StartTime" value={Exam.StartTime} onChange={handleChange} />
            </label>
            <br />
            <label id="A2">
              Exam Duration:
              <input id="A2" type="text" name="ExamDuration" value={Exam.ExamDuration} onChange={handleChange} />
            </label>
            <br />
            <label id="A2">
              Exam Description:
              <input id="A2" type="text" name="ExamDescription" value={Exam.ExamDescription} onChange={handleChange} />
            </label>
            </label>
            <br />
            <button id="B1" type="submit">Update</button>
            <button id="B2" type="button" onClick={handleCancel}>Cancel</button>
          </form>
        )}
      </div>
    );
  };

  const CreateEDetails = ({IExamId}) => {
    const [Chapter, setChapter] = useState('');
    const [TQuestions, setTQuestions] = useState('');
    const [MarkAllocated, setMarkAllocated] = useState('');
    // const IExamId = window.localStorage.getItem('IExamId');
    const [ShowDetails, setShowDetails] = useState(false);
  
    const handleDetailsClick = () => {
      setShowDetails(true);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        console.log(IExamId);
        console.log(Chapter);
        console.log(TQuestions);
        console.log(MarkAllocated);
        const response = await axios.post('https://localhost:7013/api/EDetails/CreatExamDetails', {
          Chapter,
          TQuestions,
          MarkAllocated,
          IExamId,
        });
  
        // handle success response
        // reset the form
        alert(response.data.StatusMessage);
        
        
      } catch (error) {
        alert('Error creating Question: ' + error.message);
        console.error(error);
      }
    };
  
    const handleCancelClick = () => {
      setShowDetails(false);
    };
    const clear = () => {
    setChapter('');
    setTQuestions('');
    setMarkAllocated('');
    };
  
    return (
      <div id="add-question-form">
        {window.localStorage.getItem("Type") === 'Teacher'  && <button id="AddQ" onClick={handleDetailsClick}>Add Details</button>}
  
        {ShowDetails && (
          <form onSubmit={handleSubmit}>
            <label id="AA">
            <label id="AB">
              Chapter:
              <textarea id="AB"
                value={Chapter}
                onChange={(e) => setChapter(e.target.value)}
              />
            </label>
            <label id="AB">
              Total Questions:
              <textarea id="AB"
                value={TQuestions}
                onChange={(e) => setTQuestions(e.target.value)}
              />
            </label>
            <label id="AB">
              Mark Allocated:
              <textarea id="AB"
                value={MarkAllocated}
                onChange={(e) => setMarkAllocated(e.target.value)}
              />
            </label>
          </label>
            <button id= "B1" type="submit">Create</button>
            <button id= "B3" type="button" onClick={clear}>Clear</button>
            <button ID="B2" type='button' onClick={handleCancelClick}>Cancel</button>
            {/* <button type="submit">Save</button> */}
          </form>
        )}
      </div>
    );
  };

  const ViewEDetails = ({ IExamId,examStatus }) => {
    const [Details, setDetails] = useState([]);
  
    useEffect(() => {
      axios.get(`https://localhost:7013/api/EDetails/ViewExamPattern?IExamId=${IExamId}`)
        .then(response => {
          setDetails(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.error(error);
        });
    }, [IExamId]);
  
    const getTotalQuestions = () => {
      return Details.reduce((total, detail) => total + detail.TQuestions, 0);
    }
  
    const getTotalMarks = () => {
      return Details.reduce((total, detail) => total + detail.MarkAllocated, 0);
    }
  
    const handleDoneClick = () => {
      alert(`Total Questions: ${getTotalQuestions()}, Total Marks: ${getTotalMarks()}`);
    }
  
    return (
      <div id='SP'>
        <table>
          <thead>
            <tr>
              <th style={{ width: '50%' }}>Chapter</th>
              <th style={{ width: '20%' }}>Total Questions</th>
              <th style={{ width: '20%' }}>Mark </th>
              <th style={{ width: '10%' }}>Edit</th>
            </tr>
          </thead>
          <tbody>
            {Details.map(Detail => (
              <tr id="Qn" key={Detail.QPatternId}>
                <td>{Detail.Chapter}</td>
                <td style={{ textAlign: 'center' }}>{Detail.TQuestions}</td>
                <td>{Detail.MarkAllocated}</td>
                <td>
                  <div id='nbtns'>
                    <EditEDetails QPatternId={Detail.QPatternId} Chapter={Detail.Chapter} TQuestions={Detail.TQuestions} MarkAllocated={Detail.MarkAllocated} />
                  </div>
                </td>
              </tr>
            ))}
            <tr>
              <td>Total</td>
              <td style={{ textAlign: 'center' }}>{getTotalQuestions()}</td>
              <td>{getTotalMarks()}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        {examStatus &&
        <Link
        to={`/Question/Exam/${IExamId}`}
        >
        Get In
        </Link>
        }
      </div>
    );
  };

  const EditEDetails = ({QPatternId, Chapter, TQuestions, MarkAllocated}) => {
    const [showUpdateEDetails, setShowUpdateEDetails] = useState(false);
    const [Details, setDetails] = useState({
      QPatternId: QPatternId,
      Chapter: Chapter,
      TQuestions: TQuestions,
      MarkAllocated: MarkAllocated,
    });
    
    const handleChange = (event) => {
      setDetails({
        ...Details,
        [event.target.name]: event.target.value
      });
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();

      const url = `https://localhost:7013/api/EDetails/UpdateExamDetails`;
      axios.put(url, Details)
        .then(response => {
          console.log(response.data);
          setShowUpdateEDetails(false);
        })
        .catch(error => {
          console.error(error);
        });
    };
  
    const handleCancel = () => {
      setShowUpdateEDetails(false);
    };
  
    return (
      <div key={Details.IExamId}>
        <button onClick={() => setShowUpdateEDetails(true)}>Edit</button>
        {showUpdateEDetails && (
          <form onSubmit={handleSubmit}>
            <label>
            Chapter
              <input type="text" name="Chapter" value={Details.Chapter} onChange={handleChange} />
            </label>
            <br />
            <label>
              Total Questions:
              <input type="text" name="TQuestions" value={Details.TQuestions} onChange={handleChange} />
            </label>
            <br />
            <label>
              Mark Allocated:
              <input type="text" name="MarkAllocated" value={Details.MarkAllocated} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Update</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </form>
        )}
      </div>
    );
  };

//   const CreateEQuestions = ({IExamId}) => {
//     const [Question, setQuestion] = useState('');
//     const [IMark, setIMark] = useState(1);
//     const [OptionA, setOptionA] = useState('');
//     const [OptionB, setOptionB] = useState('');
//     const [OptionC, setOptionC] = useState('');
//     const [OptionD, setOptionD] = useState('');
//     const [CorrectAnswer, setCorrectAnswer] = useState('');
//     // const IExamId = window.localStorage.getItem('IExamId');
//     const [ShowEQuestions, setShowEQuestions] = useState(false);
  
//     const handleEQuestionsClick = () => {
//       setShowEQuestions(true);
//     };

//     const handleSubmit = async (e) => {
//       e.preventDefault();
  
//       try {
//         console.log(Question);
//         console.log(IMark);
//         console.log(OptionA);
//         console.log(OptionB);
//         console.log(OptionC);
//         console.log(OptionD);
//         console.log(CorrectAnswer);
//         console.log(IExamId);
//         const response = await axios.post(`https://localhost:7013/api/EQuestions/CreateQuestion`, {
          
//           Question,
//           IMark,
//           OptionA,
//           OptionB, 
//           OptionC,
//           OptionD, 
//           CorrectAnswer
//         });
//         console.log(Question);
//         console.log(IMark);
//         console.log(OptionA);
//         console.log(OptionB);
//         console.log(OptionC);
//         console.log(OptionD);
//         console.log(CorrectAnswer);
//         console.log(IExamId);
  
//         // handle success response
//         // reset the form
//         alert(response.data.StatusMessage);
        
        
//       } catch (error) {
//         alert('Error creating Question: ' + error.message);
//         console.error(error);
//       }
//     };
  
// // function to post request answers.

//     const handleCancelClick = () => {
//       setShowEQuestions(false);
//     };
//     const clear = () => {
//     setQuestion('');
//     setIMark(1);
//     setOptionA('');
//     setOptionB('');
//     setOptionC('');
//     setOptionD('');
//     setCorrectAnswer('');
//     };
//     const handleOptionChange = (e) => {
//       setCorrectAnswer(e.target.value);
//     };
//     return (
//       <div id="add-question-form">
//         {window.localStorage.getItem("Type") === 'Teacher'  && <button id="AddQ" onClick={handleEQuestionsClick}>Add Questions</button>}
  
//         {ShowEQuestions && (
//           <form onSubmit={handleSubmit}>
//             <label id="AA">
//             <label id="AB">
//               Question:
//               <textarea id="AB"
//                 value={Question}
//                 onChange={(e) => setQuestion(e.target.value)}
//               />
//             </label>
//             <label id="AB">
//               Mark / Point:
//               <textarea id="AB"
//                 value={IMark}
//                 onChange={(e) => setIMark(e.target.value)}
//               />
//             </label>
//             <label id="AB">
//             Option A:
//             <input id="AB"
//               type="text"
//               value={OptionA}
//               onChange={(e) => setOptionA(e.target.value)}
//             />
//             <input
//               id="AC"
//               type="radio"
//               value="OptionA"
//               checked={CorrectAnswer === "OptionA"}
//               onChange={handleOptionChange}
//             />
//           </label>

//           <label id="AB">
//             Option B:
//             <input id="AB"
//               type="text"
//               value={OptionB}
//               onChange={(e) => setOptionB(e.target.value)}
//             />
//             <input
//               id="AC"
//               type="radio"
//               value="B"
//               checked={CorrectAnswer === "OptionB"}
//               onChange={handleOptionChange}
//             />
//           </label>

//           <label id="AB">
//             Option C:
//             <input id="AB"
//               type="text"
//               value={OptionC}
//               onChange={(e) => setOptionC(e.target.value)}
//             />
//             <input
//               id="AC"
//               type="radio"
//               value="OptionC"
//               checked={CorrectAnswer === "OptionC"}
//               onChange={handleOptionChange}
//             />
//           </label>

//           <label id="AB">
//             Option D:
//             <input id="AB"
//               type="text"
//               value={OptionD}
//               onChange={(e) => setOptionD(e.target.value)}
//             />
//             <input
//               id="AC"
//               type="radio"
//               value="OptionD"
//               checked={CorrectAnswer === "OptionD"}
//               onChange={handleOptionChange}
//             />
//           </label>
//           <label id="AB">
//           Answer:
//             <input id="AC" type="text" value={CorrectAnswer} />
//           </label>
//           </label>
//             <button id= "B1" type="submit">Create</button>
//             <button id= "B3" type="button" onClick={clear}>Clear</button>
//             <button ID="B2" type='button' onClick={handleCancelClick}>Cancel</button>
//             {/* <button type="submit">Save</button> */}
//           </form>
//         )}
//       </div>
//     );
//   };

  // const ViewEQuestions = ({IExamId}) => {
  //   const [Questions, setQuestion] = useState([]);
  //   const Type = window.localStorage.getItem('Type')

  //   let url = ``;

  // if (Type === 'Student'){
  //   url= `https://localhost:7013/api/EQuestions/ViewExamQuestion?IExamId=${IExamId}`;
  // } else {
  //   url = `https://localhost:7013/api/EQuestions/ViewExamQuestions?IExamId=${IExamId}`;
  // }
  //   useEffect(() => {
  //     axios.get(url)
  //       .then(response => {
  //         setQuestion(response.data);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  //   }, [IExamId]);
  
  //   return (
  //     <div id='SP'>
  //       {Questions.map(Question => (
  //         <div id="Qn" key={Question.EQuestionId}>
  //           {console.log(`${Question.EQuestionId}------as`)}
  //           <div id='nbtns'>
  //             {/* {window.localStorage.getItem('UserId') === Question.UserId.toString() &&<EditEQuestion EQuestionId={Question.EQuestionId} Question={Question.Question} IMark={Question.IMark} OptionA={Question.OptionA} OptionB={Question.OptionB} OptionC={Question.OptionC} OptionD={Question.OptionD} CorrectAnswer={Question.CorrectAnswer} />} */}
  //             {window.localStorage.getItem('UserId') === Question.UserId?.toString() &&<EditEQuestion EQuestionId={Question.EQuestionId} Question={Question.Question} IMark={Question.IMark} OptionA={Question.OptionA} OptionB={Question.OptionB} OptionC={Question.OptionC} OptionD={Question.OptionD} CorrectAnswer={Question.CorrectAnswer} />}
  //           </div>
  //           {/* <p><b>Mark: </b>{Detail.QPatternId}</p> */}
  //           <p><b>Question: </b>{Question.Question}</p>
  //           <p><b>IMark: </b>{Question.IMark}</p>
  //           <p><b>OptionA: </b>{Question.OptionA}</p>
  //           <p><b>OptionB: </b>{Question.OptionB}</p>
  //           <p><b>OptionC: </b>{Question.OptionC}</p>
  //           <p><b>OptionD: </b>{Question.OptionD}</p>
  //           <div id="abc">
  //             {/* <button id = "D" onClick={() => handleAnswerClick}>Answer</button>
  //           {showAnswers[index] && <p id = "E" >{Question.Answer}</p>} */}
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };
  const CreateEQuestions = ({IExamId}) => {
    const [Question, setQuestion] = useState('');
    const [IMark, setIMark] = useState('');
    const [OptionA, setOptionA] = useState('');
    const [OptionB, setOptionB] = useState('');
    const [OptionC, setOptionC] = useState('');
    const [OptionD, setOptionD] = useState('');
    const [CorrectAnswer, setCorrectAnswer] = useState('');
    // const IExamId = window.localStorage.getItem('IExamId');
    const [ShowEQuestions, setShowEQuestions] = useState(false);
  
    const handleEQuestionsClick = () => {
      setShowEQuestions(true);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        console.log(Question);
        console.log(IMark);
        console.log(OptionA);
        console.log(OptionB);
        console.log(OptionC);
        console.log(OptionD);
        console.log(CorrectAnswer);
        console.log(IExamId);
        const response = await axios.post('https://localhost:7013/api/EQuestions/CreateQuestion', {
          
          IExamId: IExamId,
          Question: Question,
          IMark: IMark,
          OptionA: OptionA,
          OptionB: OptionB,
          OptionC: OptionC,
          OptionD: OptionD,
          CorrectAnswer: CorrectAnswer
        });
        // console.log(Question);
        // console.log(IMark);
        // console.log(OptionA);
        // console.log(OptionB);
        // console.log(OptionC);
        // console.log(OptionD);
        // console.log(CorrectAnswer);
        // console.log(IExamId);
  
        // handle success response
        // reset the form
        alert(response.data.StatusMessage);
        
        
      } catch (error) {
        alert('Error creating Question: ' + error.message);
        console.error(error);
      }
    };
  
// function to post request answers.

    const handleCancelClick = () => {
      setShowEQuestions(false);
    };
    const clear = () => {
    setQuestion('');
    setIMark(1);
    setOptionA('');
    setOptionB('');
    setOptionC('');
    setOptionD('');
    setCorrectAnswer('');
    };
    const handleOptionChange = (e) => {
      setCorrectAnswer(e.target.value);
    };
    return (
      <div id="add-question-form">
        {window.localStorage.getItem("Type") === 'Teacher'  && <button id="AddQ" onClick={handleEQuestionsClick}>Add Questions</button>}
  
        {ShowEQuestions && (
          <form onSubmit={handleSubmit}>
            <label id="AA">
            <label id="AB">
              Question:
              <textarea id="AB"
                value={Question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </label>
            <label id="AB">
              Mark / Point:
              <textarea id="AB"
                value={IMark}
                onChange={(e) => setIMark(e.target.value)}
              />
            </label>
            <label id="AB">
            Option A:
            <input id="AB"
              type="text"
              value={OptionA}
              onChange={(e) => setOptionA(e.target.value)}
            />
            <input
              id="AC"
              type="radio"
              value="OptionA"
              checked={CorrectAnswer === "OptionA"}
              onChange={handleOptionChange}
            />
          </label>

          <label id="AB">
            Option B:
            <input id="AB"
              type="text"
              value={OptionB}
              onChange={(e) => setOptionB(e.target.value)}
            />
            <input
              id="AC"
              type="radio"
              value="B"
              checked={CorrectAnswer === "OptionB"}
              onChange={handleOptionChange}
            />
          </label>

          <label id="AB">
            Option C:
            <input id="AB"
              type="text"
              value={OptionC}
              onChange={(e) => setOptionC(e.target.value)}
            />
            <input
              id="AC"
              type="radio"
              value="OptionC"
              checked={CorrectAnswer === "OptionC"}
              onChange={handleOptionChange}
            />
          </label>

          <label id="AB">
            Option D:
            <input id="AB"
              type="text"
              value={OptionD}
              onChange={(e) => setOptionD(e.target.value)}
            />
            <input
              id="AC"
              type="radio"
              value="OptionD"
              checked={CorrectAnswer === "OptionD"}
              onChange={handleOptionChange}
            />
          </label>
          <label id="AB">
          Answer:
            <input id="AC" type="text" value={CorrectAnswer} />
          </label>
          </label>
            <button id= "B1" type="submit">Create</button>
            <button id= "B3" type="button" onClick={clear}>Clear</button>
            <button ID="B2" type='button' onClick={handleCancelClick}>Cancel</button>
            {/* <button type="submit">Save</button> */}
          </form>
        )}
      </div>
    );
  };

  const ViewEQuestions = ({IExamId}) => {
    const [Questions, setQuestion] = useState([]);
    const Type = window.localStorage.getItem('Type');
    let url = ``;
  
    if (Type === 'Student'){
      url= `https://localhost:7013/api/EQuestions/ViewExamQuestion?IExamId=${IExamId}`;
    } else {
      url = `https://localhost:7013/api/EQuestions/ViewExamQuestions?IExamId=${IExamId}`;
    }
  
    useEffect(() => {
      axios.get(url)
        .then(response => {
          console.log(response.data);
          setQuestion(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    const DeleteEQuestion = (EQuestionId) => {
      if (window.confirm("Do you want to delete the Question?")) {
      const url = `https://localhost:7013/api/EQuestions/${EQuestionId}`;
      axios.delete(url)
        .then(response => {
          console.log(response.data);
          setQuestion(Questions.filter(n => n.EQuestionId !== EQuestionId));
          alert('Question deleted successfully');
        })
        .catch(error => {
          console.error(error);
        });
      }
    };
  
    return (
      <div id='SP'>
        {Questions.map((Question, index) => (
          <div id="Qn" key={Question.EQuestionId}>
            <div className='main1' style={{gap:'20px'}}>
          <div  className='navvv1' style={{borderRadius:'10px'}}>
            {window.localStorage.getItem('Type') === 'Teacher' && <button button style={{color:'red',borderRadius:'10px'}}   key={Question.EQuestionId} onClick={() => DeleteEQuestion(Question.EQuestionId)}>Delete</button>}
          </div>
            {window.localStorage.getItem('Type') === 'Teacher'  && <EditEQuestion   id="ibtn"  EQuestionId={Question.EQuestionId} Question={Question.Question} IMark={Question.IMark} OptionA={Question.OptionA} OptionB={Question.OptionB} OptionC={Question.OptionC} OptionD={Question.OptionD} CorrectAnswer={Question.CorrectAnswer}/>}
        </div>
            <b><p>[Mark: {Question.IMark}]</p></b>
            <p><b>Question {index+1}: </b>{Question.Question}</p>
            <p><b>OptionA: </b>{Question.OptionA}</p>
            <p><b>OptionB: </b>{Question.OptionB}</p>
            <p><b>OptionC: </b>{Question.OptionC}</p>
            <p><b>OptionD: </b>{Question.OptionD}</p>
            <div id="abc">
              {/* <button id = "D" onClick={() => handleAnswerClick}>Answer</button>
            {showAnswers[index] && <p id = "E" >{Question.Answer}</p>} */}
            </div>
            <button>Get In</button>
          </div>
        ))}
      </div>
    );
  };
  


  const EditEQuestion = ({EQuestionId, Question, IMark, OptionA, OptionB, OptionC, OptionD, CorrectAnswer}) => {

    const [showUpdateEQuestions, setShowUpdateEQuestions] = useState(false);
    const [Questions, setQuestions] = useState({
      EQuestionId: EQuestionId,
      Question: Question,
      IMark: IMark,
      OptionA: OptionA,
      OptionB: OptionB,
      OptionC: OptionC,
      OptionD: OptionD,
      CorrectAnswer: CorrectAnswer,
    });
    
    const handleChange = (event) => {
      setQuestions({
        ...Questions,
        [event.target.name]: event.target.value
      });
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();

      const url = `https://localhost:7013/api/EQuestions/UpdateQuestion`;
      axios.put(url, Questions)
        .then(response => {
          console.log(response.data);
          setShowUpdateEQuestions(false);
        })
        .catch(error => {
          console.error(error);
        });
    };
  
    const handleCancel = () => {
      setShowUpdateEQuestions(false);
    };
  
    console.log(window.localStorage.getItem('UserId'));
    return (
      <div key={Questions.EQuestionId}>
        {/* console.log(Questions.EQuestionId); */}
        <button onClick={() => setShowUpdateEQuestions(true)}>Edit</button>
        {showUpdateEQuestions && (
          <form onSubmit={handleSubmit}>
            <label>
            Question
              <input type="text" name="Question" value={Questions.Question} onChange={handleChange} />
            </label>
            <br />
            <label>
            IMark:
              <input type="text" name="IMark" value={Questions.IMark} onChange={handleChange} />
            </label>
            <br />
            <label>
            Option A:
              <input type="text" name="OptionA" value={Questions.OptionA} onChange={handleChange} />
            </label>
            <br />
            <label>
            Option B:
              <input type="text" name="OptionB" value={Questions.OptionB} onChange={handleChange} />
            </label>
            <br /><label>
            Option C:
              <input type="text" name="OptionC" value={Questions.OptionC} onChange={handleChange} />
            </label>
            <br /><label>
            Option D:
              <input type="text" name="OptionD" value={Questions.OptionD} onChange={handleChange} />
            </label>
            <br />
            <label>
            Correct Answer:
              <input type="text" name="CorrectAnswer" value={Questions.CorrectAnswer} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Update</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </form>
        )}
      </div>
    );
  };




function ExamPage() {

  return (


<div class='main'>
<div class='navvv' style={{ position:'fixed'}}>
  <Nav/>
</div>
<div class='content'>
  <FormTitle>Exam Page</FormTitle>
  <CreateExam/>
  <ViewExam/>
</div>
</div>
  );
}
export default ExamPage;




const FormTitle = styled.h1 `
font-size: 7rem; 
color: white;
text-shadow: 0px 5px 10px black; 
font-style: italic; 
font-family: 'Cursive';
sans-serif;
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
  box-shadow: 0px 5px 10px black;
  transition: all 0.3s ease-in-out;
  margin-top: 100px;
  margin-right: 0px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 15px 20px black;
 
 }
`
;




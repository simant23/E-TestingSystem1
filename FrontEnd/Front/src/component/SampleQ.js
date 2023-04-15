import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Nav from './test';
import axios from 'axios';



const CreateQuestionPaper = () => {
  const [CreatedDate, setCreatedDate] = useState('');
  const [SubjectId, setSubjectId] = useState('');
  const [Class, setClass] = useState('');
  const UserId = window.localStorage.getItem('UserId');
  const [Description, setDescription] = useState('');
  const [TotalMarks, setTotalMarks] = useState('');
  const [TimeAllowedMinutes, setTimeAllowedMinutes] = useState('');
  const [showCreateQuestionPaper, setShowCreateQuestionPaper] = useState(false);

  const handleQuestionPaperClick = () => {
    setShowCreateQuestionPaper(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(`cqptid---${UserId}`);
      const response = await axios.post(`https://localhost:7013/api/QuestionPaper`, {
        SubjectId: SubjectId,
        UserId: parseInt(UserId),
        Description: Description,
        Class: Class,
        TotalMarks: parseInt(TotalMarks),
        TimeAllowedMinutes: parseInt(TimeAllowedMinutes),
        CreatedDate: CreatedDate,
      });

      console.log(response.data.StatusMessage);
      // console.log(response.data.PaperId);
      // window.localStorage.setItem('PaperId', response.data.PaperId);
      // console.log('PaperId');

      alert(response.data.StatusMessage);

    
   
    } catch (error) {
      alert('Error Creating Question Paper: ' + error.message);
    }
  };
  const clear = () => {
    setSubjectId('');
    setDescription('');
    setTotalMarks('');
    setClass('');
    setTimeAllowedMinutes('');
  };

  const handleCancelClick = () => {
    setShowCreateQuestionPaper(false);
  };

  return (
    <div style={{paddingLeft:'100px', width:'500px', fontFamily:'Cursive', fontStyle:'italic' }}>
    <div id="subject-table">
      <table>
        <thead>
          <tr>
            <th style={{width:'250px'}}>Subject Name</th>
            <th style={{width:'250px'}}>Subject ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{width:'250px'}}>Computer Science</td>
            <td style={{width:'250px'}}>1</td>
          </tr>
          <tr>
            <td style={{width:'250px'}}>Mathematics</td>
            <td style={{width:'250px'}}>11</td>
          </tr>
          <tr>
            <td style={{width:'250px'}}>Science</td>
            <td style={{width:'250px'}}>21</td>
          </tr>
          <tr>
            <td style={{width:'250px'}}>English</td>
            <td style={{width:'250px'}}>31</td>
          </tr>
          {/* <tr>
            <td style={{width:'250px'}}>Nepali</td>
            <td style={{width:'250px'}}>41</td>
          </tr> */}
          <tr>
            <td style={{width:'250px'}}>Social Studies</td>
            <td style={{width:'250px'}}>51</td>
          </tr>
          <tr>
            <td style={{width:'250px'}}>EPH</td>
            <td style={{width:'250px'}}>61</td>
          </tr>
          <tr>
            <td style={{width:'250px'}}>Opt. Mathematics</td>
            <td style={{width:'250px'}}>71</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style={{border:'1px solid black', padding:'10px', backgroundColor:'#f1f1f1'}}>
          <p><b>Instruction:</b> Pleaes View the SubjectId from the above table and mention SubjectId for which you want to Create Sample!!
          Thank You!!</p>
  </div>

      {window.localStorage.getItem('Type') === 'Teacher' && (
        <FormButton  id="AddQ" style={{width:'300px',margin:'10px',marginBottom:'-100px'}} onClick={handleQuestionPaperClick}>Create Question Paper</FormButton>
      )}

      {showCreateQuestionPaper && (
        <form onSubmit={handleSubmit}>
        <label id="A1">
          <label id="A2">
            SubjectId:
            <input id="A2" type="text" value={SubjectId} onChange={(e) => setSubjectId(e.target.value)} />
          </label>

          

          <label id="A2">
            Total Marks:
            <textarea id="A2" type="number" value={TotalMarks} onChange={(e) => setTotalMarks(e.target.value)} />
          </label>

          <label id="A2">
            Time Allowed in Minutes:
            <input id="A2"
              type="text"
              value={TimeAllowedMinutes}
              onChange={(e) => setTimeAllowedMinutes(e.target.value)}
            />
          </label>
          <label id="A2">
            Class / Grade:
            <input id="A2"
              type="text"
              value={Class}
              onChange={(e) => setClass(e.target.value)}
            />
          </label>

          <label id="A2">
            Description:
            <textarea id="A2"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              // style={{
              //   width: '400px',
              //   height: '100px',
              //   fontSize: '18px',
              //   padding: '10px',
              //   border: '2px solid #ccc',
              //   borderRadius: '5px',
              //   marginBottom: '10px',
              // }}
            />
          </label>
          </label>
          <br />
          <button id="B1"
            type="submit"
            onClick={() => {
              setCreatedDate(String(new Date().toISOString()));
            }}
          >
          
            Create
          </button>
          <button id="B3" type="button" onClick={clear}>
            Clear
          </button>
          <button id="B2" type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

const ViewQuestionPaper = () => {
  const [Paper, setPaper] = useState([]);
  // const [IndQuestions, setIndQuestions] = useState([]);
  const UserId = window.localStorage.getItem('UserId');
  const Class = window.localStorage.getItem('Class');

let url = ''
  // useEffect(() => {
  //   axios.get(`https://localhost:7013/api/QuestionPaper`)
  //     .then(response => {
  //       console.log(response.data);
  //       setPaper(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

    if(String(Class) === '0'){
      // for tescher
      url = `https://localhost:7013/api/QuestionPaper`;
    } else {
      // fr stud
      url = `https://localhost:7013/api/QuestionPaper/${Class}`;
    }

  useEffect(() => {
    axios.get(url)
    .then(response => {
      console.log(response.data);
      setPaper(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);




      const DeletePaper = (PaperId) => {
      if (window.confirm("Do you want to delete the Question Paper?")) {
      const url = `https://localhost:7013/api/QuestionPaper/${PaperId}`;
      axios.delete(url)
        .then(response => {
          console.log(response.data);
          setPaper(Paper.filter(n => n.PaperId !== PaperId));
          alert('Question Paper deleted successfully');
        })
        .catch(error => {
          console.error(error);
        });
      }
    };

  return (

    <div id='SP' style={{ marginTop:'100px',paddingLeft:'100px',}}>
      {Paper.map(papers => (
        <div id="question" key={papers.PaperId}>
          {console.log(`${papers.PaperId}------as`)}
          <div className='main1' style={{gap:'20px'}}>
          <div className='navvv1' style={{borderRadius:'10px'}}>
          {window.localStorage.getItem('UserId') === papers.UserId.toString() && <button style={{color:'red',borderRadius:'10px'}}  key={papers.PaperId} onClick={() => DeletePaper(papers.PaperId)}>Delete</button>}
        </div>
          {window.localStorage.getItem('UserId') === papers.UserId.toString() && <EditQuestionPaper id="ibtn" Description={papers.Description} Class={papers.Class} TotalMarks={papers.TotalMarks}  TimeAllowedMinutes={papers.TimeAllowedMinutes} PaperId={papers.PaperId} UserId={papers.UserId}/>}
        </div>


        <div style={{fontStyle:'italic', fontFamily:'cursive'}}>
          <div id="papers-table">
          <table>
            <tr>
              <td><b>Description:</b></td>
              <td>{papers.Description}</td>
            </tr>
            <tr>
              <td><b>Subject:</b></td>
              <td>{papers.SubjectName}</td>
            </tr>
            <tr>
              <td><b>Class:</b></td>
              <td>{papers.Class}</td>
            </tr>
            <tr>
              <td><b>Total Mark:</b></td>
              <td>{papers.TotalMarks}</td>
            </tr>
            <tr>
              <td><b>Date:</b></td>
              <td>{papers.CreatedDate.slice(0, 10)}</td>
            </tr>
            <tr>
              <td><b>Full Time:</b></td>
              <td>{papers.TimeAllowedMinutes}</td>
            </tr>
          </table>

          </div>
          </div>
          {window.localStorage.getItem('Type') === 'Teacher' && <CreateQuestion PaperId={papers.PaperId}/>}
        <ViewQuestion PaperId = {papers.PaperId}/>
        </div>
      ))}
    </div>
  );
};  

const EditQuestionPaper = ({PaperId, Description, Class, TotalMarks, TimeAllowedMinutes, UserId}) => {
  const [showUpdatePaper, setShowUpdatePaper] = useState(false);
  const [papers, setPapers] = useState({
    PaperId: PaperId,
    Description: Description,
    Class: Class,
    TotalMarks: TotalMarks,
    TimeAllowedMinutes: TimeAllowedMinutes,
    UserId: UserId
  });

  const handleChange = ({ target }) => {
    setPapers(prevState => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = `https://localhost:7013/api/QuestionPaper/UpdatePaper`;
    axios.put(url, papers)
      .then(response => {
        console.log(response.data);
        setShowUpdatePaper(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleCancel = () => {
    setShowUpdatePaper(false);
  };

  return (
    <div key={papers.PaperId}>
      <button style={{color:'blue',borderRadius:'10px', width:'60px'}} onClick={() => setShowUpdatePaper(true)}>Edit</button>
      {showUpdatePaper && (
        <form onSubmit={handleSubmit}>
        <label id="A1" style={{width:'680px'}}>
          <label id="A2" > 
              Description:
            <input type="textarea" name="Description" value={papers.Description} onChange={handleChange}  id="A2" />
           </label>
           
          <br/>
          <label id="A2" > 
            Total Mark:
            <input type="text" name="TotalMarks" value={papers.TotalMarks} onChange={handleChange} id="A2"/>
          </label>
          <br/>
          <label id="A2" > 
            Class / Grade:
            <input type="text" name="Class" value={papers.Class} onChange={handleChange} id="A2"  />
          </label>
          <br/>
          <label id="A2" > 
            Time Allowed in Minutes:
            <input type="text" name="TimeAllowedMinutes" value={papers.TimeAllowedMinutes} onChange={handleChange} id="A2" />
          </label>
        </label>
          <br/>
          <div style={{paddingLeft:'80px'}}>
          <button id="B1" type="submit">Update</button>
          <button id="B2" type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
}

const CreateQuestion = ({PaperId}) => {
  const [QuestionText, setQuestionText] = useState('');
  const [A, setA] = useState('');
  const [B, setB] = useState('');
  const [C, setC] = useState('');
  const [D, setD] = useState('');
  const [Answer, setAnswer] = useState('');
  // const PaperId = localStorage.getItem('PaperId');
  const [Marks, setMarks] = useState(1);
  const [showQuestion, setShowQuestion] = useState(false);

  const handleQuestionClick = () => {
    setShowQuestion(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(PaperId)
      const response = await axios.post('https://localhost:7013/api/ObjQ/CreateQuestion', {
        QuestionText,
        A,
        B,
        C,
        D,
        Answer,
        Marks,
        PaperId,
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
    setShowQuestion(false);
  };
  const clear = () => {
  setQuestionText('');
  setA('');
  setB('');
  setC('');
  setD('');
  setAnswer('');
  setMarks(1);
  };
  const handleOptionChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div id="add-question-form">
      {window.localStorage.getItem("Type") === 'Teacher' && <button id="AddQ" onClick={handleQuestionClick}>Add Question</button>}

      {showQuestion && (
        <form onSubmit={handleSubmit}>
          <label id="AA">
          <label id="AB">
            Question:
            <textarea id="AB"
              value={QuestionText}
              onChange={(e) => setQuestionText(e.target.value)}
            />
          </label>
          <label id="AB">
            Option A:
            <input id="AB"
              type="text"
              value={A}
              onChange={(e) => setA(e.target.value)}
            />
            <input
              id="AC"
              type="radio"
              value="A"
              checked={Answer === "A"}
              onChange={handleOptionChange}
            />
          </label>

          <label id="AB">
            Option B:
            <input id="AB"
              type="text"
              value={B}
              onChange={(e) => setB(e.target.value)}
            />
            <input
              id="AC"
              type="radio"
              value="B"
              checked={Answer === "B"}
              onChange={handleOptionChange}
            />
          </label>

          <label id="AB">
            Option C:
            <input id="AB"
              type="text"
              value={C}
              onChange={(e) => setC(e.target.value)}
            />
            <input
              id="AC"
              type="radio"
              value="C"
              checked={Answer === "C"}
              onChange={handleOptionChange}
            />
          </label>

          <label id="AB">
            Option D:
            <input id="AB"
              type="text"
              value={D}
              onChange={(e) => setD(e.target.value)}
            />
            <input
              id="AC"
              type="radio"
              value="D"
              checked={Answer === "D"}
              onChange={handleOptionChange}
            />
          </label>

          <label id="AB">
            Marks:
            <input id="AC"
              type="number"
              value={Marks}
              onChange={(e) => setMarks(e.target.value)}
            />
          </label>

          <label id="AB">
          Answer:
            <input id="AC" type="text" value={Answer} />
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

const ViewQuestion = ({PaperId}) => {
  const [questions, setQuestions] = useState([]);
  // const [PaperId, setPaperId] = useState(window.localStorage.getItem('PaperId'));
  const [showAnswers, setShowAnswers] = useState([]);

  const handleAnswerClick = (index) => {
    setShowAnswers(showAnswers.map((showAnswer, i) => (i === index ? !showAnswer : showAnswer)));
  };

  useEffect(() => {

    axios.get(`https://localhost:7013/api/ObjQ/ViewQuestions?PaperId=${PaperId}`)
      .then(response => {
        setQuestions(response.data);
        setShowAnswers(response.data.map(() => false));
      })
      .catch(error => {
        console.error(error);
      });
  }, [PaperId]);


  const DeleteQn = (QuestionId) => {
    if (window.confirm("Do you want to delete the notice?")) {
    const url = `https://localhost:7013/api/ObjQ/${QuestionId}`;
    axios.delete(url)
      .then(response => {
        console.log(response.data);
        setQuestions(questions.filter(n => n.QuestionId !== QuestionId));
        alert('Question deleted successfully');
      })
      .catch(error => {
        console.error(error);
      });
    }
  };

  return (
    <div id='SP'>
      {questions.map((question, index) => (
        <div id="Qn" key={question.QuestionId}>
          <div className='main1' style={{gap:'20px'}}>
          <div className='navvv1' style={{borderRadius:'10px'}}>
          {window.localStorage.getItem('Type') === 'Teacher'  && <button button style={{color:'red',borderRadius:'10px'}}   key={question.QuestionId} onClick={() => DeleteQn(question.QuestionId)}>Delete</button>}
          </div>
            {window.localStorage.getItem('Type') === 'Teacher' && <EditQuestion  QuestionId={question.QuestionId} QuestionText={question.QuestionText} Marks={question.Marks} A={question.A} B={question.B} C={question.C} D={question.D} Answer={question.Answer}/>}
          </div>
          <p><b>Mark: </b>{question.Marks}</p>
          <p><b>Question: </b>{question.QuestionText}</p>
          <p><b>Option A: </b>{question.A}</p>
          <p><b>Option B: </b>{question.B}</p>
          <p><b>Option C: </b>{question.C}</p>
          <p><b>Option D: </b>{question.D}</p>
          <div id="abc">
            <button id = "D" onClick={() => handleAnswerClick(index)}>Answer</button>
          {showAnswers[index] && <p id = "E" >{question.Answer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

const EditQuestion = ({ QuestionText, Marks, A, B, C, D, Answer, QuestionId }) => {
  const [showUpdateQuestion, setshowUpdateQuestion] = useState(false);


  const [question, setQuestion] = useState({
    QuestionId: QuestionId,
    QuestionText: QuestionText,
    Marks: (Marks - 1),
    A: A,
    B: B,
    C: C,
    D: D,
    Answer: Answer,
  });
  
  const handleChange = (event) => {
    setQuestion({
      ...question,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add validation before submitting
    if (!question.QuestionText || !question.Marks || !question.A || !question.B || !question.C || !question.D || !question.Answer) {
      alert('All fields are required!');
      return;
    }
    console.log(QuestionId);
    const url = `https://localhost:7013/api/ObjQ/UpdateQuestion`;
    axios.put(url, question)
      .then(response => {
        console.log(response.data);
        setshowUpdateQuestion(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleCancel = () => {
    setshowUpdateQuestion(false);
  };

  return (
    <div key={question.QuestionId}>
      <button style={{color:'blue',borderRadius:'10px', width:'60px'}} onClick={() => setshowUpdateQuestion(true)}>Edit</button>
      {showUpdateQuestion && (
        <form onSubmit={handleSubmit}>
          <div style={{paddingLeft:'70px'}}>
            <label id="AA">
            <label id="AB">
              Question:
              <input id="AB" type="textarea" name="QuestionText" value={question.QuestionText} onChange={handleChange} />
            </label>
            <label id="AB">
              Mark Allocated:
              <input id="AB" type="text" name="Marks" value={question.Marks} onChange={handleChange} />
            </label>
            <label id="AB">
              Option A:
              <input id="AB" type="text" name="A" value={question.A} onChange={handleChange} />
            </label>
            <label id="AB">
              Option B:
              <input id="AB" type="text" name="B" value={question.B} onChange={handleChange} />
            </label>
            <label id="AB">
              Option C:
              <input id="AB" type="text" name="C" value={question.C} onChange={handleChange} />
            </label>
            <label id="AB">
              Option D:
              <input id="AB" type="text" name="D" value={question.D} onChange={handleChange} />
            </label>
            <label id="AB">
              Correct Answer:
              <input id="AB" type="text" name="Answer" value={question.Answer} onChange={handleChange} />
              {/* <select type="combobox"
              id="AB"
                        onChange={(e) => question.Answer(e.target.value)}
                        value={Answer}
                        required>
                        <option value="" disabled>Select Option</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        

                      </select> */}
            </label>
          </label>
          </div>
          <div style={{paddingLeft:'300px'}}>
          <button id="B1" type="submit">Update</button>
          <button id="B2" type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};


function SampleQPage() {
  return (
    




    <div class='main'>
    <div class='navvv' style={{ position:'fixed'}}>
      <Nav/>
    </div>
    <div class='content'>
      <FormTitle>Sample Question</FormTitle>
      {window.localStorage.getItem('Type') === 'Teacher' && <CreateQuestionPaper />}
      <ViewQuestionPaper />
    </div>
  </div>
  );
}

export default SampleQPage;


const FormTitle = styled.h1 `
font-size: 3rem; 
margin-bottom: 2rem; 
text-shadow: 0px 5px 10px lightgrey; 
font-style: italic; 
font-family: 'Cursive';
font-color: #231d1a;
margin-top: 10px;
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

// const FormTitle = styled.h1 `
// font-size: 7rem; 
// color: white;
// text-shadow: 0px 5px 10px black; 
// font-style: italic; 
// font-family: 'Cursive';
// sans-serif;
// padding-left: '400px';
// `;

// const NContainer = styled.div`
//   // background-color: white;
//   // padding-left: -10px;
//   // margin-top: 25px;
//   top: 0
// `;


// const FormContainer = styled.div`
//   // display: flex;
//   // flex-direction: column;
//   align-items: center;
//   width: 95%;
//   margin: 0 auto;
//   margin-left: 0px;
//   padding: 2rem;
//   box-shadow: 0px 10px 15px lightgrey;
//   border-radius: 10px;
//   margin-top: 15px;
//   font-style: italic; 
//   font-family: 'Cursive';
//   background-color: rgb(147, 108, 108);
  
// `;


// // const FormTitle = styled.h1`
// // font-size: 3rem; 
// // margin-bottom: 2rem; 
// // text-shadow: 0px 5px 10px lightgrey; 
// // font-style: italic; 
// // font-family: 'Cursive';
// // margin-top: 0px;
// // `;

// const FormButton = styled.button`
//   background-color: #330000;
//   color: white;
//   padding: 1rem;
//   border-radius: 5px;
//   border: none;
//   font-size: 1.2rem;
//   width: 150px;
//   cursor: pointer;
//   box-shadow: 0px 5px 10px lightgrey;
//   transition: all 0.3s ease-in-out;
//   margin-top: 20px;
//   margin-right: 20px;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0px 15px 20px lightgrey;
 
//  }
// `
//   ;

  
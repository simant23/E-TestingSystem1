import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './test';
import { Pie} from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);


const Adminadmin = () => {
  const [data2, setData2] = useState();
const [pieData,setPieData]=useState()
  useEffect(() => {
    axios.get(`https://localhost:7013/api/AdminDash/Teacher&StudentActiveness`)
      .then((response) => {
        const data2 = response.data;
        setData2(data2);
        console.log(data2);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(()=>{
    if(data2){
      console.log(data2[0].Count)
      setPieData(
        {
          labels: [data2[0].UserType,data2[1].UserType,data2[2].UserType],
          datasets: [
          {
            label: '# of Votes',
            data: [data2[0].Count,data2[1].Count,data2[2].Count],
            backgroundColor: [
              'blue',
              'red',
              'yellow',
            ],
            borderColor: [
              'black',
              'black',
              'black',
            ],
            borderWidth: '5',
          },
        ],
          }
      )
    }
  },[data2])
  var table = 'pppie';
  return (
    < >
    <lable>Student, Teacher & Admin Activeness</lable>
    {pieData &&
    <div id="bg-white">
      <Pie
  data={pieData}
/>
    </div>
    }
    </>
  );
};


function TotalStudent() {
  const [totalStudents, setTotalStudents] = useState(0);

  useEffect(() => {
    const fetchTotalStudents = async () => {
      try {
        const response = await fetch('https://localhost:7013/api/AdminDash/total-students');
        const data = await response.json();
        setTotalStudents(data.TotalStudents);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTotalStudents();
  }, []);

  return (
    
        <div>
        <Container><b>Total Students:</b></Container>
        <Total><b>{totalStudents} </b></Total>
        </div>
        
        

  );
}

function TotalTeacher() {
  const [totalTeachers, setTotalTeachers] = useState(0);

  useEffect(() => {
    const fetchTotalTeachers = async () => {
      try {
        const response = await fetch('https://localhost:7013/api/AdminDash/total-teachers');
        const data = await response.json();
        setTotalTeachers(data.TotalTeachers);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTotalTeachers();
  }, []);

  return (
    
        <div>
        <Container><b>Total Teachers:</b></Container>
        <Total><b>{totalTeachers} </b></Total>
        </div>
        
        

  );
}

function TotalNotice() {
  const [totalNotice, setTotalNotices] = useState(0);

  useEffect(() => {
    const fetchTotalNotices = async () => {
      try {
        const response = await fetch('https://localhost:7013/api/AdminDash/total-notices');
        const data = await response.json();
        setTotalNotices(data.TotalNotice);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTotalNotices();
  }, []);

  return (
    
        <div>
        <Container><b>Total Notices:</b></Container>
        <Total><b>{totalNotice} </b></Total>
        </div>
        
        

  );
}

function TotalExam() {
  const [totalExams, setTotalExams] = useState(0);

  useEffect(() => {
    const fetchTotalExams = async () => {
      try {
        const response = await fetch('https://localhost:7013/api/AdminDash/TotalExam');
        const data = await response.json();
        setTotalExams(data. TotalExams);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTotalExams();
  }, []);

  return (
    
        <div>
        <Container><b>UpComing Exam:</b></Container>
        <Total><b>{totalExams} </b></Total>
        </div>
        
        

  );
}

function TotalExamUpComing() {
  const [totalExams, setTotalExams] = useState(0);

  useEffect(() => {
    const fetchTotalExams = async () => {
      try {
        const response = await fetch('https://localhost:7013/api/AdminDash/OnGoingExam');
        const data = await response.json();
        setTotalExams(data. TotalExams);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTotalExams();
  }, []);

  return (
    
        <div>
        <Container><b>Total Exam Completed:</b></Container>
        <Total><b>{totalExams} </b></Total>
        </div>
        
        

  );
}

function TotalSampleQ() {
  const [totalSample, setTotalSamples] = useState(0);

  useEffect(() => {
    const fetchTotalSample = async () => {
      try {
        const response = await fetch('https://localhost:7013/api/AdminDash/total-sample-questions');
        const data = await response.json();
        setTotalSamples(data. TotalSample);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTotalSample();
  }, []);

  return (
    
        <div>
        <Container><b>Total Sample Questions:</b></Container>
        <Total><b>{totalSample} </b></Total>
        </div>
        
        

  );
}

function Admin() {
  return(
    <div className='main' style={{ height: '100vh' }}>
      <div className='navvv' style={{ position: 'fixed' }}>
        <Nav />
      </div>
      <div className='content' style={{fontFamily:'Cursive', fontStyle:'italic', fontColor:'#231d1a' }}>
        <FormTitle>Admin Dashboard</FormTitle>
        <div class='containera' style={{padding:'20px', marginTop:'60px'}}>
        <div class='rowa' style={{paddingRight:'150px', width:'50px'}}>
          <TotalStudent/>
        </div>
        <div class='rowa' style={{paddingRight:'150px'}}>
          <TotalTeacher/>
        </div>
        <div class='rowa'>
          <TotalNotice/>
        </div>
        <div class='rowa'>
          <TotalExam/>
        </div>
        <div class='rowa'>
        <TotalExamUpComing/>
        </div>
        <div class='rowa'>
        <TotalSampleQ/>
        </div>
        </div>
        <div style={{paddingTop:'100px'}}>
        <Adminadmin/>
      </div>
    </div>
    </div>

  )
}
export default Admin;

const FormTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-shadow: 0px 5px 10px lightgrey;
  font-style: italic;
  font-family: 'Cursive';
  margin-top: 0px;
`;


const Container = styled.div`
  height: 50px;
  width: 200px;
  font-size: 20px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Total = styled.span`
height: 50px;
width: 200px;
font-size: 30px;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: center;
`;

// const TotalTeachers = styled.span`
// height: 50px;
// width: 200px;
// font-size: 30px;
// border: 1px solid black;
// display: flex;
// align-items: center;
// justify-content: center;
// `;

// const TotalNotices = styled.span`
// height: 50px;
// width: 200px;
// font-size: 30px;
// border: 1px solid black;
// display: flex;
// align-items: center;
// justify-content: center;
// `;

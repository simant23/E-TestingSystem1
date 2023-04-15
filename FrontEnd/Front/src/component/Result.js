import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Result = () => {
  const userId=localStorage.getItem('UserId')
  const [result,setResult]=useState()
  const [renderApp,setRenderApp]=useState(false)
  const loadData=async()=>{
    try{
      const response=await axios.get(`https://localhost:7013/api/Result/ListResult?UserId=${170}`)
      console.log(response?.data)
      setResult(response?.data)
      setRenderApp(true)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    loadData()
  },[])
  return (
    <>
    {
      renderApp &&
    <div id='result'>
    <table>
  <tr>
    <th>Subject Name</th>
    <th>Full Marks</th>
    <th>Pass Marks</th>
    <th>Exam Date</th>
    <th>Marks Obtained</th>
    <th>Grade</th>
    <th>Action</th>
  </tr>
  <tbody>
{result?.map(x=>(
  <tr>
    {console.log(x)}
    <td>{x?.SubjectName}</td>
    <td>{x?.FullMark}</td>
    <td>{x?.PassMark}</td>
    <td>{x?.ExamDate.slice(0,10)}</td>
    <td>{x?.MarkObtained}</td>
    <td>{x?.Grade}</td>
    <td><Link to={`/view-result/${x?.IExamId}/${localStorage?.getItem('UserId')}`} >View Result</Link></td>
  </tr>
    ))}
    </tbody>
</table>
    </div>
    }
    </>
  )
}

export default Result
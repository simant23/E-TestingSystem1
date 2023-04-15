import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const ViewResult = () => {
    const [allResult,setAllResult]=useState()
    const loadData=async()=>{
        try{
            const response=await axios.get(`https://localhost:7013/api/Result/GetResultView?UserId=${userId}&IExamId=${examId}`)
            setAllResult(response?.data)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        loadData()
    },[])
    const {examId,userId}=useParams()
    console.log(examId,userId)
  return (
    <>
{allResult &&
    <div>
         <div id='result'>
            <div className="">Total Marks Obtained: {allResult?.MarkObtained}</div>
    <table>
  <tr>
    <th>Question</th>
    <th>Submitted Answer</th>
    <th>Correct Answer</th>
    <th>Total Marks</th>
  </tr>
  <tbody>
{allResult?.answerList?.map(x=>(
  <tr>
    {/* {console.log(x)} */}
    <td>{x?.Question}</td>
    <td>{x?.Answer}</td>
    <td>{x?.CorrectAnswer}</td>
    <td>{x?.IMark}</td>
  </tr>
    ))}
    </tbody>
</table>
    </div>
    </div>
}
    </>
  )
}

export default ViewResult
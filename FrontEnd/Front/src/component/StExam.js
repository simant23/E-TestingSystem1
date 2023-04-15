
import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import Countdown from 'react-countdown';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const StExam = () => {
    const [Questions , setQuestions] = useState('');
    const [examDetails,setExamDetails]=useState()
    const [SelectedAnswer, setSelectedAnswer] = useState([]);
    const [renderApp,setRenderApp]=useState(false)
    const {id}=useParams()
    const [examDuration,setExamDuration]=useState();
    const navigate=useNavigate();
    const loadData=async()=>{
      console.log(id)
      try{
const response=await Promise.all([
 
  axios.get(` https://localhost:7013/api/EQuestions/ViewExam?IExamId=${id}`),
  // axios.get(`https://localhost:7013/api/TExam/5`)
]
)
setExamDetails(response[0]?.data)
setQuestions(response[0].data?.QExamList)
setExamDuration(Date.now() + response[0]?.data?.ExamDuration*1000*60)
// setExamDetails(response[1].data)
setRenderApp(true)

      }catch(err){
        console.log(err)
      }
    }
    useEffect(() => {
       loadData()
      }, []);

const submitAnswer=async()=>{
  const newArray=[]
  // console.log(SelectedAnswer)
  Questions?.forEach(x=>{
    const a=SelectedAnswer.find(y=>y.id===x.EQuestionId);
    // console.log(a)
    if(a!==undefined){
      a['IsSubmitted']=1
      a['UserId']=Number(localStorage.getItem('UserId'))
      newArray.push(a)
    }else{
      const noAns={
        id:x.EQuestionId,
        selectedAnswer:null,
        IsSubmitted:0,
      }
      // console.log(noAns)
      newArray.push(noAns)
    }
  })

  console.log(newArray)
  const submitBody={
    UserId:Number(localStorage.getItem('UserId')),
    AnswerList:newArray?.map(x=>({EQuestionId:x.id,Answer:x.selectedAnswer,IsSubmitted:x.IsSubmitted}))
  }
  console.log(submitBody)
  try{
    const response=await axios.post(`https://localhost:7013/api/EAnswer/CreateAnswer`,
    submitBody)
navigate('/Result')
  }catch(err){
    console.log(err)
  }
}


  return (
    
    <>
    {
        renderApp &&
    <div>

        <p>{examDetails?.ExamDescription}</p>
        <div>
          {SelectedAnswer.length} of {Questions.length}
        </div>
        <Countdown
        onComplete={()=>{
          submitAnswer()
        }}
        date={examDuration} />
        {Questions?.map((x, index)=>{
            return(
                <>
                <div className="my-10">

                 <p className='font-bold text-red-500'>{x.Question}</p>
                 <div className="mt-10">
                    <label htmlFor="">A - {x?.OptionA}</label>
                 <input onClick={()=>{
                   const a=SelectedAnswer;
                   const b =  a.filter(y=>y.id!== x.EQuestionId)
                   b.push({
                     id:x.EQuestionId,
                    selectedAnswer:'OptionA'
                  })
                  setSelectedAnswer(b)
                 }} value={1} type="radio" name={`${x?.EQuestionId}`} id={`${x?.EQuestionId}`} />
                 </div>
                 <div className="">
                    <label htmlFor="">B  - {x?.OptionB}</label>
                 <input
                 onClick={()=>{
                   const a=SelectedAnswer;
                   const b =  a.filter(y=>y.id!== x.EQuestionId)
                   b.push({
                     id:x.EQuestionId,
                     selectedAnswer:'OptionB'
                    })
                    setSelectedAnswer(b)
                  }}
                 value={2} type="radio" name={`${x?.EQuestionId}`} id={`${x?.EQuestionId}`} />
                 </div>
                 <div className="">
                    <label htmlFor="">C  - {x?.OptionC}</label>
                 <input
                 onClick={()=>{
                  const a=SelectedAnswer;
                  const b =  a.filter(y=>y.id!== x.EQuestionId)
                  b.push({
                    id:x.EQuestionId,
                   selectedAnswer:'OptionC'
                 })
                 setSelectedAnswer(b)
                }}
                 value={3}  type="radio" name={`${x?.EQuestionId}`} id={`${x?.EQuestionId}`} />
                 </div>
                 <div className="">
                    <label htmlFor="">D  - {x?.OptionD}</label>
                 <input
                 onClick={()=>{
                  const a=SelectedAnswer;
                  const b =  a.filter(y=>y.id!== x.EQuestionId)
                  b.push({
                    id:x.EQuestionId,
                   selectedAnswer:'OptionD'
                 })
                 setSelectedAnswer(b)
                }}
                 value={4} type="radio" name={`${x?.EQuestionId}`} id={`${x?.EQuestionId}`} />
                 </div>
                  </div>
                </>
               
               )
              })}
              <button onClick={()=>{submitAnswer()}}>Submit</button>
    </div>
    }
    </>
  )
}

export default StExam
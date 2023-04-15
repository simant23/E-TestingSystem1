import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Nav from './test';
// import { Alert } from "@material-tailwind/react";

const CreateNotice = () => {
  const [Title, setTitle] = useState('');
  const [Content, setContent] = useState('');
  const [PostedAt, setPostedAt] = useState('');
  const UserId = window.localStorage.getItem('UserId');
  const [showCreateNotice, setShowCreateNotice] = useState(false);

  

  const handleNoticeClick = () => {
    setShowCreateNotice(true);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://localhost:7013/api/Notices/Create', {
        Title: Title,
        Content: Content,
        PostedAt: PostedAt,
        UserId: parseInt(UserId),
      });
      
      
      alert("Notice Created");

      setShowCreateNotice(false);
    } catch (error) {
      alert('Error creating notice:', error);
    }
  }

  const Clear = () => {
    setTitle('');
    setContent('');
    alert("Notice Cleared");

  }

  const handleCancelClick = () => {
    setShowCreateNotice(false);
    alert("Notice Cancelled");

  };

  return (
    <div>
    {window.localStorage.getItem("Type") !== 'Student' && <FormButton id="AddQ" onClick={handleNoticeClick}>Create Notice</FormButton>}

    {showCreateNotice && (
      <form onSubmit={handleSubmit}>
<label id="D1">
<label id="D2" style={{ 
      width: '800px', 
      height: '150px',
      fontSize: '25px', 
      border: '2px solid #ccc',
    }}> 
  Title:
  <input id="D2" style={{ 
      width: '750px', 
      height: '50px',}}
    type="text" 
    value={Title} 
    onChange={(e) => setTitle(e.target.value)} 
  />
</label>

<label id="D2" style={{ 
      width: '800px', 
      height: '200px',
      fontSize: '25px', 
      border: '2px solid #ccc',
    }}>
  Content:
  <textarea id="D2"  style={{ 
      width: '750px', 
      height: '100px',}}
    value={Content} 
    onChange={(e) => setContent(e.target.value)} 
    onClick={() => {
      setPostedAt(String(new Date().toISOString()));
    }}
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



const ViewNotice = () => {
  const [notices, setNotices] = useState([]);


  useEffect(() => {
    axios.get(`https://localhost:7013/api/Notices/GetAll`)
      .then(response => {
        setNotices(response.data);
        // console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const DeleteNotice = (NoticeId) => {
    if (window.confirm("Do you want to delete the notice?")) {
    const url = `https://localhost:7013/api/Notices/Delete/${NoticeId}`;
    axios.delete(url)
      .then(response => {
        console.log(response.data);
        setNotices(notices.filter(n => n.NoticeId !== NoticeId));
        alert('Notice deleted successfully');
      })
      .catch(error => {
        console.error(error);
      });
    }
  };


  return (
    
    // <div id='SP' style={{paddingLeft:'300px'}}>
    //   {notices.map(notice => (
      //     <div id="Qn" key={notice.NoticeId}>
      //     <div style={{display:'flex', flexDirection:'row', gap:'50px'}}>
      //       <div id='nbtns'>
      //         {window.localStorage.getItem('UserId') === notice.UserId.toString()  &&<EditNotice id="ibtn" style={{marginTop:'20px'}} Title={notice.Title} Content={notice.Content} NoticeId={notice.NoticeId} UserId={notice.UserId}/>}
      //       </div >
      //       <div id='ibtns' >
      //         {window.localStorage.getItem('UserId') === notice.UserId.toString()  && <button style={{color:'red'}} key={notice.NoticeId} onClick={() => DeleteNotice(notice.NoticeId)}>Delete</button>}
      //         </div>
      //     </div>
      
      //   <div id='SP' style={{paddingLeft:'300px'}}>
      //   {notices.map(notice => (
      //     <div id="Qn" key={notice.NoticeId}>
      //       <div  style={{display:'flex', flexDirection:'row', gap:'10px'}}>
      //         {window.localStorage.getItem('UserId') === notice.UserId.toString()  &&<EditNotice  style={{backgroundColor:'blue'}} Title={notice.Title} Content={notice.Content} NoticeId={notice.NoticeId} UserId={notice.UserId}/>}
      //         {window.localStorage.getItem('UserId') === notice.UserId.toString()  && <button style={{backgroundColor:'red'}} key={notice.NoticeId} onClick={() => DeleteNotice(notice.NoticeId)}>Delete</button>}
      //       </div >
    
      //       <div style={{fontStyle:'italic', fontFamily:'cursive'}}>
      //       <p><b>Title:</b> {notice.Title}</p>
      //       <p><b>Content:</b> {notice.Content}</p>
      //       <p><b>Posted Date:</b> {notice.PostedAt.slice(0,10)}</p>
      //       <p><b>Posted By:</b> {notice.FullName}</p>
      //       <p><b>Posted Type:</b> {notice.Type}</p>
      //       </div>
      //     </div>
      //   ))}
      // </div>


    <div id='SP' style={{paddingLeft:'50px'}}>
      {/* <Alert>A simple alert for showing message.</Alert> */}
      {notices.map(notice => (
        <div id="Qn" key={notice.NoticeId}>
        <div className='main1' style={{gap:'20px'}}>
          <div  className='navvv1' style={{borderRadius:'10px'}}>
            {window.localStorage.getItem('UserId') === notice.UserId.toString()  && <button button style={{color:'red',borderRadius:'10px'}}   key={notice.NoticeId} onClick={() => DeleteNotice(notice.NoticeId)}>Delete</button>}
          </div>
            {window.localStorage.getItem('UserId') === notice.UserId.toString()  &&<EditNotice   id="ibtn" Title={notice.Title} Content={notice.Content} NoticeId={notice.NoticeId} UserId={notice.UserId}/>}
        </div>

          <div style={{fontStyle:'italic', fontFamily:'cursive'}}>
          <p><b>Title:</b> {notice.Title}</p>
          <p><b>Content:</b> {notice.Content}</p>
          <p><b>Posted Date:</b> {notice.PostedAt.slice(0,10)}</p>
          <p><b>Posted By:</b> {notice.FullName}</p>
          <p><b>Posted Type:</b> {notice.Type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};





const EditNotice = ({Title,Content,NoticeId,UserId}) => {
  const [showUpdateNotice, setShowUpdateNotice] = useState('');
  const [notice, setNotice] = useState({
    NoticeId: NoticeId,
    Title: Title,
    Content: Content,
    postedAt: new Date().toJSON(),
    UserId: UserId,
  });
  const handleChange = (event) => {
    setNotice({
      ...notice,
      [event.target.name]: event.target.value
    });

  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `https://localhost:7013/api/Notices/Update`;
    axios.put(url, notice)
      .then(response => {
        console.log(response.data);
        setShowUpdateNotice(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleCancel = () => {
    setShowUpdateNotice(false);
  };

  return (
    <div  key={notice.NoticeId}>
      <button style={{color:'blue',borderRadius:'10px', width:'60px'}} onClick={() => setShowUpdateNotice(true)}>Edit</button>
      {showUpdateNotice && (
          <div>
        <form  onSubmit={handleSubmit}>
          <label id="A1" style={{width:'680px'}}>
          <label id="A2" > 
              Title / Topic:
            <input type="text" name="Title" value={notice.Title} onChange={handleChange}  id="A2"  />
          </label>
          <br/>
          <label id="A2" >
          Content:
          <input type="textarea" name="Content" value={notice.Content} onChange={handleChange}  id="A2" 
          style={{height:'100px'}}
          />
        </label>
        </label>
        <br/>
          {/* </div> */}
          <div style={{paddingLeft:'250px'}}>
          <button id="B1" type="submit">Update</button>
          <button id="B3" type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
        </div>
      )}
    </div>
  );
};







  


const NoticePage = () => {



  
    return(
  <div class='main'>
    <div class='navvv' style={{ position:'fixed'}}>
      <Nav/>
    </div>
    <div class='content'>
      <FormTitle>Notice Board</FormTitle>
      <CreateNotice />
      <ViewNotice/>
    </div>
  </div>
    //   <div id="mainbg" style={{height:'auto'}}>
      
    //     <FormTitle>Notice Information Board</FormTitle>
    //   <div style={{display:"flex", gap: '0'}} className="">
    //       <Nav/>
    //   <div id="Not">
    //   <div style={{marginBottom:'20px'}}>
    //   <CreateNotice />
    //   </div>
    //   <div id= "Not1">
    //   <ViewNotice/>
    //   </div>
    //   </div>
    //     </div>
          
    // </div>
  );
};

export default NoticePage;

const FormButton = styled.button`
  background-color: #330000;
  color: white;
  padding: 1rem;
  border-radius: 5px;
  border: none;
  font-size: 1.2rem;
  width: 150px;
  cursor: pointer;
  box-shadow: 0px 5px 10px lightgrey;
  transition: all 0.3s ease-in-out;
  margin-top: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 15px 20px lightgrey;
 
 }
`
;



const FormTitle = styled.h1 `
font-size: 3rem; 
text-shadow: 0px 5px 10px lightgrey; 
font-style: italic; 
font-family: 'Cursive';
font-color: #231d1a;
margin-top: 10px;
padding-left: 100px;
`;
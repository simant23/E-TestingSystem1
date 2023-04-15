import './App.css';
import Registration from './component/SRegistration.js';
import Login from  './component/Login.js';
import LandingPage from './component/LandingPage.js';
import HomePage from './component/HomePage.js';
import Dashboard from './component/SDashboard.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TeacherDashboard from './component/TDashboard.js';
import AdminDashboard from './component/AdminDashboard.js';
import TRegistration from './component/TRegistration';
import ChangePassword from './component/ChangePassword';
import NoticePage from './component/Notice';
import SampleQPage from './component/SampleQ';
import ExamPage from './component/Exam';
import ResultPage from './component/Result';
import GraphPage from './component/Graph';
import ForgotPassword from './component/ForgotPassword';
import AccountPage from './component/Account';
import MessagePage from './component/Message';
import UserDetails from './component/User';
import ChatPage from './component/ChatPage';
import ChatBar from './component/ChatBar';
import StExam from './component/StExam';
import ViewResult from './component/ViewResult';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login />}/>
          <Route path='/StudentRegistration' element={<Registration />}/>
          <Route path='/TeacherRegistration' element={<TRegistration />}/>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/HomePage' element={<HomePage />}/>
          <Route path='/dashboard' element={<Dashboard />}/>   
          <Route path='/teacherdashboard' element={<TeacherDashboard />}/>   
          <Route path='/admindashboard' element={<AdminDashboard />}/>   
          <Route path='/ChangePassword' element={<ChangePassword />}/>   
          <Route path='/Notice' element={<NoticePage />}/>   
          <Route path='/Account' element={<AccountPage />}/>   
          <Route path='/SampleQ' element={<SampleQPage />}/>   
          <Route path='/Exam' element={<ExamPage />}/>   
          <Route path='/Result' element={<ResultPage />}/>   
          <Route path='/Graph' element={<GraphPage />}/>   
          <Route path='/ForgotPwd' element={<ForgotPassword />}/>   
          {/* <Route path='/Message' element={<ChatBar />}/>    */}
          <Route path='/Message' element={<MessagePage />}/>   
          <Route path='/UserDetails' element={<UserDetails />}/>   
          {/* <Route path='/ChatBar' element={<ChatBar />}/>    */}
          {/* <Route path='/ChatPage' element={<ChatPage />}/>    */}
          <Route path='/Chat/:sender/:receiver' element={<ChatPage />}/>   
          <Route path='/Question/Exam/:id' element={<StExam />}/> 
          <Route path='/view-result/:examId/:userId' element={<ViewResult/>}/>  
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;


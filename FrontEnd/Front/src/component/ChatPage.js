import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const getMessagesRequest = async (sender, receiver) => {
    console.log(`sender${sender} receiver${receiver}`)
  let res = await axios.get(`https://localhost:7013/api/Message/${sender}/${receiver}`);

  let data = res.data;
  return data;
};

const ChatBody = () => {
  const { sender, receiver } = useParams();

  console.log(`sender: ${sender}`);
  console.log(`receiver: ${receiver}`);

  const [mmessages, setMmessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messages = await getMessagesRequest(sender, receiver);
        setMmessages(messages);
      } catch (error) {
        console.log('Error fetching messages:', error);
      }
    };

    const interval = setInterval(() => {
      fetchMessages();
    }, 4000);

    return () => clearInterval(interval);
  }, [sender, receiver]);

  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    navigate('/ChatBar');
  };

  return (
    <>
      <header className="chat__mainHeader">
        <p id="username">Message</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      <div className="message__container">
        {mmessages.map((message) =>
          String(window.localStorage.getItem('UserId')) === String(message.SenderId) ? ( // conditional render if sender
            <div className="message__chats" key={message.date_and_time}>
              {console.log(message.DateAndTime)}
              <p className="sender__name">you</p>
              <div className="message__sender">
                <p>{message.Text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.date_and_time}>
              {console.log(message.DateAndTime)}
              {console.log(window.localStorage.getItem('ReceiverEmailId'))}
              <p className="receiver__name">{(window.localStorage.getItem('ReceiverEmailId'))}</p>
              <div className="message__recipient">
                <p>{message.Text}</p>
              </div>
            </div>
          )
        )}

      </div>
    </>
  );
};

const sendMessageRequest = async (sender, reciever, message, event) => {
  event.preventDefault();
  let payload = { SenderId: sender, ReceiverId: reciever, Text: message };

  let res = await axios.post(`https://localhost:7013/api/Message`, payload);

  let data = res.data;
  console.log(data);
  alert(data);
};

const ChatFooter = () => {

  // pulled from parameters of chat route
  const { sender, receiver } = useParams();
  const [message, setMessage] = useState('');

  return (
    <div className="chat__footer" >
      <form className="form">
        <input
          type="text"
          id="b"
          placeholder="Write message"
          className="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="sendBtn"
          onClick={(event) =>
            sendMessageRequest(sender, receiver, message, event)
          }
        >
          SEND
        </button>
      </form>
    </div>
  );
};

const ChatPage = () => {

  return (
    <div id="content" >
      <div className="chat">
        <div className="chat__main">
          <ChatBody />
          <ChatFooter />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

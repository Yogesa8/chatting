import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import call from "./../../assets/call.png";
import video from "./../../assets/video.png";
import emoji from "./../../assets/emoji.png";
import clip from "./../../assets/clip.png";
import send from "./../../assets/send.png";
import back from "./../../assets/back.png";
import axios from "axios";

const ChatWindow = ({ chat, onBack }) => {
  const [inputValue, setInputValue] = useState("");
  const myProfile = useSelector((state) => state.Myprofile);
  const dispatch = useDispatch();
  if (!chat) {
    return <div className="chat-empty">Select a chat to start messaging</div>;
  }

  const sendMessage = async (event) => {
    event.preventDefault();
    try {
      if (inputValue.trim() !== "") {
        const newMessage = {
          sender: "Martin",
          receiver: chat.name,
          message: inputValue,
          userId: chat.id,
        };

        const response = await axios.post(
          "http://localhost:3001/users",
          newMessage
        );

        console.log("Message sent successfully:", response.data);
        setInputValue("");

        dispatch(addMessage(chat.id, "Martin", chat.name, inputValue));
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="right__container">
      <div className="chat-container">
        <div className="chat-header">
          <div className="chat-icons">
            {/* 👇 Back button only for mobile */}
            <button className="back-button" onClick={onBack}>
              <img src={back} alt="" />
            </button>
            <img
              className="user_profile"
              src={chat.profilePicture}
              alt="user Profile"
            />
            <h2 className="chat-title">{chat.name}</h2>
            <div className="call">
              <img src={call} alt="voice call" />
              <img src={video} alt="video call" />
            </div>
          </div>
        </div>

        <div className="chat-body">
          {chat.chat.map((msg, index) =>
            msg.sender === "Martin" ? (
              // ✅ Sender Message (Martin)
              <div className="message sender-message" key={index}>
                <div className="message-sender-content">
                  <p>{msg.message}</p>
                </div>
                <img
                  className="profile-pic"
                  src={myProfile.profilePicture}
                  alt=""
                />
              </div>
            ) : (
              // ✅ Receiver Message (Selected User)
              <div className="message user-message" key={index}>
                <img className="profile-pic" src={chat.profilePicture} alt="" />
                <div className="message-content">
                  <p>{msg.message}</p>
                </div>
              </div>
            )
          )}
        </div>

        <div className="chat-input">
          <img src={emoji} alt="emoji" className="emoji" />
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type a message..."
          />
          <img src={clip} alt="clip" className="clip" />
          <button type="button" className="send-btn" onClick={sendMessage}>
            <img src={send} alt="send" className="send" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;

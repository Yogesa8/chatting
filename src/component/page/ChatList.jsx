import React from "react";
import martin from "./../../assets/profile/Martin.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ChatList = ({ onSelectChat }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  return (
    <div className="left__container">
      <div className="mobileheader">
        <div className="mobile__inner">
          <p className="mobile__inner__title">Chats</p>
          <Link to= '/setting'>
            <img src={martin} alt="profile image" />
          </Link>
        </div>
      </div>
      <div className="middle_container">
        {users.map((chat) => (
          <div
            key={chat.id}
            className="user"
            onClick={() => onSelectChat(chat)}
          >
            <div className="profile-card">
              <img
                className="profile__picture"
                src={chat.profilePicture}
                alt={chat.name}
              />

              <div className="profile-info">
                <h4>{chat.name}</h4>
                <p>{chat.status}</p>
              </div>

              <div className="status">
                <span>{chat.lastSeen}</span>
                <span className={chat.online ? "active-indicator" : ""}></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;

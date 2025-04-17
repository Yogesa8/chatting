import React, { useEffect, useRef, useState } from "react";
import ChatWindow from "./page/ChatWindow";
import ChatList from "./page/ChatList";
import "./page/Home.css";

const HomePage = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <React.Fragment>
      <div data-barba="container" className="Chat">
        <div className="home__container">
          <div className={`chat-list ${selectedChat ? "hide-on-mobile" : ""}`}>
            <ChatList onSelectChat={setSelectedChat} />
          </div>
          <div
            className={`chat-window ${selectedChat ? "" : "hide-on-mobile"}`}
          >
            <ChatWindow
              chat={selectedChat}
              onBack={() => setSelectedChat(null)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;

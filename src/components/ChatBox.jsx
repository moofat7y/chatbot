import React, { useEffect, useRef, useState } from "react";
import SendInput from "./SendInput";

const ChatBox = () => {
  const [messages, setMessages] = useState([{ text: "Any Question ?" }]);
  const [isLoading, setIsLoading] = useState(false);
  const scroll = useRef();
  const messagesList = messages.map((message, index) => {
    return (
      <div
        key={index}
        ref={scroll}
        className={`message ${message.sender ? "sender" : ""}`}
      >
        {message.text}
      </div>
    );
  });

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="chat-box">
      <div className="container px-5">
        <div
          className="chat-window pt-2 pb-1"
          style={{
            height: "83vh",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          {messagesList}
          {isLoading ? (
            <div className="loading d-flex align-items-center ">
              <span></span>
              <span className="mx-2"></span>
              <span></span>
            </div>
          ) : null}
        </div>

        <SendInput setMessages={setMessages} setIsLoading={setIsLoading} />
      </div>
    </div>
  );
};

export default ChatBox;

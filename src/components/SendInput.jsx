import axios from "axios";
import React, { useRef, useState } from "react";
import urlify from "../utils/urlify";

const SendInput = ({ setMessages, setIsLoading }) => {
  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputRef.current.value.length > 0) {
      const text = inputRef.current.value;
      setMessages((prev) => [...prev, { sender: true, text }]);
      inputRef.current.value = "";
      try {
        setIsLoading(true);
        const response = await axios.post(
          "https://api.sayhaito.com/amphia",
          {
            message: text,
          },
          {
            headers: {
              "API-KEY": "amphia-22768",
            },
          }
        );
        setIsLoading(false);
        const newText = urlify(response.data.response);
        setMessages((prev) => [...prev, { sender: false, text: newText }]);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
  };
  return (
    <div
      className="input"
      style={{ height: "7vh", display: "flex", alignItems: "center" }}
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{ display: "flex", width: "100%" }}
      >
        <input
          ref={inputRef}
          className="form-control me-2"
          type="text"
          placeholder="Type hier je vraag"
        />
        <button type="submit" className="send-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default SendInput;

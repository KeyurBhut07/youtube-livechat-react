import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import {
  generateRandomeName,
  makeGenrateRandomeMessage,
} from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessage = useSelector((stor) => stor.chat.message);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomeName(),
          message: makeGenrateRandomeMessage(25) + "😂",
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "KB",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };
  return (
    <>
      <div>
        <h1 className="p-2 ml-2 w-full h-[550px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
          {chatMessage?.map((chat) => (
            <ChatMessage name={chat.name} message={chat.message} />
          ))}
        </h1>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          className="w-[350px] px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;

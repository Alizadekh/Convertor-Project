import React from "react";
import Logo from "../assets/logo.png";

function ChatMessage({ message }) {
  return (
    <div
      className={`flex items-center gap-4 mb-6 ${
        message.sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      {message.sender === "bot" && (
        <div className="w-[60px]">
          <img src={Logo} alt="Platonun Logo" className="w-full h-full" />
        </div>
      )}

      <div
        className={`px-6 py-4 rounded-[20px] rounded-tr-none max-w-[70%] ${
          message.sender === "user"
            ? "bg-amber-50 text-[#212121]"
            : " text-[#ECDFCC]"
        }`}
      >
        <p className="break-words overflow-wrap-normal whitespace-normal">
          {message.text}
        </p>
      </div>

      {message.sender === "user" && (
        <div className="w-8 h-8 flex-shrink-0 bg-amber-50 rounded-full flex items-center justify-center">
          <span className="text-[#212121] font-small">You</span>
        </div>
      )}
    </div>
  );
}

export default ChatMessage;

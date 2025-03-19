import React from "react";
import Logo from "../assets/logo.png";

function ChatMessage({ message }) {
  return (
    <div
      className={`flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 ${
        message.sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      {message.sender === "bot" && (
        <div className="w-10 sm:w-[60px] flex-shrink-0">
          <img src={Logo} alt="Platonun Logo" className="w-full h-full" />
        </div>
      )}

      <div
        className={`px-4 sm:px-6 py-2 sm:py-4 rounded-[20px] rounded-tr-none max-w-[85%] sm:max-w-[70%] ${
          message.sender === "user"
            ? "bg-amber-50 text-[#212121]"
            : "text-[#ECDFCC]"
        }`}
      >
        <p className="break-words overflow-wrap-normal whitespace-normal text-sm sm:text-base">
          {message.text}
        </p>
      </div>

      {message.sender === "user" && (
        <div className="w-6 sm:w-8 h-6 sm:h-8 flex-shrink-0 bg-amber-50 rounded-full flex items-center justify-center">
          <span className="text-[#212121] text-xs sm:text-sm">You</span>
        </div>
      )}
    </div>
  );
}

export default ChatMessage;

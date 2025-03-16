import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../assets/logo.png";
import chatIcon from "../assets/icons/newChatBtn.png";
import fileUploadBtn from "../assets/icons/fileUploadBtn.svg";
import sendBtn from "../assets/icons/sendBtn.svg";
import {
  startChat,
  sendMessage,
  resetChat,
} from "../redux/features/chat/chatSlice";
import ChatMessage from "../components/ChatMessage";

// Bu memoized bileşen, mesaj içeriği değişmediği sürece tekrar render edilmeyecek
const MemoizedChatMessage = memo(ChatMessage);

function MainPage() {
  const isSidebarOpen = useSelector((state) => state.sidebar.sidebar);
  const { isChatStarted, messages } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const [userInput, setUserInput] = useState("");
  const chatContainerRef = useRef(null);

  // useCallback ile fonksiyonları memoize edelim
  const handleSendMessage = useCallback(() => {
    if (!userInput.trim()) return;

    if (!isChatStarted) {
      dispatch(startChat(userInput));
    } else {
      dispatch(sendMessage(userInput));
    }

    setUserInput("");
  }, [userInput, isChatStarted, dispatch]);

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    },
    [handleSendMessage]
  );

  // Mesajlar değiştiğinde scroll işlemi
  useEffect(() => {
    if (chatContainerRef.current) {
      // requestAnimationFrame ile daha smooth bir scroll sağlayalım
      requestAnimationFrame(() => {
        chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight;
      });
    }
  }, [messages]);

  // Textarea değişim handler'ı
  const handleInputChange = useCallback((e) => {
    setUserInput(e.target.value);
  }, []);

  // Reset chat handler'ı
  const handleResetChat = useCallback(() => {
    dispatch(resetChat());
  }, [dispatch]);

  // Welcome ekranı içeriği - gereksiz yeniden render'ları önlemek için memorize edelim
  const welcomeScreen = (
    <div className="w-full p-[30px] flex flex-col gap-10 items-center justify-center">
      <div>
        <img src={Logo} alt="" className="w-[312px]" />
        <h2 className="text-[#ECDFCC] font-inter text-[32px] not-italic font-medium text-center">
          Hi, I'am Platon
        </h2>
      </div>
      <div>
        <p className="text-[#ECDFCC] font-inter text-[16px] not-italic font-light">
          What can I convert to you?
        </p>
      </div>
      <div className="w-3/5 px-6 py-4 rounded-[20px] bg-[#212121]">
        <textarea
          className="w-full h-17 resize-none text-[#ECDFCC] bg-transparent outline-none"
          placeholder="Convert me something"
          value={userInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        ></textarea>
        <div className="flex justify-between items-center">
          <button className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-amber-50 cursor-pointer">
            <img src={fileUploadBtn} alt="" />
          </button>
          <button
            className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-50 cursor-pointer"
            onClick={handleSendMessage}
          >
            <img src={sendBtn} alt="" />
          </button>
        </div>
      </div>
    </div>
  );

  // Sınıf adları için değerler hesaplayalım ve saklayalım
  const sectionClassName = `flex-1 transition-all duration-300 ease-in-out flex flex-col ${
    isSidebarOpen ? "ml-[20%] w-4/5" : "ml-0 w-full"
  }`;

  const bottomBarClassName = `fixed bottom-0 pb-4 pt-1 bg-[#1f2529] w-4/5 transition-all duration-300 ${
    isSidebarOpen
      ? "left-[calc(50%+10%)] -translate-x-1/2"
      : "left-1/2 -translate-x-1/2"
  }`;

  const messageInputWrapperClassName = `m-auto ${
    isSidebarOpen ? "w-3/5 ml-[20%]" : "w-3/5"
  }`;

  return (
    <section className={sectionClassName}>
      {!isChatStarted ? (
        welcomeScreen
      ) : (
        <div className="flex flex-col h-full w-3/5 m-auto">
          <div
            ref={chatContainerRef}
            className="flex-grow overflow-y-auto p-6 pb-24 no-scrollbar"
            style={{ maxHeight: "calc(100vh - 160px)" }}
          >
            {messages.map((message) => (
              <MemoizedChatMessage key={message.id} message={message} />
            ))}
          </div>

          <div className={bottomBarClassName}>
            <div className="flex justify-center items-center p-4">
              <button
                className="text-[#697565] bg-[#212121] font-medium font-inter p-3 rounded-3xl flex items-center gap-2 cursor-pointer"
                onClick={handleResetChat}
              >
                <img src={chatIcon} alt="" />
                <span>New Chat</span>
              </button>
            </div>
            <div className={messageInputWrapperClassName}>
              <div className="px-6 py-4 rounded-[20px] bg-[#212121] m-auto">
                <textarea
                  className="w-full h-17 resize-none text-[#ECDFCC] bg-transparent outline-none"
                  placeholder="Type your message here..."
                  value={userInput}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                ></textarea>
                <div className="flex justify-between items-center">
                  <button className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-amber-50 cursor-pointer">
                    <img src={fileUploadBtn} alt="" />
                  </button>
                  <button
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-50 cursor-pointer"
                    onClick={handleSendMessage}
                  >
                    <img src={sendBtn} alt="" />
                  </button>
                </div>
              </div>
              <div className="text-center mt-2">
                <p className="text-gray-400 text-xs">
                  Platon can make mistakes. Please double-check responses.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default MainPage;

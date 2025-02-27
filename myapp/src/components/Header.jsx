import React, { useState } from "react";
import lightMode from "../assets/icons/lightMode.svg";
import darkMode from "../assets/icons/darkMode.svg";
import newChatBtn from "../assets/icons/newChatBtn.png";
import style from "../style/Header.module.css";

function Header() {
  const [darkModeOn, setDarkModeOn] = useState(false);

  return (
    <header className={style.header}>
      <div>
        <button>
          <img src={newChatBtn} alt="New Chat Button" />
          <span>New chat</span>
        </button>
        <button>
          <img src={darkModeOn ? darkMode : lightMode} alt="light-dark mode" />
        </button>
      </div>
    </header>
  );
}

export default Header;

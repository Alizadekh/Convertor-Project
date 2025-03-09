import React, { useState } from "react";
import lightMode from "../assets/icons/lightMode.svg";
import darkMode from "../assets/icons/darkMode.svg";
import newChatBtn from "../assets/icons/newChatBtn.png";
import sideBarToggleBtn from "../assets/icons/sidebarToogle.svg";
import style from "../style/Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../redux/features/sidebar/sidebarSlice";
import { darkModeHandle } from "../redux/features/theme/themeSlice";

function Header() {
  const dispatch = useDispatch();
  const darkModeOn = useSelector((state) => state.theme.theme);
  // console.log(darkModeOn);

  return (
    <header className={style.header}>
      <button onClick={() => dispatch(openSidebar())}>
        <img src={sideBarToggleBtn} alt="Sidebar toggle" />
      </button>
      <div>
        <button>
          <img src={newChatBtn} alt="New Chat Button" />
          <span>New chat</span>
        </button>
        <button onClick={() => dispatch(darkModeHandle())}>
          <img
            src={darkModeOn === "dark" ? darkMode : lightMode}
            alt="light-dark mode"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;

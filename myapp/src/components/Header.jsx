import React, { useState } from "react";
import lightMode from "../assets/icons/lightMode.svg";
import darkMode from "../assets/icons/darkMode.svg";
import User from "../assets/icons/userIcon.svg";
import sideBarToggleBtn from "../assets/icons/sidebarToogle.svg";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../redux/features/sidebar/sidebarSlice";
import { darkModeHandle } from "../redux/features/theme/themeSlice";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const darkModeOn = useSelector((state) => state.theme.theme);
  // console.log(darkModeOn);

  return (
    <header className="flex justify-between items-center bg-[#1f2529] px-4 py-2">
      <button
        className="bg-transparent border-0 cursor-pointer"
        onClick={() => dispatch(openSidebar())}
      >
        <img
          src={sideBarToggleBtn}
          alt="Sidebar toggle"
          className="w-6 h-6 rotate-180"
        />
      </button>

      <div className="flex gap-3">
        <button
          className="flex justify-center items-center gap-2 bg-[#171717] p-4 rounded-full border-0 shadow-md cursor-pointer"
          onClick={() => dispatch(darkModeHandle())}
        >
          <img
            src={darkModeOn === "dark" ? darkMode : lightMode}
            alt="light-dark mode"
            className="h-4 w-4"
          />
        </button>
        <Link to="/signup">
          <button className="flex justify-center items-center gap-2 bg-[#171717] p-3 rounded-full border-0 shadow-md cursor-pointer">
            <img src={User} alt="User icon" />
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;

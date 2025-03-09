import React from "react";
import sideBarToggleBtn from "../assets/icons/sidebarToogle.svg";
import style from "../style/Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../redux/features/sidebar/sidebarSlice";

function SideBar() {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.sidebar);

  return (
    <section
      className={`${style.sidebar} ${!isSidebarOpen ? style.hidden : ""}`}
    >
      <div>
        <h2>Platon</h2>
        <button onClick={() => dispatch(closeSidebar())}>
          <img src={sideBarToggleBtn} alt="Sidebar Toggle Button" />
        </button>
      </div>
      <div>
        <p>No chat history</p>
        {/* <ul>
          <li>First Message</li>
          <li>Second Message</li>
          <li>Thirth Message</li>
          <li>Fourth Message</li>
        </ul> */}
      </div>
      <div>
        <h3>S</h3>
        <p>shikhiyevrufat@gmail.com</p>
      </div>
    </section>
  );
}

export default SideBar;

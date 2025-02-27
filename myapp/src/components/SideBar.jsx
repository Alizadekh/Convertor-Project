import React from "react";
import sideBarToggleBtn from "../assets/icons/sidebarToogle.svg";
import style from "../style/Sidebar.module.css";

function SideBar() {
  return (
    <section className={style.sidebar}>
      <div>
        <h2>ConvertorAI</h2>
        <button>
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

import React from "react";
import sideBarToggleBtn from "../assets/icons/sidebarToogle.svg";
import userIcon from "../assets/icons/userIcon.svg";
import moreMenu from "../assets/icons/more-menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../redux/features/sidebar/sidebarSlice";

function SideBar() {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.sidebar);

  return (
    <section
      className={`w-4/5 sm:w-1/2 md:w-1/5 h-screen px-4 py-2 absolute top-0 left-0 flex flex-col bg-[#171717] font-inter rounded-r-xl transition-transform duration-300 ease-in-out transform ${
        !isSidebarOpen ? "translate-x-[-100%]" : "translate-x-0"
      }`}
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-[#ecdfcc] text-2xl font-medium">Platon</h2>
        <button
          className="bg-transparent border-0 cursor-pointer"
          onClick={() => dispatch(closeSidebar())}
        >
          <img
            src={sideBarToggleBtn}
            alt="Sidebar Toggle Button"
            className="w-6 h-6"
          />
        </button>
      </div>
      <div className="h-[88%] flex justify-center items-center">
        <p className="text-white text-base font-light">No chat history</p>
      </div>

      {/* User Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            className="p-2 bg-[#3C3D37] rounded-4xl"
            src={userIcon}
            alt="User Profile"
          />
          <p className="text-[#ecdfcc] text-sm font-medium">Upgrade Plan</p>
        </div>
        <button className="cursor-pointer">
          <img src={moreMenu} alt="more menu btn" />
        </button>
      </div>
    </section>
  );
}

export default SideBar;

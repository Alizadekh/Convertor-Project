import { useSelector } from "react-redux";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import SideBar from "../components/SideBar";

function ChatBox() {
  const isSidebarOpen = useSelector((state) => state.sidebar.sidebar);

  return (
    <>
      <Header />
      <MainPage />
      <SideBar />
    </>
  );
}

export default ChatBox;

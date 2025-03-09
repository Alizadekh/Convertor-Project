import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import SideBar from "./components/SideBar";

function App() {
  const isSidebarOpen = useSelector((state) => state.sidebar.sidebar);

  return (
    <>
      <Header />
      <SideBar />
      <MainPage />
    </>
  );
}

export default App;

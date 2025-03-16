import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";

import Plans from "./pages/Plans";
import ChatBox from "./pages/ChatBox";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChatBox />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
    </>
  );
}

export default App;

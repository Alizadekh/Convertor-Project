import { Routes, Route } from "react-router-dom";
import "./App.css";
import Plans from "./pages/Plans";
import ChatBox from "./pages/ChatBox";
import SignupPage from "./pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChatBox />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
    </>
  );
}

export default App;

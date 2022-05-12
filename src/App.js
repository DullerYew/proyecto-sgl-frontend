
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendar from "./component/Calendar/Calendar.jsx";
import Login from "./view/Login.js";
import SignUp from "./view/SignUp.js";
import "./App.css";
import "./component/Calendar/style.css"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={ <Calendar/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

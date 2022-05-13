
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./view/Login.js";
import SignUp from "./view/SignUp.js";
import Dashboard from "./view/Dashboard.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={ <Login/>}/>
          <Route path="/login" element={ <Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/dashboard" element={< Dashboard/>}/>
          <Route path="/foo" element={ <Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./view/Login.js";
import SignUp from "./view/SignUp.js";
import AddReservation from "./view/AddReservation.js";
import ModifyReservation from "./view/ModifyReservation.js";
import DeleteReservation from "./view/DeleteReservation.js";
import RequestTable from "./component/RequestTable/RequestTable.js";
import Calendar from "./view/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={ <Login/>}/>
          <Route path="/login" element={ <Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/dashboard/addReservation" element={<AddReservation/>}/>
          <Route path="/dashboard/modifyReservation" element={<ModifyReservation/>}/>
          <Route path="/dashboard/deleteReservation" element={<DeleteReservation/>}/>
          <Route path="/dashboard/requestTable" element={<RequestTable/>}/>
          <Route path="/dashboard" element={<Calendar/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

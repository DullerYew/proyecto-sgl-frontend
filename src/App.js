
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendar from "./component/Calendar/Calendar.jsx";
import Login from "./view/Login.js";
import SignUp from "./view/SignUp.js";
import AddReservation from "./view/AddReservation.js";
import ModifyReservation from "./view/ModifyReservation.js";
import DeleteReservation from "./view/DeleteReservation.js";
import RequestTable from "./component/RequestTable/RequestTable.js";
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
          <Route path="/addReservation" element={<AddReservation/>}/>
          <Route path="/modifyReservation" element={<ModifyReservation/>}/>
          <Route path="/deleteReservation" element={<DeleteReservation/>}/>
          <Route path="/requestTable" element={<RequestTable/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

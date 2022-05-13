import React from 'react';
import Header from '../component/Header/headerDashboard';
import Calendar from "../component/Calendar/Calendar.jsx";
import "../component/Calendar/style.css";

function Dashboard() {
    return(
        <div>
            <Header />
            <Calendar />
        </div>
    );
}

export default Dashboard;
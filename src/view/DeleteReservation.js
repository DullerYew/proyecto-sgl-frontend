import React from 'react';
import Header from '../component/Header/headerDashboard';
import DeleteReservationForm from '../component/DeleteReservation/deleteReservationForm';
//import Footer from '../components/Footer/Footer';

function DeleteReservation () {
    return (
        <div>
            <Header />
            <DeleteReservationForm />
        </div>
    );
}

export default DeleteReservation;
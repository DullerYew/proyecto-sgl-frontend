import React from 'react';
import CardAdd from '../component/Card/cardAñadirReserva';
import CardAddNew from '../component/Card/cardAñadirNueva';
import Header from '../component/Header/headerDashboard';
import '../component/Card/style.css';

function AddReservation(){
    return(
        <div>
            <Header/>
            <div class='card-add-solicitud'>
                <CardAdd/>
            </div>
            <div class='card-add-new'>
                <CardAddNew/>
            </div>
        </div>
    );
}

export default AddReservation;
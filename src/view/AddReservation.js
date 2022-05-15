import React from 'react';
import CardAdd from '../component/Card/cardAñadirReserva';
import CardAddNew from '../component/Card/cardAñadirNueva';
import Header from '../component/Header/headerDashboard';
import '../component/Card/style.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function AddReservation(){
    return(
        <div>
            <Header/>
            <div class='card-add-solicitud'>
                
            </div>
            <div class='card-add-new'>
                
            </div>
            <Box sx={{ flexGrow: 1, marginTop: 5}}>
                <Grid container justifyContent="center" spacing={10}>
                    <Grid item>
                        <CardAdd/>
                    </Grid>
                    <Grid item>
                        <CardAddNew/>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default AddReservation;

/*
<div class='card-add-solicitud'>
                <CardAdd/>
            </div>
            <div class='card-add-new'>
                <CardAddNew/>
            </div>

*/
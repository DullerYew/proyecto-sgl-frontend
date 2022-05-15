import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SelectorFolio from '../Selector/selectorFolio';
import Button from '@mui/material/Button';
import '../Selector/style.css';

export default function BasicCard(){
        return (
            <Card sx={{height: 275, width: 400}}>
                <CardContent>
                    <h2>Añadir reserva de mediante solicitud previa</h2>
                    <Divider />
                    <p>
                        Folio de solicitud
                    </p>
                    <div class="selector-solicitud-folio">
                        <SelectorFolio/>
                    </div>
                    <div class="button-solicitud-folio">
                        <Button variant="contained">Añadir</Button>
                    </div>
                </CardContent>
            </Card>
        );
}
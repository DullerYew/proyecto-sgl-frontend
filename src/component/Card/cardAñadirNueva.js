import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import SelectorLab from '../Selector/selectorLab';
import TextField from '@mui/material/TextField';
import DatePicker from '../Datepicker/datepicker.js';
import TimePicker from "../Datepicker/timepicker.js";
import Button from '@mui/material/Button';
import "./style.css";

export default function BasicCard(){
        return (
            <Card sx={{height: 450, width: 650}}>
                <CardContent>
                    <h2>Añadir nueva reservacion de laboratorio</h2>
                    <Divider />
                    <p>
                        Laboratorio
                    </p>
                    <div class="selector-lab-new">
                        <SelectorLab/>
                    </div>
                    <p>
                        Correo electronico
                    </p>
                    <div class="textfield-correo">
                        <TextField id="standard-basic" label='Correo electronico' variant="standard"/>
                    </div>
                    <div class='datepicker'>
                        <DatePicker/>
                    </div>

                    <div class='time'>
                        <TimePicker/>
                    </div>
                    <div class="button-nueva">
                        <Button variant="contained">Añadir</Button>
                    </div>
                </CardContent>
            </Card>
        );
}
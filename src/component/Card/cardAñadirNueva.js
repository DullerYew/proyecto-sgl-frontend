import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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
            <Card sx={{width: 400}}>
                <CardContent>
                    <h2>Añadir nueva reservacion de laboratorio</h2>
                    <Divider />
                    <br/>
                    <Box sx={{ flexGrow: 1}}>
                        <Grid container justifyContent="center" spacing={5}>
                            <Grid item>
                                <p><b>Laboratorio</b></p>
                                <Box sx={{ width: 162, marginTop: 1 }}>
                                    <SelectorLab/>
                                </Box>
                            </Grid>
                            <Grid item>
                                <p><b>Hora</b></p>
                                <Box sx={{ width: 162, marginTop: 1}}>
                                    <TimePicker/>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    <br/>
                    <p><b>Correo electrónico</b></p>

                    <Box>
                        <TextField id="standard-basic" label='Correo electronico' variant="standard"/>
                    </Box>

                    <br/>

                    <p><b>Fecha</b></p>

                    <Box sx={{marginTop:1}}>
                        <DatePicker/>
                    </Box>

                    <br/>
                    
                    <Box sx={{ paddingLeft: 34 }}>
                        <Button variant="contained">Añadir</Button>
                    </Box>
                </CardContent>
            </Card>
        );
}

/*
                    sx={{height: 450, width: 650}}
                    class="textfield-correo"
                    class='datepicker'
                     class="button-nueva"
                    <div class="selector-lab-new">
                        
                    </div>

                    <div class='time'>
                        
                    </div>
*/
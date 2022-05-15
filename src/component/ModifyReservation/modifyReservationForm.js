import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import DatePicker from '../Datepicker/datepicker.js';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
//import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
//import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { createTheme, ThemeProvider } from '@mui/material/styles';
  


const theme = createTheme();

const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      // eslint-disable-next-line no-console
      console.log({
            reservation_id: data.get("reservation"),
            lab: data.get('lab'),
            hour: data.get("hour-select"),
            date: data.get("date")
      });
};

/*
function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Fecha"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
*/

class ModifyReservationForm extends React.Component{
    constructor() {
        super()
        this.reservation = "R0001"
        this.lab = "LT"
        this.hours = ["07:00-08:00", "12:00-13:00", "13:00-14:00", "17:00-18:00"]

        //const handleChange = (event) => { setReservation(event.target.value); };

        this.HourMenuItemList = []
        for (let i = 0; i < this.hours.length; i++) {
            this.HourMenuItemList.push(
                <MenuItem value={this.hours[i]}>{this.hours[i]}</MenuItem>
            );
        }
    }
    
    render(){
        return(
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Card sx={{ minWidth: 300, marginTop: -3}}>
                        <CardContent>
                            <Typography component="h1" variant="h5">
                                <b> Modificar reservación </b>
                            </Typography>

                            <br/>      

                            <Box sx={{ flexGrow: 1}}>
                                <Grid container justifyContent="center" spacing={5}>
                                    <Grid item>
                                        <p><b>Reservación</b></p>
                                        <Box sx={{ width: 160, marginTop: 1}}>
                                            <TextField disabled defaultValue={this.reservation}/>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <p><b>Laboratorio</b></p>
                                        <Box sx={{ width: 160, marginTop: 1 }}>
                                            <TextField disabled defaultValue={this.lab}/>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <br/>

                            <p><b>Hora</b></p>
                            <Box sx={{marginTop: 1}}>
                                <FormControl fullWidth required>
                                    <InputLabel id="hour-input-label">Hora</InputLabel>
                                    <Select
                                        labelId="hour-select-label"
                                        id="hour-select"
                                        label="Hora"
                                    >
                                        {this.HourMenuItemList}
                                    </Select>
                                </FormControl>
                            </Box>

                            <br/>

                            <Typography>
                                <b>Fecha</b>
                            </Typography>

                            <Box sx={{marginTop: 1}}>
                                <DatePicker/>
                            </Box>


                            <br/>

                            <Box sx={{ paddingLeft: 34 }}>
                                <Button type="submit" variant="contained"> Añadir </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Container>
            </ThemeProvider>
        );
    }
}

export default ModifyReservationForm;
//<BasicDatePicker id="date"/>
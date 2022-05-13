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


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//import BasicSelect from '../BasicSelect/BasicSelect';


import { createTheme, ThemeProvider } from '@mui/material/styles';
  
    const theme = createTheme();
  
    // export default function SignIn() {
    const handleSubmit = (event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          // eslint-disable-next-line no-console
          console.log({
                reservation_id: data.get('reservation-select')
          });
    };

class DeleteReservationForm extends React.Component{
    constructor() {
        super()
        this.reservations = ["R0001", "R0002", "R0003", "R0004", "R0005"];

        //const [reservation, setReservation] = React.useState('');
        //const handleChange = (event) => { setReservation(event.target.value); };

        this.MenuItemList = []
        for (let i = 0; i < this.reservations.length; i++) {
            this.MenuItemList.push(
                <MenuItem value={this.reservations[i]}>{this.reservations[i]}</MenuItem>
            );
        }
    }
    
    render(){
        return(
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Card sx={{ minWidth: 300 }}>
                        <CardContent>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                
                            </Box>
                            <Typography component="h1" variant="h5">
                                    <b> Eliminar / Cancelar Reserva </b>
                                </Typography>

                            <Typography>
                                <br/>
                                <b>Elija la reservación</b>
                            </Typography>
                                
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, marginLeft:0.1}}>
                                <Box sx={{ minWidth: 120 }}>
                                  <FormControl fullWidth required>
                                    <InputLabel id="reservation-input-label">Reservación</InputLabel>
                                    <Select
                                      labelId="reservation-select-label"
                                      id="reservation-select"
                                      label="Reservación"
                                    >
                                        {this.MenuItemList}
                                    </Select>
                                  </FormControl>
                                </Box>
                            </Box>
                            
                            <Typography>
                                <br/>
                                <b>Eliminar Reserva</b>
                            </Typography>

                            <p class="align-justify">
                                ¿Está seguro de eliminar la reserva? Esta acción no se puede deshacer. Si es así, escribe "Eliminar" en el campo de abajo y confirma.
                            </p>

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label='Escriba "Eliminar"'
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />

                            <br/>
                            <br/>

                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container justifyContent="center" spacing={16}>
                                    <Grid item>
                                        <Button variant="contained"> Cancelar </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button type="submit" variant="contained"> Confirmar </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                    </Card>
                </Container>
            </ThemeProvider>
        );
    }
}

export default DeleteReservationForm;
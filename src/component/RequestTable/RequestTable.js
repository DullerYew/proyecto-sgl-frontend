import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Header from '../Header/headerRegistro';

const theme = createTheme();

const columns = [
  { field: 'id', headerName: 'Folio', width: 100, sortable: false },
  { field: 'fecha', headerName: 'Fecha', width: 140, sortable: false  },
  { field: 'hora', headerName: 'Hora', width: 140, sortable: false  },
  { field: 'status', headerName: 'Status', width: 140 },
  { field: 'laboratorio', headerName: 'Laboratorio', width: 160 },
  { field: 'usuario', headerName: 'Usuario', width: 180 },
  { field: 'correo', headerName: 'Correo', width: 240 },
];

const rows = [
  {id: 'R0000', fecha: '20-05-2022', hora:'12:00-13:00', status:'Pendiente', laboratorio:'LT', usuario: 'Juan', correo: 'juan@ucaribe.edu.mx'},
  {id: 'R0001', fecha: '23-05-2022', hora:'12:00-13:00', status:'Pendiente', laboratorio:'Analítica', usuario: 'Pedro', correo: 'pedro@ucaribe.edu.mx'},
  {id: 'R0002', fecha: '24-05-2022', hora:'12:00-13:00', status:'Pendiente', laboratorio:'LyCS', usuario: 'Karla', correo: 'karla@ucaribe.edu.mx'},
  {id: 'R0003', fecha: '27-05-2022', hora:'12:00-13:00', status:'Pendiente', laboratorio:'LT', usuario: 'Ramiro', correo: 'ramiro@ucaribe.edu.mx'},
  {id: 'R0004', fecha: '04-06-2022', hora:'12:00-13:00', status:'Pendiente', laboratorio:'Electrónica', usuario: 'Wizard', correo: 'wizard@ucaribe.edu.mx'},
  {id: 'R0005', fecha: '08-06-2022', hora:'12:00-13:00', status:'Pendiente', laboratorio:'LT', usuario: 'Juan', correo: 'juan@ucaribe.edu.mx'},
  {id: 'R0006', fecha: '16-06-2022', hora:'12:00-13:00', status:'Pendiente', laboratorio:'Analítica', usuario: 'Richar', correo: 'richar@ucaribe.edu.mx'},
  {id: 'R0007', fecha: '21-06-2022', hora:'12:00-13:00', status:'Pendiente', laboratorio:'LyCS', usuario: 'Tony', correo: 'tony@ucaribe.edu.mx'},
  {id: 'R0008', fecha: '28-06-2022', hora:'12:00-13:00', status:'Pendiente', laboratorio:'LM', usuario: 'Sebastian', correo: 'sebastian@ucaribe.edu.mx'},
];


export default function RequestTable() {
    return (
      <div>
          <Header />
          <ThemeProvider theme={theme}>
              <Container component="main">
                  <CssBaseline/>
                  <div style={{ height: 371, width: '100%' }}>
                      <DataGrid
                          rows={rows}
                          columns={columns}
                          pageSize={5}
                          rowsPerPageOptions={[5]}
                          checkboxSelection
                      />
                  </div>

                  <br/>

                  <Box sx={{ flexGrow: 1 }}>
                      <Grid container justifyContent="right" spacing={5}>
                          <Grid item>
                              <Button variant="contained" color="success"> Aceptar </Button>
                          </Grid>
                          <Grid item>
                              <Button variant="contained"> Eliminar </Button>
                          </Grid>
                          <Grid item>
                              <Button variant="contained" color="error"> Rechazar </Button>
                          </Grid>
                      </Grid>
                  </Box>
              </Container>
            </ThemeProvider>
      </div>
          
    );
}

/*
              <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Card sx={{ minWidth: 300 }}>
                        <CardContent>
                            <Typography component="h1" variant="h5">
                                <b> Modificar reservación </b>
                            </Typography>

                            <br/>      

                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container justifyContent="center" spacing={5}>
                                    <Grid item>
                                        <p><b>Reservación</b></p>
                                        <Box sx={{ width: 160 }}>
                                            <TextField disabled defaultValue={this.reservation}/>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <p><b>Laboratorio</b></p>
                                        <Box sx={{ width: 160 }}>
                                            <TextField disabled defaultValue={this.lab}/>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <br/>

                            <p><b>Hora</b></p>
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

                            <br/>
                            <br/>

                            <Typography>
                                <b>Fecha</b>
                            </Typography>

                            <BasicDatePicker id="date"/>

                            <br/>
                            <br/>

                            <Box sx={{ paddingLeft: 34 }}>
                                <Button type="submit" variant="contained"> Añadir </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Container>
            </ThemeProvider>
*/
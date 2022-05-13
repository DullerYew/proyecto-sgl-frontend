import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import './style.css';
import Drawer from '../Drawer/Drawer';

const AppBarStyled = styled(AppBar)({
    background:'#14395a',
    height: '90px',
    width:'auto'
});

const BootstrapButton = styled(Button)({
    backgroundColor:'#0f5577',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      color: '#103174'
    },
});

class Header extends React.Component {
    render(){
        return (
            <AppBarStyled position='static'>
                <Toolbar>
                    <div class="div-header-home">
                        <Drawer />
                    </div>
                    <div class='div-welcome-message'>
                        <h3>Inicio</h3>
                    </div>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <div class="div-header-main-button-registro">
                        <BootstrapButton variant="inherit" href="/login">Cerrar Sesión</BootstrapButton>
                    </div> 
                </Toolbar>
            </AppBarStyled>
        );
    }
}

export default Header;
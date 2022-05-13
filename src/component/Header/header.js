import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import './style.css';

const BootstrapButton = styled(Button)({
    '&:hover': {
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      color: '#103174'
    },
});

const LinkI = styled(Link)({
    color: '#FFFFFF',
    '&:hover': {
      color: '#FFFFFF'
    },

});

const AppBarStyled = styled(AppBar)({
    background:'#14395a',
    height: '90px',
    width:'auto'
});


class Header extends React.Component {
    render(){
        return (
            <AppBarStyled position='static'>
                <Toolbar>
                <div class="div-header-main ">
                    <li>
                    <a href="./"><img src='./images/SGL_logo-removebg-preview.png' onClick="./login" class="logo" /></a>
                    </li>
                </div>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <div class="div-header-main-button-login">
                        <BootstrapButton variant="inherit" href="/login">Iniciar Sesión</BootstrapButton>
                    </div>
                    <div class="div-header-main-button-registro">
                        <BootstrapButton variant="inherit" href="/signUp">Registrarme</BootstrapButton>
                    </div>  
                </Toolbar>
            </AppBarStyled>
        );
    }
}

export default Header;
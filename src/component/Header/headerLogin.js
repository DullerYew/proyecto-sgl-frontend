import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import './style.css';

const BootstrapButton = styled(Button)({
    '&:hover': {
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      color: '#103174'
    },
    height: '25%'
});




class Header extends React.Component {
    render(){
        return (
            <AppBar position="static" sx={{background:'#14395a', height:'90px' , width: "auto"}}>
                <Toolbar>
                <div class="div-header-login ">
                    <li>
                    <a href="./"><img src='./images/SGL_logo-removebg-preview.png' onClick="./login" class="logo" /></a>
                    </li>
                </div>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <div class="div-header-login-button-registro">
                        <BootstrapButton variant="inherit" href="/signUp">Registrarme</BootstrapButton>
                    </div>   
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;

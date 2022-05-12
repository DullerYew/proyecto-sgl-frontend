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
});


const LinkI = styled(Link)({
    color: '#FFFFFF',
    '&:hover': {
      color: '#FFFFFF'
    },

});


class Header extends React.Component {
    render(){
        return (
            <AppBar position="static" sx={{background:'#14395a',height:'120px'}}>
                <Toolbar>
                <LinkI href="/" className='link'>
                        <img src="./images/SGL_logo-removebg-preview.png" alt="" className="logo" href='/'/>
                    </LinkI>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <BootstrapButton variant="inherit" href="/SignUp" >Registrarse</BootstrapButton>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;

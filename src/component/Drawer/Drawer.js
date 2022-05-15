import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import {
    Route, Link as RouterLink, LinkProps as RouterLinkProps, Routes
  } from "react-router-dom";


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const ListItemLink = ({to, text}) => {
    const renderLink = React.useMemo(
      () =>
        React.forwardRef(function Link(itemProps, ref) {
          return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
        }),
      [to],
    );
  
    return (
      <ListItem button component={renderLink}>
        <ListItemText primary={text} />
      </ListItem>
    )
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[{ 'iconName': 'Inicio', 'page':'/dashboard'},{ 'iconName':'Añadir reservación de laboratorio','page':'/dashboard/addReservation'},{ 'iconName':'Modificar reservación de laboratorio','page':'/dashboard/modifyReservation'}, {'iconName':'Eliminar reservación de laboratorio','page':'/dashboard/deleteReservation'},{'iconName':'Lista de solicitudes','page':'/dashboard/requestTable'}].map((icon, index, array) => (
            <ListItemLink to={icon.page} text={icon.iconName}>
                <ListItemButton href={icon.page} >
                  <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
              </ListItemButton>
            </ListItemLink>
            
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton  size="large" sx = {{color : 'white'}}>
            <HomeSharpIcon fontSize="inherit" onClick={toggleDrawer(anchor, true)} ></HomeSharpIcon>
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

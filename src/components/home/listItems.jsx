import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import LaptopIcon from '@mui/icons-material/Laptop';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import HomeIcon from '@mui/icons-material/Home';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

const ListItemButtonBlue = styled(ListItemButton)({
    "&:hover":{
      backgroundColor:"#bbdefb",
    }
})

export const mainListItems = (
  <React.Fragment >
    <Link to="/admin">
    <ListItemButtonBlue>
      <ListItemIcon>
          <HomeIcon color='primary'/>  
      </ListItemIcon>
      <ListItemText primary="Inicio" primaryTypographyProps={{ color: 'primary' }}/>
    </ListItemButtonBlue>
    </Link>
    <Link to="/equipos/lista">
    <ListItemButtonBlue>
      <ListItemIcon>
        <LaptopIcon color='primary'/>
      </ListItemIcon>
      <ListItemText primary="Equipos" primaryTypographyProps={{ color: 'primary' }}/>
    </ListItemButtonBlue>
    </Link>
    <Link to="/mantenimientos/gestion">
    <ListItemButtonBlue>
      <ListItemIcon>
        <EngineeringIcon color='primary' />
      </ListItemIcon>
      <ListItemText primary="Mantenimiento" primaryTypographyProps={{ color: 'primary' }}/>
    </ListItemButtonBlue>
    </Link>
    <ListItemButtonBlue>
      <ListItemIcon>
        <PeopleIcon color='primary' />
      </ListItemIcon>
      <ListItemText primary="Usuarios" primaryTypographyProps={{ color: 'primary' }}/>
    </ListItemButtonBlue>
    {/* <ListItemButtonBlue>
      <ListItemIcon>
        <LayersIcon color='primary' />
      </ListItemIcon>
      <ListItemText primary="Integrations" primaryTypographyProps={{ color: 'primary' }}/>
    </ListItemButtonBlue> */}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <Link to="/formularios" >
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Formularios" />
    </ListItemButton>
    </Link>
    <Link to="/asignacionRoles">
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Asignación de roles" />
    </ListItemButton>
    </Link>
    <Link to="/asignacionEquipos">
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Asignación de equipos" />
    </ListItemButton>
    </Link>
  </React.Fragment>
);
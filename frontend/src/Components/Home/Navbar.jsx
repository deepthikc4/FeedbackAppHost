import React from 'react';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import mylogo from '../images/ict logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <AppBar  position="sticky" color="transparent" component="nav">
        <Toolbar>
          
          <img
            src={mylogo} // Use your logo image
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
            alt="ICT KERALA"
          />
        
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            style={{padding:'10px',fontSize:'25px'}}
          >
      ICT Feedback System
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          
              <Button sx={{ color: 'black' }} style={{marginRight:'10px'}}>
              <Link to="/feedback" style={{textDecoration:'none',color:'black'}} >   Give Feedback </Link>
            
              </Button>
              <Button sx={{ color: 'black' }} style={{marginRight:'10px'}}><Link to="/login" style={{textDecoration:'none',color:'black'}} >     Training Coordinator Dashboard </Link>
            
              </Button>
              <Button sx={{ color: 'black' }} style={{marginRight:'10px'}}>
              <Link to="/login" style={{textDecoration:'none',color:'black'}} >   IQA Dashboard </Link>
             
              </Button>
              
              {/* <Button sx={{ color: 'white',backgroundColor:'black',borderRadius:'10px' }}>
               Login
              </Button> */}
           
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

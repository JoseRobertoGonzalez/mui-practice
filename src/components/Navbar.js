import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flex: 1 }}>
          Material UI SPA
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/adduser">
          Add User
        </Button>
        <Button color="inherit" component={Link} to="/users">
          Users
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
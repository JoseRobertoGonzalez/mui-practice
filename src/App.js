import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';

import Welcome from './pages/Welcome';
import AddUser from './pages/AddUser';
import Users from './pages/Users';
import UserDetail from './components/UserDetail';
import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009688',
    },
    secondary: {
      main: '#9af436',
    },
  },
});

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <UserProvider>
            <Box mt={8} display="flex" flexDirection="column" alignItems="center">
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/adduser" element={<AddUser />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<UserDetail />} />
              </Routes>
            </Box>
          </UserProvider>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
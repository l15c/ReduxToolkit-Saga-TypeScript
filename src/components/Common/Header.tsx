import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from 'app/hooks';
import { ColorModeContext } from 'context/ColorModeContext';
import { authActions } from 'features/auth/authSlice';
import { useContext } from 'react';

export function Header() {
  const dispatch = useAppDispatch();

  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();

  const handleLogoutClick = () => {
    dispatch(authActions.logout());
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Student Management
          </Typography>
          <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color='inherit'>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Button color='inherit' onClick={handleLogoutClick}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import { Dashboard, PeopleAlt } from '@mui/icons-material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  link: {
    color: 'inherit',
    textDecoration: 'none',

    '&.active > li > div': {
      backgroundColor: 'rgba(0, 0, 0, .08)',
    },
  },
});
export function Sidebar() {
  const classes = useStyles();
  return (
    <Box sx={{ width: '100%', maxWidth: 240, bgcolor: 'background.paper' }}>
      <nav aria-label='main mailbox folders'>
        <List>
          <NavLink to='dashboard' className={classes.link}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to='students' className={classes.link}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleAlt />
                </ListItemIcon>
                <ListItemText primary='Student' />
              </ListItemButton>
            </ListItem>
          </NavLink>
        </List>
      </nav>
    </Box>
  );
}

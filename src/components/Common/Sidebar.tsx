import { Dashboard, PeopleAlt } from '@mui/icons-material';
import { createTheme } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

const theme = createTheme();
const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 240,
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',

    '&.active > li > div': {
      backgroundColor: theme.palette.action.selected,
    },
  },
});
export function Sidebar() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
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

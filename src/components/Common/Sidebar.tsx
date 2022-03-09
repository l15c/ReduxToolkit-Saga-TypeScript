import { Dashboard, PeopleAlt } from '@mui/icons-material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

export function Sidebar() {
  return (
    <Box sx={{ width: '100%', maxWidth: 240, bgcolor: 'background.paper' }}>
      <nav aria-label='main mailbox folders'>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary='Dashboard' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PeopleAlt />
              </ListItemIcon>
              <ListItemText primary='Student' />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}

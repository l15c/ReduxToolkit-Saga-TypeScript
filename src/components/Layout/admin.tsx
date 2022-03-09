import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Header, Sidebar } from 'components/Common';
import * as React from 'react';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '240px 1fr',
    gridTemplateAreas: `"header header" "sidebar main"`,

    minHeight: '100vh',
  },
  header: {
    gridArea: 'header',
  },
  sidebar: {
    gridArea: 'sidebar',
    borderRight: `1px solid #999`,
    backgroundColor: 'background.paper',
  },
  main: {
    gridArea: 'main',
    backgroundColor: 'background.paper',
    padding: '16px 24px',
  },
});
export function AdminLayout() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Header />
      </Box>
      <Box className={classes.sidebar}>
        <Sidebar />
      </Box>
      <Box className={classes.main}>MAIN</Box>
    </Box>
  );
}

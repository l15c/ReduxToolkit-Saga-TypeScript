import { Box, Button, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as React from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },

  box: {
    padding: '18px',
  },
});

export default function LoginPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant='h5'>Student Management</Typography>

        <Box mt={4}>
          <Button fullWidth variant='contained' color='primary'>
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}

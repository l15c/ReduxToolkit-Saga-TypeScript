import { Box, Button, CircularProgress, createTheme, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import * as React from 'react';
import { authActions } from '../authSlice';

const theme = createTheme();
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },

  box: {
    padding: theme.spacing(2),
  },
});

export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector((state) => state.auth.logging);

  const handleLoginClick = () => {
    // TODO: Get username + pwd from login form
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    );
  };
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant='h5'>Student Management</Typography>

        <Box mt={4}>
          <Button fullWidth variant='contained' color='primary' onClick={handleLoginClick}>
            {isLogging && <CircularProgress size={20} color='secondary' />} &nbsp; Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}

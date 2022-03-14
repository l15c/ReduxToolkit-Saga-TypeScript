import { Box, createTheme, Paper, Typography } from '@mui/material';
import * as React from 'react';

const theme = createTheme();
export interface WidgetProps {
  title: string;
  children: any;
}

export default function Widget({ title, children }: WidgetProps) {
  return (
    <Paper
      sx={{
        p: theme.spacing(2),
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography variant='button'>{title}</Typography>

      <Box mt={2}>{children}</Box>
    </Paper>
  );
}

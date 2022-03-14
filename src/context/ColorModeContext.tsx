import { createContext, useContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider, ThemeOptions } from '@mui/material';

interface ColorModeContext {
  toggleColorMode: () => void;
  mode: 'dark' | 'light';
}

export const ColorModeContext = createContext<ColorModeContext>({
  toggleColorMode: () => {},
  mode: 'light',
});

export const ColorModeContextProvider = ({ children }: any) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode]
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // palette values for light mode
              }
            : {
                // palette values for dark mode
                primary: {
                  main: '#3f51b5',
                },
                secondary: {
                  main: '#f50057',
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);

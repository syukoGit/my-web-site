import { ThemeProvider } from '@mui/material';
import { createContext, useMemo, useState } from 'react';
import dark from '../themes/dark';
import light from '../themes/light';

export const CustomThemeContext = createContext({ toggleColorMode: () => {} });

interface ThemeContextProps {
  children: React.ReactNode;
}

export const CustomThemeProvider = ({ children }: ThemeContextProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => (mode === 'light' ? light : dark), [mode]);

  return (
    <CustomThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

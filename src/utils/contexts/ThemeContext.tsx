import React, { useState, createContext } from 'react';

const defaultTheme = { theme: 'light', toggleTheme: () => {} };
export const ThemeContext = createContext(defaultTheme);

interface ThemeContextProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
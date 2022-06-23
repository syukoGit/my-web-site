import { styled } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import { CustomThemeProvider } from './utils/contexts/CustomThemeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const StyledApp = styled('div')(() => ({
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,  sans-serif',
}));

root.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <StyledApp>
        <Header />
        <Home />
        <Footer />
      </StyledApp>
    </CustomThemeProvider>
  </React.StrictMode>
);

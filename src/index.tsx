import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';
import Home from './pages/Home';
import { CustomThemeProvider } from './utils/contexts/CustomThemeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <Header />
      <Home />
      <Footer />
    </CustomThemeProvider>
  </React.StrictMode>
);

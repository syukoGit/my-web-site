import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import './index.css';
import Home from './pages/Home';
import { ThemeProvider } from './utils/contexts/ThemeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Home />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
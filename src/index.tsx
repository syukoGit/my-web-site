import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './pages/Home';
import { setDefaultLanguage, setTranslations } from 'react-multi-lang';
import en from './translations/en.json';
import fr from './translations/fr.json';

setTranslations({ en, fr });
setDefaultLanguage('en');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

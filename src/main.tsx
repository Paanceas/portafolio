import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/scss/main.scss';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

// Configurar Google Analytics con tu ID de seguimiento
// eslint-disable-next-line import/no-named-as-default-member
ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID || '');
console.log('🚀 ~ file: main.tsx:10 ~ process.env:', process.env);
// Agregar etiqueta de script de Google Analytics al head del documento
// eslint-disable-next-line import/no-named-as-default-member
ReactGA.ga('create', process.env.REACT_APP_GA_TRACKING_ID || 'UA-XXXXX-Y', 'auto');
// eslint-disable-next-line import/no-named-as-default-member
ReactGA.ga('send', 'pageview');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

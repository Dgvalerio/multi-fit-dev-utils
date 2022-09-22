import React from 'react';
import ReactDOM from 'react-dom/client';

import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider as MuiProvider } from '@mui/material/styles';

import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({ palette: { mode: 'dark' } });
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MuiProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiProvider>
  </React.StrictMode>
);

reportWebVitals();

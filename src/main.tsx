import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/queryClient';
import { theme } from './theme/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
    }).catch(function (error) {
      console.log('Service worker registration failed: ', error);
    });
  });
}

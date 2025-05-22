import React from 'react';
import ReactDOM from 'react-dom/client';
import '@atlaskit/css-reset';
import App from './App';
import AppProvider from '@atlaskit/app-provider';

// Global styles can be added here if needed

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

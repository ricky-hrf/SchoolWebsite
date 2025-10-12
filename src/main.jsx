import React from 'react';
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from './context/ProviderContext';
import router from './router';
import { AuthProvider } from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

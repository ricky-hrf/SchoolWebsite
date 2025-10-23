import React from 'react';
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from './context/ProviderContext';
import router from './router';
import { AuthProvider } from "./context/AuthProvider";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

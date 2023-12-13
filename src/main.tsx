import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { ThemeProvider } from '@material-tailwind/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import { BasketPage } from './pages/BasketPage';
import { CatalogPage } from './pages/CatalogPage';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';

const router = createBrowserRouter([
  {
    path: '/sabonis/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/sabonis/catalog',
        element: <CatalogPage />,
      },
      {
        path: '/sabonis/product',
        element: <ProductPage />,
      },
      {
        path: '/sabonis/basket',
        element: <BasketPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);

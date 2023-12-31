import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './fonts/index.ts';
import '@splidejs/react-splide/css';

import {ThemeProvider} from '@material-tailwind/react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import App from './App';
import {BasketPage} from '@pages/BasketPage';
import {CatalogPage} from '@pages/CatalogPage';
import {ErrorPage} from '@pages/ErrorPage';
import {HomePage} from '@pages/HomePage';
import {ProductPage} from '@pages/ProductPage';
import {EmptyBasketPage} from "@pages/EmptyBasketPage";
import {EventsPage} from "@pages/EventsPage";
import {EventPage} from "@pages/EventPage";
import {ProfilePage} from "@pages/ProfilePage";
import {ProfileHistoryPage} from "@pages/ProfileHistoryPage";
import {ProfileStorePage} from "@pages/ProfileStorePage";
import {ProfilePointsPage} from "@pages/ProfilePointsPage";

const router = createBrowserRouter([
    {
        path: "",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: '/catalog',
                element: <CatalogPage/>,
            },
            {
                path: '/product',
                element: <ProductPage/>,
            },
            {
                path: '/basket',
                element: <BasketPage/>,
            },
            {
                path: '/empty-basket',
                element: <EmptyBasketPage/>,
            },
            {
                path: '/events',
                element: <EventsPage/>,
            },
            {
                path: '/event',
                element: <EventPage />,
            },
            {
                path: '/profile',
                element: <ProfilePage />,
            },
            {
                path: '/profile/history',
                element: <ProfileHistoryPage />,
            },
            {
                path: '/profile/store',
                element: <ProfileStorePage />,
            },
            {
                path: '/profile/points',
                element: <ProfilePointsPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </React.StrictMode>,
);

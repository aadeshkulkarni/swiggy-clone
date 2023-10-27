import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Help from './components/Help';
import Offer from './components/Offer';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

const AppLayout = () => {
    return (<div className="app">
        <Header />
        <Outlet />
        <Footer />
    </div>)
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [{
            path: "/",
            element: <Body />
        },
        {
            path: "/support",
            element: <Help />
        },
        {
            path: "/offers",
            element: <Offer />
        },
        {
            path: "/restaurant/:resId",
            element: <RestaurantMenu />
        }],
        errorElement: <Error />
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
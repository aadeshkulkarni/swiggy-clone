import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Help from './components/Help';
const Help = lazy(() => import('./components/Help'))
import Offer from './components/Offer';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';

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
            element: <Suspense fallback={<Shimmer/>}><Help /></Suspense>
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
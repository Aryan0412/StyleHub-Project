import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import './App.scss';

import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Products from './Pages/Products/Products';
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AppContext from "./Context";
// import './'

const Layout = () => {
  return (
    <AppContext>

      <div className="app" >
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </AppContext>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products/:id',
        element: <Products />
      },
      {
        path: '/product/:id',
        element: <Product />
      }
    ]
  }

])
const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
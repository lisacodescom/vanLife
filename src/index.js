import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import router from "./router";


import App from "./App";
import {RouterProvider} from "react-router";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}><App /></RouterProvider>
);



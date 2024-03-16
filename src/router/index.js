import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Layout from "../pages/layout/layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/home',
                element: <Home/>
            }
        ]
    },
    {
        path: 'about',
        element: <About/>
    }

])
export default router
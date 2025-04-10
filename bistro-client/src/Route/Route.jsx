import { createBrowserRouter } from "react-router";
import React from "react";
import App from "../App";
import HomeLayout from "../Components/Layouts/HomeLayout";
import Menu from "../Components/Menu/Menu";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomeLayout/>,
            },
            {
                path: "/ourMenu",
                element: <Menu/>
            }
        ]
    }
])

export default routers;
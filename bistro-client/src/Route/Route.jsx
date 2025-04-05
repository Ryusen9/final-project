import { createBrowserRouter } from "react-router";
import React from "react";
import App from "../App";
import HomeLayout from "../Components/Layouts/HomeLayout";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomeLayout/>,
            }
        ]
    }
])

export default routers;
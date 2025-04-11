import { createBrowserRouter } from "react-router";
import React from "react";
import App from "../App";
import HomeLayout from "../Components/Layouts/HomeLayout";
import Menu from "../Components/Menu/Menu";
import OrderPage from "../Components/Order Food/OrderPage";

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
            },
            {
                path: "/ourShop",
                element: <OrderPage/>
            }
        ]
    }
])

export default routers;
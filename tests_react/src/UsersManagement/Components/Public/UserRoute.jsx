import React from "react";
import { UsersOutlet } from "./UsersOutlet";
import UsersTable from "../UsersTable";
import { createBrowserRouter, defer, Link,NavLink, Outlet, useNavigation, useRouteError } from "react-router-dom";
import UsersAdd from "../UsersAdd";
import UsersUpdate from "../UsersUpdate";




export const UserRoute = createBrowserRouter([
    {
        path:"/users",
        element:<UsersOutlet/>,
        children:[
            {
                path:"",
                element:<UsersTable/>,
            },
            {
                path:"add",
                element:<UsersAdd/>,
            },
            {
                path:"update/:id",
                element:<UsersUpdate/>,
            }
        ]
    }
])
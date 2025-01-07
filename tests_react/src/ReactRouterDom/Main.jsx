import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {router} from "./Router" 

export default function Main(){
   return <RouterProvider router={router}/>
}
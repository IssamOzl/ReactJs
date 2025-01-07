import React from "react";
import { RouterProvider } from "react-router-dom";
import { UserRoute } from "./UserRoute";

export default function Main(){
   return <RouterProvider router={UserRoute}/> 
}
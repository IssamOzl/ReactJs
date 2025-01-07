import React from "react";
import Navbar from "./components/Navbar.js";
import Main from "./components/Main";
import ReactQuery from "./components/ReactQuery.jsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Reqres from "./components/Reqres.jsx";

const queryClient = new QueryClient();
 
export default function App(){
    return(
        // <QueryClientProvider client={queryClient}>
        //     <ReactQuery/>
        // </QueryClientProvider>
      <QueryClientProvider client={queryClient}>
        <Reqres/>
      </QueryClientProvider>
    )
}


import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom"

import Home from './Home'
import Contact from './Contact'
import Aboutus from './About'
import Layout from './Layout'
import Post from './Post'
 
 

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route index  element={<Home/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='aboutus' element={<Aboutus/>}/>
            <Route path='post/:id' element={<Post/>}/>
        </Route>
    )
)
export default function Main() {
  return (
    <RouterProvider router={router}/>
  )
}

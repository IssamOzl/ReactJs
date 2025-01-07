import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Home"
import Category from "./Category"
import Product from "./Product"
import Cart from "./Cart"
import Thanks from "./Thanks"

export default function Main() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="category/:catgory_id" element={<Category />}/>
                <Route path="product/:slug" element={<Product />}/>
                <Route path="cart/" element={<Cart />}/>
                <Route path="thanks/" element={<Thanks />}/>
            </Route>
        )
    )
  return (
    <RouterProvider router={router}/>
  )
}

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { lazy, Suspense } from "react"
import Layout from "./Layout"
import Home from "./Home"
import Category from "./Category"
import Product from "./Product"
import Cart from "./Cart"
import Thanks from "./Thanks"
import ErrorOrLoading from "../Components/UI/Alert/ErrorOrLoading"

const Conditions_generales_de_vente = lazy(() => import("./Conditions_generales_de_vente"))
const Politique_de_confidentialite = lazy(() => import("./Politique_de_confidentialite"))
const Politique_retour = lazy(() => import("./Politique_retour"))

export default function Main() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={     <Layout /> }>
        <Route index element={<Home isLost={false} /> }/>
        <Route path="category/:catgory_id" element={<Category />} />
        <Route path="product/:slug" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="thanks" element={<Thanks />} />
        <Route path="conditions_generales_de_vente" element={<Conditions_generales_de_vente />} />
        <Route path="politique_de_confidentialite" element={<Politique_de_confidentialite />} />
        <Route path="politique_retour" element={<Politique_retour />} />
        <Route path="*" element={<Home isLost={true} />} />
      </Route> 
    )
  )
  return (

    

    <Suspense fallback={<ErrorOrLoading isLoading={true} error={null} />}>
      
  
        <RouterProvider router={router} />
      </Suspense >
  )
}

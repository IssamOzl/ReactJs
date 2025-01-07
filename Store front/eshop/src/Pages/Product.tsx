import { useParams } from "react-router-dom"
import ProductDetails from "../Components/ProductDetails/ProductDetails"

 

export default function Product() {
    const {slug} = useParams()  
    console.log("Hello from product");
  return (
    <ProductDetails slug={slug  as string}/>
  )
}

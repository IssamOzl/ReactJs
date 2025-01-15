import { useParams } from "react-router-dom"
import ProductDetails from "../Components/ProductDetails/ProductDetails"
 

export default function Product() {
    const {slug} = useParams()  
  return (
              <ProductDetails slug={slug  as string}/>
   )
}

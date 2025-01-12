import { useContext, useEffect, useState } from "react";
import { CartListing } from "../Components/CartListing/CartListing";
import OrderForm from "../Components/OrderForm/OrderForm";
import { CartCountContext } from "../Context/CartCountCntext";

const cssBlock = {
    display: "block"
  }
  const cssNone = {
    display: "none"
  }


export default function Cart() {

   const {cartCount} = useContext(CartCountContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    
    const [selecedShippingCity,setSelecedShippingCity] = useState(1)

    return (
        <div className="container my-4">
            <div className="row">
                <div className={(cartCount===0 ? ("col-md-12 ") : ("col-md-6 "))+"col-sm-12  card cart-listing"}>
                    <CartListing shippingCityId={selecedShippingCity} showDelete={true}/>
                </div>
                <div className="col-md-6 col-sm-12 frm"   style={cartCount===0 ? cssNone : cssBlock} >
                    <OrderForm setSelecedShippingCity={setSelecedShippingCity}/>
                </div>
            </div>

        </div>

    )
}

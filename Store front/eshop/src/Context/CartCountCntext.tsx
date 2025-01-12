import   { createContext, ReactNode, useState } from "react";
import { UseCart } from "../Hooks/UseCart"

 
export const CartCountContext = createContext({
    cartCount:0,
    setterCartCount:(_:number)=>{} 
})

interface CartCountContextProviderPropos{
    children: ReactNode;

}
export function CartCountContextProvider({children}:CartCountContextProviderPropos){
    const {getCartItemsCount} = UseCart()
    const [cartCount,setCartCount] = useState(getCartItemsCount())
    
    const setterCartCount = (newCount:number)=>{
        setCartCount(newCount)
    }


    return(
        <CartCountContext.Provider value={{cartCount,setterCartCount}}>
            {children}
        </CartCountContext.Provider>
    )
    

}
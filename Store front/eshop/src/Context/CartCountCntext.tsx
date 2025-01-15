import { createContext, ReactNode, useState } from "react";
import { UseCart } from "../Hooks/UseCart"
import { useQuery } from "@tanstack/react-query";
import { FetchData } from "../Utils/Helpers";
import useLocalStorage from "../Hooks/useLocalStorage";
import { env } from "../Utils/env";
import { params } from "../Utils/Types";


interface CartCountContextType {
    siteParams: params | undefined,
    cartCount: number,
    setterCartCount: (_: number) => void
}

const defaultCartCountContext: CartCountContextType = {
    siteParams: undefined,
    cartCount: 0,
    setterCartCount: () => { }
}

export const CartCountContext = createContext<CartCountContextType>(defaultCartCountContext)

interface CartCountContextProviderPropos {
    children: ReactNode;

}
export function CartCountContextProvider({ children }: CartCountContextProviderPropos) {
    const { getValue, setValue } = useLocalStorage()
    let siteParams: params | undefined

 

    const { isOk, value } = getValue(env.VITE_PARAMS_LS)
    console.log("{ isOk, value } ",{ isOk, value } );
    if (!isOk || value === "") {
        console.log("SITE PARMS LOAD");
        const { data, isSuccess } = useQuery({
            queryFn: () => FetchData<params>((`${env.VITE_API_URL + env.VITE_ROUTE_PARAMS}`)),
            queryKey: [env.VITE_PARAMS_LS]
        })

        if (isSuccess) {
            const params = data as unknown as params
            if (setValue(env.VITE_PARAMS_LS, JSON.stringify(data))) {
                siteParams = params
                document.documentElement.style.setProperty("--main-color", siteParams.main_color)
                document.documentElement.style.setProperty("--main-color-dark", siteParams?.main_color_dark)
                document.documentElement.style.setProperty("--second-color", siteParams.second_color)
                document.documentElement.style.setProperty("--second-color-dark", siteParams?.second_color)
                console.log("siteParams", siteParams);
            }
        }
    }else{
 
        siteParams = JSON.parse(value) as params 
        console.log("SITE PARMS from ls",siteParams);
    }


    const { getCartItemsCount } = UseCart()
    const [cartCount, setCartCount] = useState(getCartItemsCount())

    const setterCartCount = (newCount: number) => {
        setCartCount(newCount)
    }


    return (
        <CartCountContext.Provider value={{ cartCount, setterCartCount, siteParams }}>
            {children}
        </CartCountContext.Provider>
    )


}
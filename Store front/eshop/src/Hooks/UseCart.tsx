import { cartItem, order_product } from "../Utils/Types" 
import useLocalStorage from "./useLocalStorage"

export function UseCart() {


    const CART_LS = "cart"
    const { getValue, setValue, removeValue } = useLocalStorage()



    const addToCart = (item: cartItem): boolean => {
        let isOk = true
        let exist = false
        console.log("item To Add", item);
        try {
            let items = getAllCartItems() as unknown as cartItem[]

            // check if the paire variationId + productId exist in order to increment the quantity
            items.map((itm, index) => {
                if (itm.cartItemId === item.cartItemId) {
                    exist = true
                    items[index].Qte += item.Qte

                }
            })

            if (exist === false) items.push(item)

            isOk = SetAllCartItem([...items])
        } catch (error) {
            console.log(error);
            isOk = false
        }

        return isOk
    }

    const removeFromCart = (cartItemId: string) => {
        let isOk = true
        try {
            let items: cartItem[] = getAllCartItems()
            const filterdItems = items.filter(item => item.cartItemId !== cartItemId)
            isOk = SetAllCartItem(filterdItems)
        } catch (error) {
            console.log(error);
            isOk = false
        }

        return isOk
    }

    const SetAllCartItem = (items: cartItem[]=[]): boolean => {
        let isOk = true
        isOk = deleteAllCartItems()
        if (isOk && items.length>0) {
            isOk = setValue(CART_LS, JSON.stringify(items))
        }

        return isOk
    }

    const getCartItemsCount = (): number => {
        let count = 0

        try {
            let items: cartItem[] = getAllCartItems()
            items.map(item => count += item.Qte)
        } catch (error) {
            console.log(error);
        }

        return count
    }

    const getAllCartItems = (): cartItem[] => {
        let items: cartItem[] = []

        const { isOk, value } = getValue(CART_LS)
        if (isOk && value != "") {
            items = JSON.parse(value) as unknown as cartItem[]
        }
        return items
    }

    const deleteAllCartItems = ():boolean => {
        return removeValue(CART_LS)
    }

    const isFreeShipping = (): boolean => {
        let isFreeShipping: boolean = false

        let items: cartItem[] = getAllCartItems()

        for (let item of items) {
            if (item.free_shipping === 1) {
                isFreeShipping = true
                break
            }
        }
        console.log("isFreeShipping", isFreeShipping);
        return isFreeShipping
    }

    const formatedOrderProducts = (): order_product[] => {

        let products: order_product[] = []
        const items: cartItem[] = getAllCartItems()

        if (items && items.length > 0) {
            items.map(item => {
                products.push({
                    id_variation: item.variationId,
                    price: item.product_base_price,
                    product_id: item.product_id,
                    quantity: item.Qte,
                    tax: 0,
                    inventory_order_id: 0,
                    inventory_order_product_id: 0
                })
            })
        }

        return products
    }
    return {SetAllCartItem,deleteAllCartItems, addToCart, removeFromCart, getCartItemsCount, getAllCartItems, isFreeShipping, formatedOrderProducts }

}
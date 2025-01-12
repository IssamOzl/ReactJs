import { UseCart } from "../Hooks/UseCart";
import { env } from "../Utils/env"
import { order, order_product, orderFormData, shippingCity } from "./Types";

const headers = {
    "Content-Type": "application/json",  // Specifies the content type
    "x-api-key": env.VITE_API_KEY // Adds an authorization token
};

export async function postOrderData(endpoint: string, formData: orderFormData, selectedShippingCity: shippingCity) {
    // body of request must be an order type object
    // the order object has products:order_product[]
    // must declare this array or products first order_product[], the prods are in local storage
    // i think i will make this in useCart to retun a formatted array

    const { formatedOrderProducts } = UseCart()

    const orderProducts: order_product[] = formatedOrderProducts()

    const order: order = {
        coupon: "",
        order_address: formData.adresse,
        order_created_date: new Date().toISOString().split('T')[0],
        order_date: new Date().toISOString().split('T')[0],
        order_id: 0,
        order_name: formData.nom,
        order_phone: formData.telephone,
        order_shipping: 1,
        order_shipping_city: selectedShippingCity.id,
        order_shipping_cost: selectedShippingCity.shupping_cost,
        order_status: "to_confirm",
        order_total: 0,
        order_tracking: "",
        payment_status: "cash",
        order_shipping_id: 1,
        products: orderProducts
    }

    try {

        const response = await fetch(endpoint, {
            headers: headers,
            method: "POST",
            body: JSON.stringify(order)
        })
        if (!response.ok) {
            // error to be logged
            const data = await response.json(); // Parse the JSON response
            console.error('Error:', data); // Handle any errors
        }
        return (response.status)

    } catch (error) {
        console.error('Error:', error); // Handle any errors
    }



}
export async function FetchData<T>(endpoint: string): Promise<T[]> {

    let arrayData: T[] = []

    const res = await fetch(endpoint, {
        headers: headers,
        method: "GET"
    })

    if (res.status === 200) {
        const data = await res.json()
        arrayData = data
        return arrayData
    } else {
        throw Error(res.statusText)
    }


}

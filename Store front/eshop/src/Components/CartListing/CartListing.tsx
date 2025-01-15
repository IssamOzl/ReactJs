import { useQuery } from "@tanstack/react-query";
import { UseCart } from "../../Hooks/UseCart";
import { env } from "../../Utils/env";
import { FetchData } from "../../Utils/Helpers";
import {  shippingCity } from "../../Utils/Types";
import ErrorOrLoading from "../UI/Alert/ErrorOrLoading";
import { useContext, useState } from "react";
import { CartCountContext } from "../../Context/CartCountCntext";
import { Link } from "react-router-dom"; 
import Toast from "../UI/Toast/Toast";


type Props = {
    showDelete: boolean,
    shippingCityId: number 
};

export function CartListing({ shippingCityId = 1, showDelete = true  }: Props) {
     
    
    const {notify} = Toast()
    const { setterCartCount } = useContext(CartCountContext)
    const { removeFromCart, getCartItemsCount, getAllCartItems, isFreeShipping } = UseCart()
    const totalItemsInCart: number = getCartItemsCount()
    const verifiedShippingCityId =(shippingCityId && shippingCityId >0) ?  shippingCityId : 1

    const { data, isLoading, error } = useQuery({
        queryFn: () => FetchData<shippingCity>(`${env.VITE_API_URL}${env.VITE_ROUTE_SHIPPING_CITY_DETAILS}?id=${verifiedShippingCityId}`),
        queryKey: [`shippingCity_${verifiedShippingCityId}`],
    })

    const shippingCity: shippingCity = data as unknown as shippingCity 
    const shippingCost = isFreeShipping() ? 0 : shippingCity?.shupping_cost
    let obj: { totalPrice: number } = { totalPrice: 0 }
    obj.totalPrice = shippingCost

    function handleRemoveItem(cartItemId: string) {

        if (removeFromCart(cartItemId)) {
            notify("Supprimé avec succés")
            setItems(getAllCartItems())
            setterCartCount(getCartItemsCount())
           
        }

    }
    const [items, setItems] = useState(getAllCartItems())

    function listShoppingCart(param: { totalPrice: number }) {
        //const items: cartItem[] = getAllCartItems()

        const liste =
            items.map(item => {
                param.totalPrice += item.product_base_price
                return (<>
                    <tr>
                        <td>
                            <div className="lx-cart-products-list-img" >
                                <Link to={`/product/${item.slug}`}>
                                    <img src={`${env.VITE_IMAGES_FOLDER}${item.thumbnail}`} />
                                </Link>
                            </div>
                        </td>
                        <td>
                            <h3>
                                <Link to={`/product/${item.slug}`}>
                                    <span>{`QTE: ${item.Qte} - ${item.product_name}`}</span>
                                    {item.variationName != "..." && ` - ${item.variationName}`}
                                    </Link>    
                                    <br />
                                    {showDelete && <a className="remove-item" onClick={() => handleRemoveItem(item.cartItemId)}>Retirer</a>}
                                
                            </h3>
                        </td >

                        <td>
                            <span className="lx-mobile lx-price-total-mobile">
                                <strong>{`${item.product_base_price} Dhs`}</strong>
                            </span>
                        </td>
                    </tr >
                </>)
            })
        return liste
    }
    return (
        <>

            <ErrorOrLoading error={error} isLoading={isLoading} />
            {
                totalItemsInCart === 0
                    ?
                    <h3 className="no_prods">
                        Il y a zéro produits dans votre panier, veuillez continuer vos achats
                        <br />
                        <Link className="no_prods_a" to="/"> ici </Link>
                    </h3>
                    :
                    <div className="lx-cart-products-list">
                        <table cellPadding="0" cellSpacing="0" id="shopping-cart-results">
                            <tbody>
                                {listShoppingCart(obj)}
                            </tbody>
                        </table>
                        <p className="lx-shipping-costs"> Livraison : <b id="shipcost">{`${shippingCost} DH`}</b></p>
                        <p className="lx-total-costs">Total a payer : <strong id="total">{`${obj.totalPrice} DH`}</strong></p>
                    </div>
            }
        </>
    );
}
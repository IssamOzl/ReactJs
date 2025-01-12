import { useQuery } from "@tanstack/react-query"
import { orderFormData, orderFormSchema, shippingCity } from "../../Utils/Types"
import { FetchData, postOrderData } from "../../Utils/Helpers"
import { env } from "../../Utils/env"
import ErrorOrLoading from "../UI/Alert/ErrorOrLoading"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { UseCart } from "../../Hooks/UseCart"
import Toast from "../UI/Toast/Toast"
import { useContext } from "react"
import { CartCountContext } from "../../Context/CartCountCntext"
import { useNavigate } from "react-router-dom"


interface OrderFormPropos {
    setSelecedShippingCity: React.Dispatch<React.SetStateAction<number>>
}

export default function OrderForm({ setSelecedShippingCity }: OrderFormPropos) {

    const { setterCartCount } = useContext(CartCountContext)
    const { deleteAllCartItems } = UseCart()
    const navigate = useNavigate()

    const { register, reset, handleSubmit, setError, formState: { errors } } = useForm<orderFormData>({
        resolver: zodResolver(orderFormSchema),
    });


    const { data, isLoading, error } = useQuery({
        queryFn: () => FetchData<shippingCity>(`${env.VITE_API_URL}${env.VITE_ROUTE_SHIPPING_CITIES_ACTIVE}`),
        queryKey: ["active_shipping_cities"]
    })


    let shippingCities: shippingCity[] = data as unknown as shippingCity[]
    const handleFormSubmit = async (formData: orderFormData) => {
        // check for ville
        formData.ville === "0" && setError("ville", { message: "Merci de choisir une ville de livraison" })

        const selcity = shippingCities?.filter(city => {
            if (city.id === parseInt(formData.ville)) return city
        })

        const selectedCity = selcity[0] as unknown as shippingCity

        // status code is retuned
        const status = await postOrderData(`${env.VITE_API_URL}${env.VITE_ROUTE_ORDER_PLACE}`, formData, selectedCity as unknown as shippingCity)
        switch (status) {
            case 201:
                // empty the local storage
                deleteAllCartItems()
                // show info toast
                Toast().notify("Votre comande est envoyée avec succés !")
                // redirect to an other page
                reset()
                // update count itesms state
                setterCartCount(0)
                // redirect to thanks page
                navigate("/thanks")
                break;
            default:
                Toast().notify("Une erreur est survenue. Veuillez réessayer ultérieurement !")

        }

    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelecedShippingCity(parseInt(e.target.value))
    }
    return (
        <>
            <h4 className="order_tit">Veuillez remplir ce formulaire pour compléter la demande</h4>
            <hr />
            <ErrorOrLoading error={error} isLoading={isLoading} />
            <form onSubmit={handleSubmit(handleFormSubmit)} style={{ marginTop: "-5px" }}>
                <div className="form-group">
                    <label className="order_lib" htmlFor="exampleInputEmail1">Nom complet :</label>
                    <input {...register("nom")} type="text" className="form-control" />
                    {errors.nom && <small className="form_error">{errors.nom.message}</small>}
                </div>
                <div className="form-group">
                    <label className="order_lib" htmlFor="exampleInputPassword1">Telephone :</label>
                    <input {...register("telephone")} type="tel" className="form-control" />
                    {errors.telephone && <small className="form_error">{errors.telephone.message}</small>}
                </div>
                <div className="form-group">
                    <label className="order_lib" htmlFor="exampleInputPassword1">Adresse :</label>
                    <input {...register("adresse")} type="text" className="form-control" />
                    {errors.adresse && <small className="form_error">{errors.adresse.message}</small>}
                </div>
                <div className="form-group">
                    <label className="order_lib">Ville :</label>
                    <select {...register("ville")} className="form-control" onChange={handleSelectChange}>
                        <option value={0} > -- Veuillez choisir  -- </option>
                        {shippingCities
                            &&
                            shippingCities?.map(city => <option key={city.id} value={city.id}>{city.name}</option>)
                        }
                    </select>
                    {errors.ville && <small id="helpId" className="text-muted">{errors.ville.message}</small>}
                </div>
                <center>
                    <button disabled={isLoading} type="submit" className="btn btn-primary" id="ord_sub">Envoyer</button>

                </center>
            </form>
        </>
    )
}

import { memo, useState } from "react"
import useLocalStorage from "../../Hooks/useLocalStorage"
import { env } from "../../Utils/env"
import { params } from "../../Utils/Types"
import { useQuery } from "@tanstack/react-query"
import { FetchData } from "../../Utils/Helpers"
import { Link } from "react-router-dom"

function Footer() {
    const [show, setShow] = useState(false)
    const cssBlock = {
        display: "block"
    }
    const cssNone = {
        display: "none"
    }
    let siteParams: params | undefined = undefined

    const { setValue, getValue } = useLocalStorage()
    const { isOk, value } = getValue(env.VITE_PARAMS_LS)

    // trying to get local storage if already stored
    if (isOk && value != "") {
        const params = JSON.parse(value) as params
        siteParams = params

        // if not stored yet    
    } else {
        const { data, isSuccess} = useQuery({
            queryFn: () => FetchData<params>((`${env.VITE_API_URL + env.VITE_ROUTE_PARAMS}`)),
            queryKey: [env.VITE_PARAMS_LS]
        })

        if (isSuccess) {
            const params = data as unknown as params
            if (setValue(env.VITE_PARAMS_LS, JSON.stringify(data))) {
                siteParams = params
            }
        }

    }

    return (
        <>
            <div className="col-contact-us" id="cont">
                <a onClick={() => { setShow(prevShow => !prevShow) }}><i id="btn" className={show ? "fa fa-times" : "fa fa-phone"}></i></a>
                <div className="lx-contact-us-content" id="whatsphone" style={show ? cssBlock : cssNone}>
                    <ul>
                        <li><a href={`tel:${siteParams?.phone}`} className="lx-color1" target="_blank"><i className="fa fa-phone"></i>{siteParams?.phone}</a></li>
                        <li><a href={`https://wa.me/${siteParams?.whats_number}`} className="lx-color3"><i className="fab fa-whatsapp"></i>{siteParams?.whats_number}</a></li>
                        <li><a href={`https://${siteParams?.fb_link}/?modal=admin_todo_tour`} target="_blank" className="lx-color4"><i className="fab fa-facebook-messenger"></i> Messenger</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer">
                <p style={{textAlign:"center",marginTop:"30px"}}>
                    <Link to="/">
                        <img src={`${env.VITE_IMAGES_FOLDER}${siteParams?.logo_link.replace("black","white")}`}  style={{maxWidth:"250px"}} />
                    </Link>
                </p>
                <ul className="social-icons text-center icons-design-default icons-size-default social-share " style={{listStyleType: "none",width: "auto"}}>
                    <li className="social"><a rel="nofollow noopener noreferrer"href={`https://${siteParams?.fb_link}/?modal=admin_todo_tour`} target="_blank"><i className="fab fa-facebook"></i></a></li>
                    <li className="social"><a rel="nofollow noopener noreferrer" href="#" target="_blank" className=""><i className="fa fa-envelope"></i></a></li>
                    <li className="social"><a rel="nofollow noopener noreferrer" href={`https://wa.me/${siteParams?.whats_number}`} target="_blank"><i className="fab fa-whatsapp"></i></a></li>
                </ul>

                <p style={{textAlign:"center",marginTop:"15px"}}>
                    <ul className="social-icons text-center icons-design-default icons-size-default social-share " style={{listStyleType: "none",width: "auto"}}>
                        <li className="social"><Link to="Conditions_generales_de_vente"  className="footer-link">Conditions Générales de Vente</Link></li>
                        <li className="social"> <Link to="politique_de_confidentialite" className="footer-link">Politique de confidentialité</Link> </li>
                        <li className="social"><Link to="politique_retour" className="footer-link">Politique de retour</Link></li>
                    </ul>
                </p>
                <div className="rights">
                    <b><Link  to="/">{siteParams?.site_name}</Link></b> ©{(new  Date()).getFullYear()} , Tous les droits sont réservés.
                </div>
            </div>
        </>
    )
}

export default memo(Footer);
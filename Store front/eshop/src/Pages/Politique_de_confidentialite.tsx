import { Link } from "react-router-dom"
import useLocalStorage from "../Hooks/useLocalStorage"
import { env } from "../Utils/env"
import { params } from "../Utils/Types"
import { useEffect } from "react"

function Politique_de_confidentialite() {

    const defaultSiteName = env.VITE_DEFAULT_SITE_NAME
    let siteName = defaultSiteName

    const { getValue } = useLocalStorage()
    const { isOk, value } = getValue(env.VITE_PARAMS_LS)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // trying to get local storage if already stored
    if (isOk && value != "") {
        const params = JSON.parse(value) as params
        siteName = params.site_name + " "
    }

    return (
        <div className="container">
            <div className="row">

                <div className="conditions-content col-sm-9" role="main">

                    <article id="post-3" className="post-3 page type-page status-publish hentry">

                        <div className="entry-content">
                            <p>En application de la loi 78-17 du 6 janvier 1978, il est rappelé que les données nominatives qui sont demandés au Client sont nécessaires au traitement de sa commande et à l'établissement des factures, notamment.</p>
                            <p>Ces données peuvent être communiquées aux éventuels partenaires du Vendeur chargés de l'exécution, du traitement, de la gestion et du paiement des commandes.</p>
                            <p>Le traitement des informations communiquées par l'intermédiaire du site internet&nbsp;”{<Link to="/">{siteName}</Link>} ”&nbsp;a fait l'objet d'une déclaration auprès de la CNIL.</p>
                            <p>Le Client dispose, conformément aux réglementations nationales et européennes en vigueur d'un droit d'accès permanent, de modification, de rectification et d'opposition s'agissant des informations le concernant.</p>
                            <div className="page-width">
                                <div className="grid">
                                    <div className="grid__item medium-up--five-sixths medium-up--push-one-twelfth">
                                        <div className="rte">
                                            <p>Ce droit peut être exercé dans les conditions et selon les modalités définies sur le site internet ”&nbsp;<a href="{siteName}">{siteName}</a>”.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="shopify-section-footer" className="shopify-section">
                                <footer className="site-footer" role="contentinfo">
                                    <div className="page-width">
                                        <div className="site-footer__content">
                                            <div className="site-footer__item site-footer__item--one-half ">
                                                <div className="site-footer__item-inner site-footer__item-inner--link_list"></div>
                                            </div>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}
export default Politique_de_confidentialite
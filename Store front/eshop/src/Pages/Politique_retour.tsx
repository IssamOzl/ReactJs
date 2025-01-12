import { useEffect } from "react"
import useLocalStorage from "../Hooks/useLocalStorage"
import { env } from "../Utils/env"
import { params } from "../Utils/Types"

export default function Politique_retour() {

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
                <div className="conditions-content  col-sm-9" role="main">

                    <article id="post-3" className="post-3 page type-page status-publish hentry">
                        <div className="entry-content post-2134">
                            <h2><strong>Comment retourner un produit ?</strong></h2>
                            <p>Vous pouvez demander le retour de vos article en appelant notre service clientèle {siteName} </p><br />
                            <h2><strong>Quel est le délai de retour chez {siteName} ?</strong></h2>
                            <p>Tout produit vendu chez  {siteName} peut être retourné dans un délai de 7 jours à compter de la date de livraison. Passé ce délai, nous n'acceptons malheureusement plus les retours.</p><br />
                            <h2><strong>Quelles sont les conditions pour retourner un produit et quelle est la procédure ?</strong></h2>
                            <p>Tout article vendu sur {siteName} peut être retourné en cas de :</p>
                            <ol style={{ marginLeft: '30px', marginBottom: "30px", listStyleType: "circle" }}>
                                <li>Mauvais article</li>
                                <li>Article défectueux</li>
                                <li>Article endommagé</li>
                                <li>Produit incomplet</li>
                            </ol>
                            <p>Lorsque vous retournez votre article, il doit être retourné exactement dans la même condition que lorsqu'il vous a été livré avec tous ses accessoires. </p>
                            <p style={{ fontSize: "18px", textDecoration: "underline" }}><b>Changement d'avis</b></p>
                            <p>
                                En cas de changement d'avis, les articles doivent être scellés et retournés exactement dans les mêmes conditions que lorsqu'ils vous ont été livré.
                                <br /><br />Pour répondre au mieux à vos attentes, nous autorisons l'essayage des produits de mode homme et femme (hors lingerie et maillots de bain pour des questions d'hygiène), si le produit reste intact
                                <br /><br />Tout produit retourné sera sujet à un examen.
                                <br />Si l'examen est positif, nous vous rembourserons selon le mode choisi.
                                <br />Si l'examen est négatif, vous ne serez pas remboursé et votre produit vous sera retourné.
                                <br /><br />Le remboursement a lieu au maximum dans les 10 jours suivant votre demande de retour.

                            </p><br />
                            <h2><strong>Une fois que j'ai effectué ma demande de retour, quelles sont les étapes suivantes ?</strong></h2>
                            <p>Si le colis vous a été livré par {siteName}, l'un de nos agents vous contactera pour venir le chercher à votre domicile. Il y aura 3 tentatives pour récupérer l'article.</p><br />
                            <h2><strong>Que se passe-t-il si je rate les trois tentatives de récupération de mon article ?</strong></h2>
                            <p>
                                Votre demande de retour sera supprimée et il ne vous sera plus possible de retourner votre article.
                            </p><br />
                            <h2><strong>Que se passe-t-il si je rate les trois tentatives de récupération de mon article ?</strong></h2>
                            <p>
                                Votre demande de retour sera supprimée et il ne vous sera plus possible de retourner votre article.
                            </p><br />
                            <h2><strong>
                                Dois-je retourner tous les articles de ma commande si je souhaite effectuer un retour ?
                            </strong></h2>
                            <p>
                                Non, vous n'avez pas à retourner l'intégralité de votre commande. Vous pouvez choisir de retourner seulement certains articles.
                            </p><br />
                            <h2><strong>
                                Dois-payer des frais de transport pour effectuer un retour ?
                            </strong></h2>
                            <p>
                                Non, il n'y a aucun frais supplémentaire lorsque vous souhaitez retourner un produit.
                            </p><br />
                            <h2><strong>
                                Puis-je échanger mon article plutôt que d'être remboursé ?
                            </strong></h2>
                            <p>
                                Oui, vous pouver changer un produit retourné par un autre produit de meme valeur.
                            </p><br />
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

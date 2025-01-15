import { env } from "../Utils/env"
import { useContext, useEffect } from "react"
import { CartCountContext } from "../Context/CartCountCntext"

function Conditions_generales_de_vente() {
  
      const defaultSiteName = env.VITE_DEFAULT_SITE_NAME
      const { siteParams } = useContext(CartCountContext)
      console.log("siteParams Conditions_generales_de_vente",siteParams);
      const siteName = siteParams?.site_name || defaultSiteName

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
 

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="conditions-content col-sm-9" role="main">
            <article>
              <div className="entry-content">
                <h2><strong>LIVRAISON ET RETOUR</strong></h2>
                <p>{siteName}sont livrables partout dans le Maroc ou situation géographique de votre pays. Ils seront livrés à l'adresse de livraison que l'internaute renseignera sur le bon de commande.</p>
                <p>Toutes les commandes seront traitées sous 24h sauf le samedi et dimanche.</p>
                <p>Les délais de livraison seront de 2 à 10 jours ouvrables pour le maroc, s'appliquent à partir de la réception de message de confirmation envoyée par {siteName}</p>
                <p>{siteName}ne peut être tenu responsable des retards d'acheminement des colis.</p>
                <h2><strong>7 JOURS POUR CHANGER D'AVIS SANS CONTRAINTE</strong></h2>
                <p>Si pour une raison ou une autre, vous n'êtes pas satisfait, vous disposez de 7 jours à compter de la réception du colis pour renvoyer. Vous pouvez demander l'échange ou le remboursement</p>
                <p>Tout article ayant été utilisé ne peut être ni renvoyé, ni échangé. Les articles doivent être renvoyés à l'état neuf, dans leurs emballages d'origine et accompagnés de leurs étiquettes et documentation.</p>
                <h2><strong>MODES DE PAIEMENT</strong></h2>
                <p>Payer en espèces à la livraison</p>
                <p></p>
                <h2><strong>MENTIONS LÉGALES</strong></h2>
                <ul>
                  <li><strong>PROPRIÉTÉ DES DONNÉES</strong></li>
                </ul>
                <p>Le Site ainsi que les données concernant ce Site est à la propriété de</p>
                <p><u>{siteName}</u></p>
                <p>Aucune donnée obtenue à partir de ce Site ne peut être reproduite, vendue, transférée, modifiée, redistribuée, retransmise, publiée ou exploitée commercialement de quelque façon que ce soit</p>
                <ul>
                  <li><strong>PROTECTION DES DONNES PERSONNELLES</strong></li>
                </ul>
                <p>{siteName} s'engage à ne pas communiquer les données nominatives (nom, adresse, téléphone, email, etc.) ou celles relatives au paiement qui lui auront été transmises à quelque société ou organisme tiers que ce soit sauf dans les cas suivants:</p>
                <p>
                  1.Dansle cadre de la lutte contre les fraudes sur Internet.<br />
                  2. Dans le cadre des services associés choisis par nos clients (livraison, etc.), pour faciliter une transaction ou pour résoudre un éventuel litige.<br />
                  3. Dans l'hypothèse où la loi marocaine l'impose.<br />
                  4. Pour répondre à une injonction émanant d'une décision de justice ou des autorités légales.
                </p>
                <p>En acceptant les conditions générales de vente, les Clients donnent leur consentement à l'utilisation, par vol.ma, des données nominatives les concernant. Afin de fournir un service qui correspond aux besoins de ses Clients, {siteName} pourra être amené à collecter des données relatives à la notoriété et à l’usage de ses propres services.</p>
                <p>Ces données ne seront alors utilisées que sur une base anonyme et globalisée.{siteName}pourra être amené à utiliser les moyens techniques adaptés lui permettant de personnaliser ses services.</p>
                <p>{siteName} réserve la possibilité de modifier ou de mettre à jour les présentes Conditions d'Utilisation du site à tout moment et sans préavis.</p>
                <p>Les Comptes Clients et les données sont protégés par un mot de passe. Les internautes sont les seuls responsables de la préservation de la confidentialité de leur mot de passe et/ou de toute information en rapport avec leur profil. En cas d'oubli de leur mot de passe, ils doivent contacter {siteName} par mail ou par téléphone.</p>
                <ul>
                  <li><strong>DROIT APPLICABLE AUX LITIGES</strong></li>
                </ul>
                <p>Les présentes Conditions d'Utilisation sont soumises à la loi marocaine. En cas de différents relatifs à l'interprétation, l’exécution ou l’inexécution des présentes Conditions d’utilisation, les tribunaux marocains casablancais seront seuls compétents.</p>
                <h2><strong>COMMENT EFFECTUER UN ACHAT?</strong></h2>
                <ul>
                  <li>Sélectionnez le(s) produit(s) de votre choix</li>
                  <li>Sélectionner la pointure, couleur ...</li>
                  <li>Cliquez sur le bouton 'Ajouter au panier'</li>
                  <li>Cliquez sur 'commander'</li>
                  <li>Précisez l'adresse de livraison</li>
                  <li>Cliquez sur 'Passer commande'.</li>
                </ul>
                <p><strong>CONSULTEZ LA FICHE PRODUIT</strong></p>
                <p>En cliquant sur le nom du produit, vous arrivez sur une fiche descriptive. Vous y trouverez une photo, un descriptif, une fiche technique, la liste des accessoires compatibles,</p>
                <p><strong>ATTENDEZ LA PRÉPARATION DE VOTRE COLIS</strong></p>
                <p>Si le produit que vous avez Commandé n'est pas en stock, le site marchand le commande chez son fournisseur. Sinon, il prépare immédiatement votre colis pour l’expédition dans l’entrepôt où sont stockés tous les produits.</p>
                <p><strong>SURVEILLEZ LE TRANSPORT</strong></p>
                <p>La plupart des expéditions sont réalisées par AMANA. Certains sites vous communiquent alors un numéro de suivi et un lien vers une rubrique du site AMANA vous permettant de savoir où se trouve votre colis.</p>
                <h2>COOKIES</h2>
                <p>L'acceptation des cookies n'est pas nécessaire pour visiter notre site Web. Cependant, pour assurer la bonne utilisation du site Web les cookies sont nécessaires. Les cookies sont des fichiers texte qui servent à identifier votre ordinateur lorsque vous visitez certaines pages du site Web. Ils sont stockés par votre navigateur Internet sur le disque dur de votre ordinateur. Nous utilisons des cookies pour retenir votre adresse IP et vous permettre ainsi d’économiser du temps lorsque vous revenez sur notre site Web. Votre navigateur peut être configuré pour ne pas accepter les cookies, mais cela peut restreindre votre utilisation du site Web. Si vous voulez en savoir plus sur les cookies, vous pouvez consulter le site <a href="http://www.allaboutcookies.org/" aria-describedby="a11y-external-message">http://www.allaboutcookies.org</a>.</p>
                <p></p>
                <p>{siteName}utilise les services de Google Analytics et facebook et adroll à des fins de marketing et d'optimisation des données personnelles</p>
                <a href="http://www.khidmat-almostahlik.ma/portal/sites/default/files/fichier%20Page/Mod%C3%A8le%20CGV%20Ar.pdf" target="_blank">Les conditions générales de vente en arabe</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

export default Conditions_generales_de_vente
interface ShippingInfoBoxPropos {
    free_shipping: number

}

export default function ShippingInfoBox({ free_shipping }: ShippingInfoBoxPropos) {
    return (
        <ul className="info-liv">
            <li>Satisfait Ou Remboursé</li>
            <li>Paiement à la livraison</li>
            {
                free_shipping === 1
                ?
                <li><b>livraison gratuite partout au Maroc</b></li>
                :
                <>
                <li> Frais de livraison à Casablanca: 19 Dh </ li>
                <li> Frais de livraison vers le reste du Maroc: 45Dh </ li>
                </>
            }
            
            

        </ul>
    )
}

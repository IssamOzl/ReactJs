interface ReductionBoxProps {
    product_base_price: number,
    old_price: number
}
export default function ReductionBox({ product_base_price, old_price }: ReductionBoxProps) {
    
    let increase: number = product_base_price - old_price
    increase *= -1
    //console.log("increase",increase);
    const porcent: number = Math.trunc(increase / old_price * 100)
    //console.log("porcent",porcent);

    return (
        <div className="price-disaccount">
            <span>
                Réduction de {porcent}% pour durée limitée
            </span>
        </div>
    )
}

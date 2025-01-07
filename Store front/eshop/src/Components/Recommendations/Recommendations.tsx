import { useQuery } from "@tanstack/react-query"
import { FetchData } from "../../Utils/Helpers"
import { product } from "../../Utils/Types"
import { env } from "../../Utils/env"
import ErrorOrLoading from "../UI/Alert/ErrorOrLoading"
import ProductCard from "../ProductCard/ProductCard"
import { memo } from "react"

interface RecommendationsProps {
    slug: string
}

 const Recommendationsmemo = memo( function Recommendations({ slug }: RecommendationsProps) {
    let products: product[] = []
    const { data, isLoading, error } = useQuery({
        queryFn: () => FetchData<product>(`${env.VITE_API_URL + env.VITE_ROUTE_PRODUCT_RANDOM}?slug=${slug}`),
        queryKey: ["random_products"]
    })

    console.log("Recomm",data);

    data && (products = data as product[])

    return (
        <div className="random_prods row">
            <h3 id="like_tit">Recommendations</h3>
            <ErrorOrLoading error={error} isLoading={isLoading} />

            {
                products.length > 0
                &&
                products.map(prod => {
                    return (
                        <ProductCard key={prod.product_id} product={prod} />
                    )
                })
            }
        </div>

    )
})

export default Recommendationsmemo;
import { useInfiniteQuery } from "@tanstack/react-query"
import { categories, product } from "../../Utils/Types"
import ProductCard from "../ProductCard/ProductCard"
import { FetchData } from "../../Utils/Helpers"
import { env } from "../../Utils/env"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"  
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import ErrorOrLoading from "../UI/Alert/ErrorOrLoading"

type LatestProductsPropos = {
  category?:categories | null
}

export default function LatestProducts({category=null}:LatestProductsPropos) {
  
  let endpoint  =  env.VITE_API_URL
  if(category != null){
    endpoint += env.VITE_ROUTE_ACTIVE_PRODUCTS_BY_CATEGORY +`?category_id=${category?.category_id}&limit=12`
  }else{
    endpoint +=  env.VITE_ROUTE_PRODUCTS_ACTIVE +"?limit=12"
  }

  const { ref, inView } = useInView({
    /* Optional options */
    initialInView: true,
  });


  const { data, fetchNextPage, error, status, isFetchingNextPage, hasNextPage } = useInfiniteQuery({

    queryFn: ({ pageParam }) => FetchData<product>(`${endpoint}&offset=${pageParam}`),
    queryKey: ["prods_"+category?.category_id],
    initialPageParam: 0,
    getNextPageParam: (lastPage, lastPageParam, allPages) => {
      console.log("lastPage",lastPage);
      console.log("lastPageParam",lastPageParam);
      console.log("allPages",allPages);
      if (lastPage.length >=12) return lastPageParam.length  * lastPage.length +1

      else return undefined

    },
  })

  // useEffect(() => {
  //   if (inView && hasNextPage) fetchNextPage()
  // }, [inView, hasNextPage])

  return (
    <div className="container">
    

      <div className="flex-row row">
        <div className="col-md-12 category_title">
        <center>
            {
              category === null
              ?
              <>
                <span>Nouveau produits</span> <p>les produits les plus recents</p>  
              </>
              :
              <span>{category?.category_name}</span>
            }
            </center>
        </div>
        {
          
          data?.pages.map(products => products.map(product =><ProductCard key={product.product_id} product={product} />))

        }
        <div className="col-md-12 justify-content-md-center">
          <center>
            {
              status === "pending" || isFetchingNextPage && <ErrorOrLoading isLoading={true} error={null} showErrorBoundary={false}/>
            }
            {
              status === "error" &&   <ErrorOrLoading isLoading={false} error={error} showErrorBoundary={true}/>
            }
            <button  ref={ref} onClick={() => fetchNextPage()} type="button" className="btn btn-primary my-4 loading-title" disabled={!hasNextPage || isFetchingNextPage }>{hasNextPage? "Charger plus de produits":"Tous les produits sont chargés"}</button>

          </center>
        </div>
      </div>
    </div>

  )
}

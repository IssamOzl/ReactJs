import { useParams } from "react-router-dom"
import LatestProducts from "../Components/LatestProducts/LatestProducts"
import { useQuery } from "@tanstack/react-query"
import { FetchData } from "../Utils/Helpers"
import { categories } from "../Utils/Types"
import { env } from "../Utils/env"
import ErrorOrLoading from "../Components/UI/Alert/ErrorOrLoading"

export default function Category() {
  const { catgory_id } = useParams()
  const id: number =  Number(catgory_id) 

  const { data, isLoading, error } = useQuery({
    queryFn: () => FetchData<categories>(`${env.VITE_API_URL}${env.VITE_ROUTE_CATEGORIES_DETAILS}?id=${id}`),
    queryKey: ["Category_details_" + id]
  }) 
 

  return (
    <>
      {/* <ErrorOrLoading error={error} isLoading={isLoading} /> */}
      <LatestProducts category={data as unknown as categories} />
    </>
  )
}

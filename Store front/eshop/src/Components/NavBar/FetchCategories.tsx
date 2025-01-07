import { env } from "../../Utils/env"
import { categories } from "../../Utils/Types"

export async function FetchCategoriesData(): Promise<categories[]>{ 
    let catgs : categories[] = []
    const headers = {
        "Content-Type": "application/json",  // Specifies the content type
        "x-api-key": env.VITE_API_KEY // Adds an authorization token
    };

    try {
        await fetch(env.VITE_API_URL+env.VITE_ROUTE_CATEGORIES,{
            headers : headers,
            method:"GET"
        })
        .then(res=>res.json())
        .then(data=>catgs = data)
    } catch (error:unknown) {
        error instanceof Error 
        ?
        console.log(error)
        :
        console.log(String(error));
    }
    
    return catgs;


} 
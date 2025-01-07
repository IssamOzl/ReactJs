import React from 'react'
import { product } from '../../Utils/Types';
import { env } from '../../Utils/env';

 
export async function FetchLatestProducts(): Promise<product[]>{ 
    let products : product[] = []
    const headers = {
        "Content-Type": "application/json",  // Specifies the content type
        "x-api-key": env.VITE_API_KEY // Adds an authorization token
    };

    try {
        await fetch(env.VITE_API_URL+env.VITE_ROUTE_PRODUCTS_LATEST_12,{
            headers : headers,
            method:"GET"
        })
        .then(res=>{console.log("RES=>",res); return res.json()})
        .then(data=>products = data)
    } catch (error:unknown) {
        error instanceof Error 
        ?
        console.log("Error handler =>",error)
        :
        console.log("Error handler =>",String(error));
    }
    
    return products;


} 
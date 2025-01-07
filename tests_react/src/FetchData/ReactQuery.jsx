import React from "react";
import { env } from "./utils/env";

export default function ReactQuery(){

    

    const fetchData = async()=>{
        let posts = [];
        await fetch(env.REACT_APP_API_URL+"/posts")
        .then(res=>res.json())
        .then(data=>posts= data)

        console.log(posts)
        return posts
    }
    
    fetchData()

    return(<h1>Hell world</h1>)
}
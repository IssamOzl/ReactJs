import React, { useEffect, useRef, useState } from "react";
import {env} from "./utils/env"

export default function DataFetch(){
    // State to hold the posts
    const [posts,setPosts] = useState([])
    // State to hold the errors while fetching
    const [errors,setErrors] = useState( )
    // State to hold the loading state while fetching
    const [loading,setLoading] = useState(true)
    // page
    const [page,setPage] = useState(0)

    const abortControllerRef = useRef(null)

    // function to fetch the data from the url
    async function  fetchUrl(pageNum){
        if(abortControllerRef.current){
            abortControllerRef.current.abort();
            console.log("aborted")
        }
        abortControllerRef.current = new AbortController()

        const mySignal =   abortControllerRef.current.signal 
        console.log(abortControllerRef.current)
       // const signal = abortControllerRef.current.signal;
        setLoading(true)

        await fetch(`${env.REACT_APP_API_URL}/posts?page=${pageNum}`,{
            signal:mySignal
        })
        .then(res=> res.json())
        .then(data=>setPosts(data))
        .catch(e=>{ if(e.name !== "AbortError") setErrors(e)})
        .finally(setLoading(false))
    }

    // call the loading of data
    useEffect(()=>{fetchUrl(page)},[page])
    
    return(
        
        <div className="container">
            <h1>Posts</h1>
            <hr/>
            {errors &&  <div className="alert alert-danger" role="alert"><strong>{errors.toString()}</strong> </div> }
            {loading &&  <div className="alert alert-primary" role="alert"><strong>LOADING ...</strong> </div> }

            {posts.length>0 &&<> <button type="button" className="btn btn-primary" onClick={()=>{setPage(page+1)}}>Page {page}</button> <ul> {posts.map(post=><li key={post.id}>{post.title}</li>)}</ul> </>}
            
        </div>
        
    )

}
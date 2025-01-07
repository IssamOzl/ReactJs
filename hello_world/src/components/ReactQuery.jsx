import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
 

export default function ReactQuery(){
    
    //const [posts,setPosts] = useState([])
    const [title,setTitle] = useState()
    const titleRef = useRef()

    const queryClient = useQueryClient()

    const fetchData = async()=>{
        let posts = []
        //await new Promise((resolve)=> setTimeout(resolve,1000))
        await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>posts= data)

        console.log(posts)
        return posts
    }
    // fetch data using fetch query
     const {data ,isLoading} = useQuery({
        queryFn:()=>fetchData(),
        queryKey:["posts"],
     })

     

    const addPost = (title)=>{
        //setPosts(prevPosts=>{
            console.log(title)
            const pst = {
                id:data.length+1,
                userId:10,
                title: title,
                body:"lorem loremloremloremloremloremlorem"
            }
            //const newPosts = [...prevPosts]
            //console.log("prevPosts",prevPosts)
            //console.log("newPosts",newPosts)
            data.push(pst)

            // console.log(newPosts)
           //  setPosts(newPosts)
        //})
    }
    

     // update data using fetch query
     const  {mutateAsync} = useMutation({
        mutationFn:(myTit)=>addPost(myTit),
        // onSuccess:()=>{
        //     console.log("will invalidate")
        //     queryClient.invalidateQueries(["posts"])
        // }
     })

    //  useEffect(()=>{
    //     setPosts(data)
    //  },[data])

     if(isLoading){
        return("loading ...")
     }
     if(data){
        return(
            <>
               <h1>Add posts</h1> 
               <hr/>
               <input type="text" id="postTitle" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
               <button onClick={async ()=>{ await mutateAsync(title).then(setTitle(''))}}>Add</button>
               <br/>
               <h1>Posts list</h1> 
                
                <ul>
                    {
                        data.map(post=><li key={post.id}>{post.title}</li>)
                    }
                </ul>
            </>
        
    )
     }
    
}
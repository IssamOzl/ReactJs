import React, { Suspense } from "react";
import { Await, NavLink, useLoaderData } from "react-router-dom";

export default function Blog(){
    const {posts} = useLoaderData()
    console.log(posts)
    return(
        <>
            <h1>Mon blog</h1>
            <Suspense fallback={<h6>LOADING ...</h6>}>
                <Await resolve={posts}>
                    {
                        (posts)=><ul>{ 
                                    posts.map(post=><li key={post.id}><NavLink to={post.id}>{post.title}</NavLink></li>)
                        
                        } </ul> 
                    }
                </Await>

            </Suspense>
        </>
    )
}
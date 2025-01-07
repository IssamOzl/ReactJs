import React from "react";
import { createBrowserRouter, defer, Link,NavLink, Outlet, useNavigation, useRouteError } from "react-router-dom";
import { Single } from "./Single";
import Blog from "./Blog";

// export const router = createBrowserRouter([
//     {
//         path:'/',
//         element:
//             <div>
//                 Home page
//                 <nav>
//                     <NavLink to="/">Home</NavLink>
//                     <NavLink to="/blog">Blog</NavLink>
//                     <NavLink to="/contact">contact</NavLink>
//                 </nav>
//             </div>
//     },{
//         path:'/blog',
//         element:<div>blog page
//         <nav>
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/blog">Blog</NavLink>
//             <NavLink to="/contact">contact</NavLink>
//         </nav></div>
//     },{
//         path:'/contact',
//         element:<div>contact page
//         <nav>
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/blog">Blog</NavLink>
//             <NavLink to="/contact">contact</NavLink>
//         </nav></div>
//     },{
//         path:"/blog/:id",
//         element:<Single/>
//     }
// ])

 export const router = createBrowserRouter([
    {
        path:"/",
        //element:<div><Outlet/></div>,
        element:<Root/>,
        errorElement:<OnError/>,
        children:[
            {
                path:'blog',
                element:
                <div className="row">
                    <aside className="col-3">
                        <h2>Sidebar</h2>
                    </aside>
                    <div className="col-9">
                        <Outlet/>
                    </div>
                </div>,
                children:[
                    {
                        path:"",
                        element:<Blog/>,
                        //loader:()=>fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
                        loader:()=>{
                            const posts = fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
                                            .then(data => data.json())
                            return defer({
                                posts
                            })
                        }
                    }
                ]
            },
            {
                path:'contact',
                element:<div>Contact</div>
            }
        ]
    }
 ])

 function OnError(){
    const err = useRouteError()
    console.log(err)
    return(<>
        <h1>Error occured</h1>
        {err && <p>{err.data.toString()}</p>}
    </>)
 }

 function Root(){
    const {state} = useNavigation()
    return(
        <>
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            <div className="container my-4" >
            {state === "loading" && <h3>Loading ...</h3>}
                <Outlet/>
            </div>
        </header>
        </>
    )
 }
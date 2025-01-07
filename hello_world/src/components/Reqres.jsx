import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

const liStyle={
    minHeight: "50px",
    backgroundColor: "blue",
    color: "white",
    fontSize: "20px",
    textAlign: "center",
    padding: "10px",
    verticalAlign: "middle",
    margin: "10px",
}
export default function Reqres(){
    const { ref, inView } = useInView({
        /* Optional options */
        initialInView: 1,
      });

    async function dataFetch({pageParam}) {
         
        console.log("propos",pageParam)
        let users;
        await fetch(`https://reqres.in/api/users?page=${pageParam}&per_page=2`)
        .then(res=>res.json())
        .then(data=>users = data)
        return users
    }

    async function dataPost(user) {
        let newUser
        await fetch("https://reqres.in/api/users",{
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        })
        .then(res=>res.json())
        .then(ret=>newUser=ret)
        return newUser
    }

    // ******** USE QUERY ***************
   const queryClient = useQueryClient() 
//    const{data:users,isLoading,error} =  useQuery({
//         queryFn : ()=>dataFetch(),
//         queryKey: ["users"],
//         //staleTime:4000,
//         //refetchInterval:4000
//     })    
    const {data,fetchNextPage,error,status,isFetchingNextPage,hasNextPage} = useInfiniteQuery({
       
        queryFn:dataFetch,
        queryKey: ["users"],
        initialPageParam:1,
        getNextPageParam:(lastPage,allPages,lastPageParam)=>{
            console.log({lastPage,allPages,lastPageParam})
            if(allPages.length > lastPage.total_pages) return undefined
            else return allPages.length+1
             
        },
    })
 console.log(data)
    const {mutateAsync,isPending,isSuccess} = useMutation({
        mutationFn : (user)=> dataPost(user) ,
       
        onSuccess:(newUser)=>{
             // to refetch data
            // console.log("reload data")
            // queryClient.invalidateQueries(["users"])
            queryClient.setQueriesData(["users"],(cachedUsers)=>{
                return ({
                    ...cachedUsers,
                    data:[...cachedUsers.data,newUser]
                })
            })
                 
        },
    })
    useEffect(()=>{
        if(inView && hasNextPage) fetchNextPage()
    },[inView,hasNextPage])
    // ******** END USE QUERY ***************
    return(
        <div>
            <h1>Users</h1>
            <hr/>
            <ul>
                {
                    data?.pages.map(page=>page.data.map(user=><li style={liStyle} key={user.id}>{`${user.first_name} ${user.last_name}`}</li>))
                }
            </ul>
            
            {
                status === "pending" || isFetchingNextPage && <h4>Loading...</h4>
            } 
            {
                status === "error" && <h4>{error.message}</h4>
            } 
            <button ref={ref} onClick={()=>fetchNextPage()} disabled={!hasNextPage}>
            {hasNextPage ? "Load More" : "No more users"}
            </button><br/><br/>
            
            
            <button onClick={async ()=>await mutateAsync({ "first_name": "Issam","last_name": "ouzali",  "job": "leader" })}>Add user</button>
            {/* {
                isPending && <h4>Beign added ...</h4>
            } 
            {
                isSuccess && <h4>Added success.</h4>
            }   */
            
            }
        </div>
    )
}
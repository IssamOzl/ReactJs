import React, { useEffect } from "react";

export default function  UseFetch(url,options={}){
   

    const [state,setState] = React.useState({
        loading:true,
        data:[],
        errors:null
    })
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(myData=>{setState((prevState)=>{return {...prevState,data:myData,loading:false}})})
        .catch(e=>setState((prevState)=>{return {...prevState,errors:e}}))
        .finally(()=>setState((prevState)=>{return {...prevState,loading:false}}))
    },[])
    //console.log(state)
    return {
        loading:state.loading,
        data:state.data,
        errors:state.errors
    }
}
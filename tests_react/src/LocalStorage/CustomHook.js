import React, { useEffect, useState } from "react";

export default function CustomHook()
{
    // local storage
    function setItem(key,value){
        console.log("Set item",{key,value})
        try {
            window.localStorage.setItem(key,JSON.stringify(value))
        } catch (error) {
            console.log( JSON.stringify(error))
        }
    }

    function getItem(key){
        try 
        {
            let item = window.localStorage.getItem(key)
            if(JSON.parse(item)){
                return item
            } else{
                return 0
            }
        
        } 
        catch (error) 
        {
            console.log( JSON.stringify(error))
        }
        
    }

    // end local storage
    let initState = parseInt(getItem("count"))

    const [count,setCount] = useState(initState)
    
    useEffect(()=>{setItem("count",count)},[count])
    

    const handleCick = ()=>{
        setCount((oldState)=>oldState+1)
    }
 return({count,handleCick})   
}
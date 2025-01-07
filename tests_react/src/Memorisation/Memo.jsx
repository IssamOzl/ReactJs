import React, { useState,memo, useMemo, useCallback } from "react";

const MemoInfo = memo(function Info({onClick}){
    console.log("Info","render")

    return(
        <div className="alert alert-info" onClick={onClick}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sed aliquam autem sequi explicabo atque reprehenderit, natus velit iure voluptatibus consectetur doloribus facere laboriosam veritatis iusto provident! Sunt, eum natus?
        </div>
    )
})

export default function Memo(){

    const [name,setName] = useState("test")
    console.log("Memo","render")

    function handleInput(e){
        setName(()=>{return e.target.value})
    }

    const handleClick = useCallback(()=>{
            console.log("hello")
    },[])
    
    return (
        <div className="container my-2 vstack gap-2">
            <div>
                <input type="text" value={name} onChange={handleInput}/>
                <p>
                    {name.toString()}
                </p>
            </div>
            <MemoInfo onClick={handleClick}/>
        </div>
    ) 
}
import React, { useState } from "react";
import CustomHook from "./CustomHook";

export default function Storage(){
    

    const {count,handleCick} = CustomHook()
    console.log("count",count)

    return(
        <div className="container">
            <div>
                <span>{count}</span>
            </div>
            <button onClick={handleCick} type="button" className="btn btn-primary">
                Increment
            </button>
        </div>
    )
}
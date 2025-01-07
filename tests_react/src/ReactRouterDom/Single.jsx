import React from "react";
import { useParams } from "react-router-dom";

export function Single(){
    const {id}= useParams()
    console.log(useParams())
    return(
        <div>
            Article numero {id}
        </div>
    )
}
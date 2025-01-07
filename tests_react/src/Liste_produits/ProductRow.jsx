import React from "react";

export default function ProductRow({prod}){
    const style = prod.stock > 0 ? undefined : {color:"red"}
    return(
    <tr>
        <td style={style}>{prod.name}</td>
        <td>{prod.price}</td>
      </tr> 
    )
}
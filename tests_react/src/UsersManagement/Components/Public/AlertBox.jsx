import React from "react";

export function AlertBox({message="Alert",err=false}){
     let  alertType = "alert  alert-"
     err ? alertType +="danger" : alertType +="success"
        
    console.log(alertType)
    return(
       
        <div 
            className={alertType}
            role="alert"
        >
            {message}
        </div>
    )
}
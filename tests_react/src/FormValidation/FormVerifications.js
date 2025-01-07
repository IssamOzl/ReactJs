import React from "react";

export const isEmpty = (value )=>{
    let error;
    value.trim() === "" ? error  = true : error  = false 
    return error
}

export const isChecked = (value)=>{
    return value
}

export const isEMailValid = (value)=>{
    let res;
    res =  value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    console.log(res)
    return res
}
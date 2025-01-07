import React from "react";

export default function UseIncrement(initVal = 0,step=1){
    const [counter,setCounter] = React.useState(initVal)

    const increment = ()=>{setCounter(prevState=>prevState+1)}
    const decrement = ()=>{setCounter(prevState=>prevState>0 ?  prevState-1 : 0)}

    return[counter,increment,decrement]
}
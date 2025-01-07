import React, { useRef, useState } from "react"
import Btn from "./Btn"
// propos type
type prsonProps =
{
    name:string,
    age:number
} 
export default function Person({name,age}:prsonProps){
    // type for uses state -> boolean
    const [show,setShow] = useState<boolean>(false)
    const [bio,setBio] = useState<string | null>(null)

    // type useRef
    const btnRef = useRef<HTMLButtonElement>(null)
    
    // type for useContext -> need to look for it
    // Omit and Record also
    // as const also
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setBio(e.target.value)
    }

    return(
        <>
        <Btn
            style={{color:"red"}}
            //text={show? "hide" : "show"}
            onCLick={()=>setShow(prevShow=>!prevShow)}
        >
            {show? "hide" : "show"}
        </Btn>

        {/* <button onClick={()=>setShow(prevShow=>!prevShow)}>
            {show? "hide" : "show"}
        </button> */}
        {
            show &&
            <div>
                <h1>Person component</h1>
                <p>This example is for showing how to define propos</p>
                <p>Name : {name}</p>
                <p>Age : {age}</p>
                <input type="text" onChange={handleChange}/>
                <p>
                    {bio}
                </p>
            </div>
        }
            
        </>
    
    )
}
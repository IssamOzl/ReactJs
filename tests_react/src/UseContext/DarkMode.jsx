import React, { createContext, useContext, useState } from "react";

// export const DarkModeContext = createContext({
//     mode:"light",
//     toggleMode:()=>{}
// })

// export function DarkModeContextProvider({children}){
//     const [mode,setMode] =  useState("light")

//     function toggleMode(){
//         setMode((prevState)=> prevState ==="light" ?"dark":"light")
//     }
//     return(
//         <DarkModeContext.Provider value={{mode,toggleMode}}>
//             {children}
//         </DarkModeContext.Provider>
//     )
// }
export const DarkModeContext = createContext({
    mode:"light",
    toggleMode:()=>{}
})

export function DarkModeContextProvider({children}){
    const[mode,setModeState] = useState("light")

    function toggleMode(){
        setModeState((prevSate)=>prevSate === "light" ? "dark" :"light")
    }

    return(
        <DarkModeContext.Provider value={{mode,toggleMode}}>
            {children}
        </DarkModeContext.Provider>
    )

}
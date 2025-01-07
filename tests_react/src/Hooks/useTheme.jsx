import React, { createContext, useState } from "react"

export  const ThemeContext = createContext({
    theme:"light",
    toggleTheme:()=>{}
})


   
export     function ThemeContextProvider({children}){
    const [themeState,setThemeState] = useState("light")

        function toggleTheme(e){
            e.preventDefault()
            setThemeState(prevSate=>prevSate==="light" ? "dark" :"light")
        }
        return(
            <ThemeContext.Provider value={{
                themeState,
                toggleTheme
            }}>
                {children}
            </ThemeContext.Provider>
        )
    }
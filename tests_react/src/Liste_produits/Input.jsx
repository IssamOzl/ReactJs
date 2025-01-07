import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Checkbox from "./Checkbox";
import { ThemeContextProvider } from "../Hooks/useTheme";

export default function Input({data,handler}){
    
    return(
        <ThemeContextProvider>
            <form>
            <div className="form-group">
                    <input value={data.searchKey} onChange={handler}  id="searchKey" className="form-control" type="text" placeholder="Rechercher"/>
                </div>
                <Checkbox data={data} handler={handler}/>
            </form>
        </ThemeContextProvider>
    )
   
}
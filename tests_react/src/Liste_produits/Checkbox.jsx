import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {ThemeContext} from "../Hooks/useTheme"
import { Button } from "bootstrap";

export default function Checkbox({data,handler}){
  const {themeState,toggleTheme} = useContext(ThemeContext)
    return(
      <>
      <button onClick={toggleTheme}>{themeState}</button>
        <div className="form-group form-check">
          
        <input checked={data.onlyInStock} onChange={handler} type="checkbox" className="form-check-input" id="onlyInStock" />
        <label className="form-check-label" htmlFor="onlyInStock">N'afficher que les produits en stock</label>
      </div>
      </>
    )
   
}
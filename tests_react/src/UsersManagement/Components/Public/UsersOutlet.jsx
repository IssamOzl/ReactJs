import React from "react";
import { NavLink, Outlet, useNavigation } from "react-router-dom";



export function UsersOutlet(){
    const {state} = useNavigation()
    return(
        <>
       
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/users">Users liste</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/users/add">Add user</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </header>    
        <div className="container my-4" >
            {state === "loading" && <h3>Loading ...</h3>}
                <Outlet/>
        </div>

        </>
    )
}
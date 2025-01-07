import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom'

function NavLinks(){
  return(
    <>
    <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/aboutus">About</NavLink>
        <NavLink to="/post/1">POst 1</NavLink>
        </>
  )
}
export default function Layout() {
  return (
    
    <header>
    <nav>
        <NavLinks/>
    </nav>
    <div className="container my-4" >
    {/*state === "loading" && <h3>Loading ...</h3>*/}
        <Outlet/>
    </div>
    </header>
  )
}

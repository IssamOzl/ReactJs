import { categories, params } from "../../Utils/Types"
import Header from "../Header/Header"
import { useQuery } from "@tanstack/react-query"
import "./NavBar.css"
import { FetchData } from "../../Utils/Helpers";
import { env } from "../../Utils/env";
import { memo, useContext, useEffect } from "react";
import ErrorOrLoading from "../UI/Alert/ErrorOrLoading";
import { CartCountContext } from "../../Context/CartCountCntext";
import { Link, NavLink } from "react-router-dom";
import useLocalStorage from "../../Hooks/useLocalStorage";


 function NavBar() {
  const { cartCount } = useContext(CartCountContext)
  //const queryClient = useQueryClient()
  const { data, isLoading, error } = useQuery({
    queryFn: () => FetchData<categories>(env.VITE_API_URL + env.VITE_ROUTE_CATEGORIES),
    queryKey: ["categories"],
    //staleTime:4000,
    //refetchInterval:4000
  })
 // trying to get local storage if already stored
 const { siteParams } = useContext(CartCountContext)
 
  return (
    <>
      <Header />
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid">
          <Link to="/cart" type="button" className="btn btn-primary" style={{
            height: "50px",
            width: "50px",
            borderRadius: "50px",
            background: "white",
            color: "black",
            borderColor: "black",
            marginLeft: "10px",
            padding: "9px",
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"></path>
            </svg>
            <span className="badge badge-notify my-cart-badge" id="cart-container" style={{ top: "-50px", right: "-17px" }}>
              {cartCount}
            </span>
          </Link>

          {
            siteParams
            &&
            <a className="navbar-brands">
              <img src={env.VITE_IMAGES_FOLDER + siteParams?.logo_link} className="logo img-responsive" />
            </a>
          }
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item" key="0">
                <NavLink className="nav-link" to="/">Acceuil</NavLink>
              </li>
              <ErrorOrLoading error={error} isLoading={isLoading} />
              {

                data?.map((categ) => {
                  return <li className="nav-item" key={categ?.category_id}><NavLink className="nav-link" to={`/Category/${categ?.category_id}`}>{String(categ?.category_name)}</NavLink></li>
                })
              }
            </ul>

          </div>
        </div>
      </nav>

    </>
  )
}
export default memo(NavBar)
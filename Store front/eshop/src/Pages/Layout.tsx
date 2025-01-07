import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import { ToastContainer } from "react-toastify";

export default function Layout() {


  return (
    <>
        <NavBar />
            <ToastContainer 
            position="bottom-center"
            autoClose={3000}
            />
            <Outlet/>
        <Footer/>
    </>
  )
}

import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundback from "../Components/ErrorBoundaryFallback/ErrorBoundback";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../Utils/ScrollToTop";

export default function Layout() {
  const navigate = useNavigate()
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundback} onReset={() => navigate("/")}>
      <ScrollToTop/>
      <NavBar />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
      />
      <Outlet />
      <Footer />
    </ErrorBoundary>
  )
}

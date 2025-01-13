import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundback from "../Components/ErrorBoundaryFallback/ErrorBoundback";
 import  {useNavigate}  from "react-router-dom";
import { env } from "../Utils/env";
import { params } from "../Utils/Types";
import useLocalStorage from "../Hooks/useLocalStorage";
import { useQuery } from "@tanstack/react-query";
import { FetchData } from "../Utils/Helpers";
export default function Layout() {
  const navigate = useNavigate()

  let siteParams: params | undefined = undefined

  const { setValue, getValue } = useLocalStorage()
  const { isOk, value } = getValue(env.VITE_PARAMS_LS)

  // trying to get local storage if already stored
  if (isOk && value != "") {
      const params = JSON.parse(value) as params
      siteParams = params

      // if not stored yet    
  } else {
      const { data, isSuccess} = useQuery({
          queryFn: () => FetchData<params>((`${env.VITE_API_URL + env.VITE_ROUTE_PARAMS}`)),
          queryKey: [env.VITE_PARAMS_LS]
      })

      if (isSuccess) {
          const params = data as unknown as params
          if (setValue(env.VITE_PARAMS_LS, JSON.stringify(data))) {
              siteParams = params
          }
      }

  }

  
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundback} onReset={()=>navigate("/")}>
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

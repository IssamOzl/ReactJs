import Alert, { alertType } from './Alert'
import { useErrorBoundary } from "react-error-boundary";

interface ErrorOrLoadingProps {
    isLoading: boolean,
    error: Error | null,
    showErrorBoundary:boolean
}
export default function ErrorOrLoading({ isLoading, error,showErrorBoundary=true }: ErrorOrLoadingProps) {
    const { showBoundary } = useErrorBoundary();
    const erroMessage = error ? error.message : "Une erreur inconnue s'est produite !"

   if  (!isLoading && error && showErrorBoundary){
    showBoundary(error)
   } 
    return (
        <>
             {error && <Alert text={erroMessage} type={alertType.danger} />} 
 
            {isLoading && <Alert text="Chargement en cours ..." type={alertType.primary} />}
        </>
    )
}

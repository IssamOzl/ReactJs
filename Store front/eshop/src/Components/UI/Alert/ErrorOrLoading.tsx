import Alert, { alertType } from './Alert'
import { useErrorBoundary } from "react-error-boundary";

interface ErrorOrLoadingProps {
    isLoading: boolean,
    error: Error | null
}
export default function ErrorOrLoading({ isLoading, error }: ErrorOrLoadingProps) {
    const { showBoundary } = useErrorBoundary();

   if  (!isLoading && error){
    showBoundary(error)
   } 
    return (
        <>
             {error && <Alert text={error.message} type={alertType.danger} />} 
 
            {isLoading && <Alert text="Chargement en cours ..." type={alertType.primary} />}
        </>
    )
}

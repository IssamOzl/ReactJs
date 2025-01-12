import { FallbackProps } from "react-error-boundary";
export default function ErrorBoundback({error,resetErrorBoundary}:FallbackProps) {

   return (
    <>
    <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
            <h1 className="display-1 fw-bold">ERREUR</h1>
            <p className="fs-3"> <span className="text-danger">Opps!</span> Quelque chose s'est mal passé.</p>
            <a onClick={ resetErrorBoundary}  className="btn btn-primary loading-title">Vers l'acceuil</a>
            <h4 style={{marginTop:"15px"}}>Details d'erreur :</h4>
            <p className="lead">
                {error.message}
            </p>
        </div>
    </div>
    </>
  )
}

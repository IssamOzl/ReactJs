import React from 'react'
import Alert, { alertType } from './Alert'

interface ErrorOrLoadingProps {
    isLoading: boolean,
    error: Error | null
}
export default function ErrorOrLoading({ isLoading, error }: ErrorOrLoadingProps) {
    return (
        <>
            {error && <Alert text={error.message} type={alertType.danger} />}
            {isLoading && <Alert text="Chargement en cours ..." type={alertType.primary} />}
        </>
    )
}

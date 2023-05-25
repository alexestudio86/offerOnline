import { useRouteError } from "react-router-dom";


export function NotFound ( ){

    const error = useRouteError()

    return (
        <>
            <h1>Error al cargar el sitio: {error}</h1>
        </>
    )
}
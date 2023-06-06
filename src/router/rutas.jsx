import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { NotFound } from "../components/NotFound";
import { App } from "../App";
import { getHomeProducts } from '../context/jsonCalls';


export const rutas = createBrowserRouter([
    {
        element:    <Layout />,
        path:       '/',
        errorElement:   <NotFound />,
        children: [
            {
                index:      true,
                element:    <App />,
                loader:     getHomeProducts
            }
        ]
    }
], {
    basename: '/offerOnline/'
})
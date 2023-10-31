import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { NotFound } from "../components/NotFound";
import { Homeview } from "../views/Homeview";
    import { getHomeProducts } from '../context/jsonCalls';
import { Productsview } from '../views/Productsview'
import { Productview } from "../views/Productview";
    import { getProduct } from "../context/jsonCalls";


export const rutas = createBrowserRouter([
    {
        element:    <Layout />,
        path:       '/',
        errorElement:   <NotFound />,
        children: [
            {
                index:      true,
                element:    <Homeview />,
                loader:     getHomeProducts
            },{
                path:       'products',
                children: [
                    {
                        path:       '',
                        element:    <Productsview />,
                    },
                    {
                        path:       ':id',
                        element:   <Productview />,
                        loader:     getProduct
                    }
                ]
            }
        ]
    }
], {
    basename: '/offerOnline'
})
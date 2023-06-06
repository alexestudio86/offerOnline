import { useLoaderData } from "react-router-dom";


export function Aside ( ) {
    const { posts } = useLoaderData();
    const items = posts.items;
    return (
        <div className="bg-white p-1">
            <h1>Productos Populares</h1>
            { items ? items.map( (item, index) =>(
                <div className="row" key={index}>
                    <div className="col-md-5">
                        { item.gallery.length > 0 ?
                            <img className="w-100" src={ item.gallery[0].url } alt={ item.title } />
                            :
                            <p>No hay imágenes</p>
                        }
                    </div>
                    <div className="col-md-7">
                        <h1 className="text text-uppercase fs-1">
                            <a className="link fs-3" href="/">{ item.title }</a>
                        </h1>
                        <p className="fs-6">{ item.description.summary }</p>
                    </div>
                </div>
            ) ) :
                <p>No se encontraron productos</p>
            }
        </div>
    )
}
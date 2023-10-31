import { useLoaderData } from "react-router-dom";
import { SearchForm } from "./SearchForm"


export function Aside ( ) {

    //const { posts } = useLoaderData();
    //const items = posts.items;

    return (
        <div className="bg-white">
            <SearchForm />
            {/*
                <h1 className="bg-info p-2 fs-3 text-uppercase text-white">Productos Populares</h1>
                { items ? items.map( (item, index) =>(
                    <div className="bg-white p-1" key={index}>
                        <div className="row m-0 py-1 row border-bottom">
                            <div className="col-md-5">
                                { item.gallery.length > 0 ?
                                    <img className="w-100" src={ item.gallery[0].url } alt={ item.title } />
                                    :
                                    <p>No hay imágenes</p>
                                }
                            </div>
                            <div className="col-md-7">
                                <h1 className="text text-uppercase fs-1">
                                    <a className="link-info fs-5 fw-bold" href="/">{ item.title }</a>
                                </h1>
                                <p className="fs-6">{ item.description.summary }</p>
                            </div>
                        </div>
                    </div>
                ) ) :
                    <p>No se encontraron productos</p>
                }
            */}
        </div>
    )
}
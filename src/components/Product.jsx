import { useLoaderData } from "react-router-dom";


export function Products ( ){

    const { posts } = useLoaderData();
    const items = posts.items;

    return (
        <main>
            { items ? items.map( (item, index) =>(
                <article className="pb-2" key={index}>
                    <div className="bg-white">
                        <header>
                            <h1 className="text text-uppercase fs-1">
                                <a className="link" href="/">{ item.title }</a>
                            </h1>
                            <div className="border-top border-bottom border-white">
                                <time className="p-2">{ item.creation }</time>
                                <cite className="p-2">{ item.author }</cite>
                                { item.labels ? item.labels.map( (label, idx) => (
                                    <span key={idx}>{ label }</span>
                                ) ) :
                                    <span>No hay Labels</span>
                                }
                            </div>
                        </header>
                        <div>
                            { item.gallery.length > 0 ?
                                <img className="w-100" src={ item.gallery[0].url } alt={ item.title } />
                                :
                                <p>No hay imágenes</p>
                            }
                        </div>
                        <details>
                            <summary></summary>
                            <p></p>
                        </details>
                        <footer></footer>
                    </div>
                </article>
            ) ) :
                <p>No se encontraron productos</p>
            }
        </main>
    )
}
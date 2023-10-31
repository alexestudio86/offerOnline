export function SearchForm () {
    return(
        <>
            <h1 className="bg-info text-uppercase text-white fs-3 p-2">Buscar Producto</h1>
            <form className="row p-1">
                <div className="col-md-9">
                    <input className="form-control w-100" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary w-100">Buscar</button>
                </div>
            </form>
        </>
    )
}
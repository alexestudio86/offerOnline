import { Product } from "../components/Product";
import { Aside } from "../components/Aside";


export function Productview () {
    return (
        <div className="row py-4">
            <div className="col-md-8 p-1">
                <div className="bg-white p-2">
                    <Product />
                </div>
            </div>
            <div className="col-md-4 p-1">
                <Aside />
            </div>
        </div>
    )
}
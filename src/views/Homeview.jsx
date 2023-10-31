import { Header } from "../components/Header";
import { Products } from "../components/Products";
import { Aside } from "../components/Aside";


export function Homeview (){
    return (
        <>
            <Header />
            <div className="row py-4">
                <div className="col-md-8">
                    <Products />
                </div>
                <div className="col-md-4">
                    <Aside />
                </div>
            </div>
        </>
    )
}
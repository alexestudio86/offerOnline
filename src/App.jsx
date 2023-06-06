import { Products } from "./components/Products";
import { Aside } from "./components/Aside";


export function App() {
  return (
    <div className="row">
      <div className="col-md-8">
        <Products />
      </div>
      <div className="col-md-4">
        <Aside />
      </div>
    </div>
  )
}
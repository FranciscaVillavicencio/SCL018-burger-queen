import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Firstview from "./View/Firstview";
import Ordersview from "./View/Vieworders/Ordersview";
import Products from "./View/componentes/Products";
import ViewProducts from "./View/Vieworders/ViewProducts";
import Viewdetailorder from "./View/Vieworders/Viewdetailorder";
//import CarritoCompras from "./View/componentes/CarritoCompras";.
import CarroCompras from "./View/componentes/CarroCompras";
import totebagJson from "./totebag.json";

const App = () => {
  const data = totebagJson;
  

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Firstview />} />
          <Route path="/Firstview" element={<Firstview />} />
          <Route path="/OrdersView" element={<Ordersview />} />
          <Route path="/ViewProducts" element={<ViewProducts />} />
          <Route path="/Products" element={<Products data = {data}/>} />
          <Route path="/Viewdetailorder" element={<Viewdetailorder />} />
          <Route path="/CarroCompras" element={<CarroCompras />} />
        </Routes>
      </Router>
      
    </div>
  );
};

export default App;

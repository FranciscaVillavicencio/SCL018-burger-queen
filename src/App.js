
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Firstview from './View/Firstview';
import Ordersview from './View/Vieworders/Ordersview';
import ViewProducts from './View/Vieworders/ViewProducts';
import Viewdetailorder from './View/Vieworders/Viewdetailorder';



const App = () => {
  return (
    <div className= "container">

   <Router>
        <Routes>
        <Route path="" element={<Firstview/>} />
        <Route path="Firstview" element={<Firstview/>} />
        <Route path="OrdersView" element={<Ordersview/>} />
        <Route path="ViewProducts" element={<ViewProducts/>} />
        <Route path="Viewdetailorder" element={<Viewdetailorder/>} />
        </Routes>
   </Router>
       
    </div>

  )
  
}

export default App


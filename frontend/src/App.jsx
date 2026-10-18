import Homepage from "./pages/Homepage"
import AllProducts from "./pages/AllProducts"
import CreateProduct from "./pages/CreateProduct"
import EditProduct from "./pages/EditProduct"
import ProductDetails from "./pages/ProductDetails"
import LowStock from "./pages/LowStock"
import Statistics from "./pages/Statistics"
import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/products" element={<AllProducts/>}/>
        <Route path="/products/create" element={<CreateProduct/>}/>
        <Route path="/products/:productId" element={<ProductDetails/>}/>
        <Route path="/products/:productId/edit" element={<EditProduct/>}/>
        <Route path="/products/low-stock" element={<LowStock/>}/>
        <Route path="/products/statistics" element={<Statistics/>}/>
      </Routes>
    </div>
  )
}

export default App

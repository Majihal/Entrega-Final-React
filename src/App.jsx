import './App.css'
import {Routes, Route} from "react-router-dom"


// Pages
import Home from './Pages/Home'
import Contacto from './Pages/Contacto'
import Categorias from './Pages/Categorias'
import ProductsView from './Pages/ProductsView'
import ProductList from './Pages/ProductList'
import Checkout from './Pages/Checkout'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>   
      <Route path='/categorias' element={<Categorias/>}/>
      <Route path='/categorias/:categoriaSeleccionada/:id' element={<ProductsView/>}/>
      <Route path='/categorias/:categoriaSeleccionada' element={<ProductList/>}/>
      <Route path='/contacto' element={<Contacto/>}/>  
      <Route path='/Checkout' element={<Checkout/>}/>  
    </Routes>
  )
}

export default App

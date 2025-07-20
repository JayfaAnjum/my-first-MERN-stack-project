
import Home from './pages/home.jsx';
import Demo from './pages/demo.jsx';
import CV from './pages/cv.jsx';
import Cart from './pages/cart.jsx';
import ProductDetails from './pages/productDetails.jsx';
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Product from './pages/product.jsx';
import { useState } from "react";



function App() {
  const [cartItems,setCartItems]=useState([]);
  return (
    <>
      
      


      <BrowserRouter>
      <Routes>
        <Route path='/products' element={<Product/>}>
        
        </Route>
         <Route path='/cv' element={<CV/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/demo' element={<Demo/>}></Route>
             <Route path='/product/:id' element={<ProductDetails cartItems={cartItems}  setCartItems={setCartItems}/>}></Route> 
             <Route path='/cart' element={<Cart cartItems={cartItems}  setCartItems={setCartItems}/>}></Route> 
            

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

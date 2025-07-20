import { useParams, Link } from 'react-router-dom';
import {useState,useEffect} from 'react';

export default function ProductDetails({cartItems,setCartItems}) {

  const [product1,setProduct1]=useState({});
  const { id } = useParams();
const [qty,setQty]=useState(0);


  



   useEffect(() => {
      const fetchProduct = async () => {
        try {
          const res = await fetch(
            `${import.meta.env.VITE_REACT_APP_URL}/product/${id}`
          );
          const data = await res.json();
          setProduct1(data); 
          
         
        } catch (error) {
          console.log("Data fetching failed", error);
        }
      };
  
      fetchProduct();
    }, [id]); 
  


  const addcart = () => {
  const newItem = {
    product: product1,
    quantity: qty,
  };

  setCartItems((previous) => [...previous, newItem]);

  console.log(cartItems);
};



  
  // Sample product data
  const product = {
    id,
    
    
    image: "/pngwing.png",
  };

  const increase=()=>{
    if(parseInt(product1.stock)>qty)
    setQty((previous1)=> previous1+1);
  }

  const decrease=()=>{
    if(qty>0){
    setQty((previous)=>previous-1);
    }
  }

  return (
<>
          <div className="flex justify-between items-center h-20 bg-gradient-to-r from-indigo-800  to-pink-900">
            <div className="flex items-center space-x-3">
              <img src="/one.jpg" alt="Logo" className="rounded-full w-12 h-12 object-cover shadow-md" />
              <span className="text-xl font-bold text-indigo-600 tracking-wide text-white">MiniEcommerce</span>
            </div>
    
            <div className="hidden md:flex space-x-8 text-white text-lg">
              <Link to="/" className=" font-medium hover:text-indigo-600 transition">Home</Link>
              <a href="#" className=" font-medium hover:text-indigo-600 transition">Shop</a>
              <Link to="/products" className=" font-medium hover:text-indigo-600 transition">Categories</Link>
              <Link href="#" className=" font-medium hover:text-indigo-600 transition">Contact</Link>
 <Link className="ml-16 text-yellow-200 text-lg" to="/cart">
        itemadded
      </Link>
              
            </div>
    
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="px-10 py-2 rounded-lg font-semibold bg-white text-pink-900 hover:bg-pink-900 hover:text-white transition shadow-md"
              >
                Login
              </a>
              <button className="md:hidden">
                <i data-lucide="menu" className="w-6 h-6 text-gray-700 hover:text-indigo-600"></i>
              </button>
            </div>
          </div>
    <div className="max-w-6xl mx-auto p-6 mt-10 bg-white rounded-xl ">

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="flex justify-center items-center ">
          <img src={product.image}/>
        </div>

       
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4 text-indigo-800">{product1.name}</h1>
          <p className="text-gray-600 mb-4 text-xl mt-6 ">{product1.desription}</p>
          <div className="flex space-x-5">
          <button className="text-white mb-2 text-2xl  mt-6 cursor-pointer px-4 bg-gradient-to-r from-purple-800  to-pink-900 "  onClick={increase}>+ </button>
          <p className="text-pink-800 mb-2 text-xl mt-6">{qty} </p>
           <button className="text-white mb-2 text-2xl mt-6 cursor-pointer px-4 bg-gradient-to-r from-purple-800  to-pink-900"  onClick={decrease}>- </button>
          <p className="text-pink-800 mb-2 text-xl mt-6">Stock: {product1.stock}</p>
          </div>
          <p className="text-green-600 font-bold text-4xl mb-6">${product1.price}</p>

          <button onClick={addcart} disabled={parseInt(product1.stock) == 0} className={`px-6 py-3 rounded-lg font-semibold transition duration-200
    ${parseInt(product1.stock) == 0 
      ? 'bg-pink-100 cursor-not-allowed text-white' 
      : 'bg-pink-700 text-white hover:bg-pink-800'}
  `}>
            Add to Cart
          </button>

          <Link
            to="/products"
            className="mt-4 text-sm text-blue-600 underline hover:text-blue-800"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

import { useEffect, useState } from "react";
import ProductCard from '../components/productCard.jsx';
import { Link } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_REACT_APP_URL}/product/search?q=${query}&page=${page}&per_page=8`
        );
        const data = await res.json();
        setProducts(data.products); // array of products
        setTotalPages(data.totalPages); // total number of pages
      } catch (error) {
        console.log("Data fetching failed", error);
      }
    };

    fetchProducts();
  }, [query, page]); // ✅ Now depends on query and page

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

      <div className='flex items-center justify-center p-4'>
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => {
            setPage(1); // ✅ Reset page on new search
            setQuery(e.target.value);
          }}
          className="w-full md:w-150 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-800 focus:border-transparent transition-all duration-300"
        />
      </div>

      <section className="mt-5 grid grid-cols-4 gap-4 px-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>

      <div className="flex justify-center mt-6 space-x-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 border rounded ${
              page === i + 1 ? 'bg-pink-700 text-white' : 'bg-white text-pink-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
}


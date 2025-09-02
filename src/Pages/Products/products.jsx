import React, { useEffect, useState } from "react";
import Navbar from "../../Componentes/Navbar/navbar";
import Footer from "../../Componentes/Footer/footer";
import axios from "axios";
import { Link } from "react-router-dom";

const Produts = () => {
  useEffect(() => {
    fetchData();
  }, []);

  let [products, setproducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setproducts(res.data);
    } catch (error) {
      console.log("error", error.massag);
    }
  };

  return (
    <>
      <Navbar />
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800">All Products</h1>
        <p className="text-gray-600 mt-2">
          Browse our collection of amazing products
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
        {products.map((obj) => {
          const { title, description, price, image } = obj;

          return (
            <div
              key={obj.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold mb-2 text-gray-800">
                  {title}
                </h1>
                <p className="text-green-600 font-bold text-xl mb-2">
                  ${price}
                </p>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {description}
                </p>
                <Link to={`/product/${obj.id}`}>
                  <button
                    key={obj.id}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Produts;

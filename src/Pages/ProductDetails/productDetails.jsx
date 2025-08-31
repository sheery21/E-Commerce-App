import React, { useEffect, useState } from "react";
import Navbar from "../../Componentes/Navbar/navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../Componentes/Footer/footer";

const ProductDetails = () => {
  let params = useParams();
  let [singleProdect, setSingleProdect] = useState({});
  console.log("ProductDetails page rendered", params);
  useEffect(() => {
    fetchSingelProdect();
  } ,[ ]);

  const fetchSingelProdect = async () => {
    try {
      let res = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      console.log(res.data);
      setSingleProdect(res.data);
    } catch (error) {
      console.log(error.massage);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          {/* Left Side Image */}
          <div className="md:w-1/2 flex justify-center items-center bg-gray-50">
            <img
              src={singleProdect.image}
              alt={singleProdect.title}
              className="w-full md:w-3/4 h-64 md:h-96 object-contain p-4"
            />
          </div>

          {/* Right Side Details */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
                {singleProdect.title}
              </h1>
              <p className="text-green-600 font-bold text-lg md:text-xl mb-2">
                ${singleProdect.price}
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                {singleProdect.description}
              </p>
            </div>

            <button
              // onClick={() => addToCart(singleProdect)}
              className="w-full bg-blue-600 text-white py-2 md:py-3 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;

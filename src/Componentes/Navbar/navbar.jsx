import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-200 sticky top-0 z-50">
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="font-bold text-lg">
          <img src={logo} width={50} height={50} alt="logo" />
        </div>

        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <button className="p-2 rounded-md hover:bg-gray-300 focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      <ul
        className={`flex flex-col md:flex-row gap-4 w-full md:w-auto transition-all duration-300 overflow-hidden 
        ${open ? "max-h-60 mt-4" : "max-h-0 md:max-h-none"} md:mt-0`}
      >
        <Link to="/home">
          <li className="cursor-pointer hover:text-red-600">Home</li>
        </Link>
        <Link to="/about">
          <li className="cursor-pointer hover:text-red-600">About</li>
        </Link>
        <Link to="/contact">
          <li className="cursor-pointer hover:text-red-600">Contact Us</li>
        </Link>
        <Link to="/product">
          <li className="cursor-pointer hover:text-red-600">All Products</li>
        </Link>
      </ul>

      <div
        className={`flex gap-4 flex-col md:flex-row w-full md:w-auto transition-all duration-300 overflow-hidden 
        ${open ? "max-h-40 mt-2" : "max-h-0 md:max-h-none"} md:mt-0`}
      >
        <Link to={"/"}>
          <button className="px-4 py-2 border border-gray-500 rounded-lg hover:bg-gray-100">
            Login
          </button>
        </Link>
        <Link to={"/product"}>
          <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
}

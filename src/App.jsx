import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/about";
import ConteactUs from "./Pages/ConteactUs/conteactUs";
import Home from "./Pages/Home/home";
import Produts from "./Pages/Products/products";
import ProductDetails from "./Pages/ProductDetails/productDetails";
import Login from "./Pages/LogIn/login";
import SignUp from "./Pages/SignUp/signUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Produts />} />
        <Route path="/contact" element={<ConteactUs />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;

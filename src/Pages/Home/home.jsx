import React from 'react'
import Navbar from '../../Componentes/Navbar/navbar';
import Footer from '../../Componentes/Footer/footer';
import SliderPage from '../../Componentes/Slider/sliderPage';

const Home = () => {
console.log('Home page rendered');


  return (
    <>
      <Navbar />
      <div className='mt-6"'>
      <SliderPage />
      </div>
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome to Our Store
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Discover amazing products at unbeatable prices. Quality, trust, and
          style all in one place.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Best Quality</h3>
            <p className="text-gray-600">
              We provide top-notch products tested for durability and style.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Get your orders delivered quickly and safely to your doorstep.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
            <p className="text-gray-600">
              Shop without breaking the bank. Premium quality at low prices.
            </p>
          </div>
        </div>
      </section>
        < Footer />
    </>
  )
}

export default Home
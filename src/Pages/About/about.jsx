import React from "react";
import Navbar from "../../Componentes/Navbar/navbar";
import Footer from "../../Componentes/Footer/footer";

const About = () => {
  console.log("About page rendered");
  return (
    <>
      <Navbar />

      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We are passionate about bringing you the best products at affordable
          prices, combining quality, trust, and style in every purchase.
        </p>
      </section>

      <section className="p-10 grid gap-8 md:grid-cols-2 bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make online shopping simple, enjoyable, and
            trustworthy. We ensure that every product we provide is carefully
            curated for quality and durability.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            We aim to become a leading e-commerce platform, offering the best
            deals and products worldwide, while delivering excellent customer
            service.
          </p>
        </div>
      </section>

      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://cdn.pixabay.com/photo/2022/07/05/14/44/chris-evans-7303247_1280.jpg"
              alt="team1"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Ali Khan</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://c3.klipartz.com/pngpicture/1021/149/sticker-png-scarlett-johansson-viuda-negra-4429314-blackwidow-avengers.png"
              alt="team2"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Sara Ahmed</h3>
            <p className="text-gray-600">Head of Marketing</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_640.jpg"
              alt="team3"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Usman Ali</h3>
            <p className="text-gray-600">Product Manager</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;

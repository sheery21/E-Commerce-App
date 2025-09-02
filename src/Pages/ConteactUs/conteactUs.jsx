import React from "react";
import Footer from "../../Componentes/Footer/footer";
import Navbar from "../../Componentes/Navbar/navbar";

const ConteactUs = () => {
  return (
    <>
      <Navbar />

      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Contact Us
            </h1>
            <p className="text-gray-600 mt-2">
              Have questions? We'd love to hear from you!
            </p>
          </div>

          {/* Contact Form + Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-2xl p-6 md:p-10">
            {/* Form Section */}
            <div>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your message here..."
                    className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Our Office
                </h2>
                <p className="text-gray-600 mt-2">
                  123 Business Street, Karachi, Pakistan
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800">Call Us</h2>
                <p className="text-gray-600 mt-2">+92 300 1234567</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Email Us
                </h2>
                <p className="text-gray-600 mt-2">support@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ConteactUs;

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {auth ,signInWithEmailAndPassword } from '../../FireBase';
import Swal from "sweetalert2";
const Login = () => {

    let [email, setEmail]  =useState('')
    let [password, setpassword]  =useState('');
    let navigate = useNavigate(); 

    const submit = async () =>{
        try{

            const userCredential = await signInWithEmailAndPassword ( auth ,email ,password  );
            
            let user = userCredential.user;

            if( user){
              Swal.fire({
                      icon: "success",
                      title: "Login Successful",
                      text: " Welcome back 🎉",
                    }).then(()=> navigate("/home"));
            }
        }catch(error){
            Swal.fire({
                  icon: "error",
                  title: "Sign Up Failed",
                  text: error.message, // correct property
                });
                console.log("Firebase Error:", error.code);
            
        }
        
        
    }


  return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <div className="space-y-5">
          
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
              onChange={
                  (e)=> setEmail(e.target.value)
                }
                value={email}
            />
          </div>

          
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
              onChange={
                (e)=>setpassword(e.target.value)
              }
              value={password}
            />
          </div>

          
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>

          
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            onClick={submit}
          >
            Login
          </button>
        </div>

        < Link  to={'signUp' }>
        <p className="text-center text-sm text-gray-600 mt-6 ">
          Don’t have an account?{" "}
          <span className='className="text-purple-600 font-semibold hover:underline"'>Sign up</span>
        </p>
        </Link>
      </div>
    </div>
  )
}

export default Login
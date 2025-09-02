import { createUserWithEmailAndPassword } from "firebase/auth/web-extension";
import React, { useEffect } from "react";
import { useState } from "react";
import { auth, db } from "../../FireBase";
import { Link, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";

const SignUp = () => {
  let [userName, setuserName] = useState("");
  let [userEmail, setuserEmail] = useState("");
  let [userPassword, setuserPassword] = useState("");
  let [userConfirmPassword, setuserConfirmPassword] = useState("");

  useEffect(() => {
    singUpHandler;
  }, []);
  let navigate = useNavigate();

  const singUpHandler = async () => {
    try {
      if (userPassword === userConfirmPassword) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          userEmail,
          userPassword
        );
        const user = userCredential.user;
        const uId = user.uid;

        localStorage.setItem("userUid", JSON.stringify(uId));

        const saveUserData = await addDoc(collection(db, "users"), {
          userName,
          userEmail,
          userPassword,
          time: new Date(),
          uId,
        });

        console.log("saveUserData", saveUserData);

        Swal.fire({
          icon: "success",
          title: "Account Created!",
          text: "User registered successfully 🎉",
        }).then(() => navigate("/home"));
      } else {
        Swal.fire({
          icon: "error",
          title: "Passwords do not match",
          text: "Please make sure both passwords are the same.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Sign Up Failed",
        text: error.message,
      });
      console.log("Firebase Error:", error.code);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <div className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
              onChange={(e) => setuserName(e.target.value)}
              value={userName}
            />
          </div>

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
              onChange={(e) => setuserEmail(e.target.value)}
              value={userEmail}
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
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
              onChange={(e) => setuserPassword(e.target.value)}
              value={userPassword}
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Re-enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
              onChange={(e) => setuserConfirmPassword(e.target.value)}
              value={userConfirmPassword}
            />
          </div>

          <div className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <p>
              I agree to the{" "}
              <Link className="text-indigo-600 hover:underline">
                Terms & Conditions
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
            onClick={singUpHandler}
          >
            Sign Up
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to={"/"}>
            <span className="text-indigo-600 font-semibold hover:underline">
              LogIn
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

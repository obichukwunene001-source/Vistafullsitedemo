

import React, { useState } from "react";
import { Link } from "react-router-dom";
import google from "../assets/google.png";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-start md:pt-20 py-12 px-3 -ml-7 md:-ml-7">
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: form */}
          <div className="max-w-md">
           
            <h1 className="text-4xl font-semibold mb-3">Login </h1>
            <p className="text-sm text-gray-600 mb-8">Pick up where you left off with your tutorials</p>

            <form className="space-y-4">
              <div>
                <label className="block text-xs text-gray-600 mb-2">Email</label>
                <input type="email" className="w-full border-b border-gray-200 bg-transparent py-2 outline-none text-black placeholder-gray-400 caret-black focus:ring-0" placeholder="" />
              </div>

              <div className="relative">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs text-gray-600">Password</label>
                 
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full border-b border-gray-200 bg-transparent py-2 pr-10 outline-none text-black placeholder-gray-400 mb-3 caret-black focus:ring-0"
                  placeholder=""
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 pb-10 text-gray-600"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.966 9.966 0 012.223-3.607M6.1 6.1A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.964 9.964 0 01-1.54 3.01M3 3l18 18" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
                 <Link to="/reset" className="text-xs text-gray-500 flex justify-end ">Reset your password</Link>
              </div>

              <button type="submit" className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 font-medium">Sign in</button>

              <button type="button" className="mt-3 w-full border border-orange-300 rounded-full py-3 flex items-center justify-center gap-3 bg-white">
                <img src={google} alt="Google" className="w-5 h-5" />
                Continue with Google
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">New here? <Link to="/signup" className="text-orange-600 font-medium">Create an account</Link></p>
            </form>
          </div>

          {/* Right: testimonial */}
          <div className="hidden md:flex flex-col items-start justify-center px-8">
            <div className="flex items-center mb-4">
              <div className="flex text-orange-500 text-xl mr-3">★★★★★</div>
            </div>
            <blockquote className="text-lg italic text-gray-800 mb-6">"I had my account set up in minutes and was learning immediately."</blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
              <div>
                <div className="font-medium">Adekunle Bello</div>
                <div className="text-sm text-gray-500">Supply chain manager, Lagos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
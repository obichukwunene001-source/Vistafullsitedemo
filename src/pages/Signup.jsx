

import React, { useState } from "react";
import { Link } from "react-router-dom";


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-start  md:pt-20 px-1 py-12 -ml-3 md:-ml-7">
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: form */}
          <div className="max-w-md">
         
            <h1 className="text-4xl font-semibold mb-3">Create an account</h1>
            <p className="text-sm text-gray-600 mb-8">Join us to access tutorials and services</p>

            <form className="space-y-4">
              <div>
                <label className="block text-xs text-gray-600 mb-2">Full name</label>
                <input type="text" className="w-full border-b border-gray-200 bg-transparent py-2 outline-none text-black placeholder-gray-400 caret-black focus:ring-0" placeholder="Your full name" />
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-2">Email</label>
                <input type="email" className="w-full border-b border-gray-200 bg-transparent py-2 outline-none text-black placeholder-gray-400 caret-black focus:ring-0" placeholder="name@example.com" />
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-2">Phone number</label>
                <input type="tel" className="w-full border-b border-gray-200 bg-transparent py-2 outline-none text-black placeholder-gray-400 caret-black focus:ring-0" placeholder="+234 (916) 2919-XXX" />
              </div>

              <div className="relative">
                <label className="block text-xs text-gray-600 mb-2">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full border-b border-gray-200 bg-transparent py-2 pr-10 outline-none text-black placeholder-gray-400 caret-black focus:ring-0"
                  placeholder="Choose a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-600"
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
              </div>

              <div className="relative">
                <label className="block text-xs text-gray-600 mb-2">Confirm password</label>
                <input
                  type={showConfirm ? "text" : "password"}
                  className="w-full border-b border-gray-200 bg-transparent py-2 pr-10 outline-none text-black placeholder-gray-400 caret-black focus:ring-0"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-600"
                >
                  {showConfirm ? (
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
              </div>

              <button type="submit" className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 font-medium">Create account</button>

              <p className="text-center text-sm text-gray-600 mt-4">Already have an account? <Link to="/login" className="text-orange-600 font-medium">Sign in</Link></p>
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

export default Signup

import React from "react";
import { Link } from "react-router-dom";
import Footer from "../pages/Footer";

const About = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-50 flex items-center py-16 -ml-6 md:-ml-7 md:-mt-34">
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-gray-500 mb-4">Story</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Built by people who know the work</h2>
            <p className="text-gray-600 mb-6">We started because the gap was too wide. Logistics professionals needed real education, 
              not theory. So we created tutorials written by veterans who've actually moved goods, solved problems, and learned what matters. 
              Our payment systems came next because friction slows everything down.</p>

            <div className="flex items-center gap-4">
              <button className="px-4 py-2 rounded-full border bg-white text-sm">Learn more</button>
              <Link to="/" className="text-sm text-gray-700 flex items-center gap-2">Start now <span className="text-xl">›</span></Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md h-72 md:h-100 bg-gray-300 rounded-lg flex items-center justify-center relative">
              <div className="bg-gray-700/80 w-14 h-14 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v18l15-9L5 3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default About
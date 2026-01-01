
import Footer from '../pages/Footer'
import React from "react";

const data = [
  {
    quote: "I went from struggling with supply chain basics to managing complex operations in weeks, not months.",
    name: "Victor Okafor",
    role: "Operations manager, Benin",
  },
  {
    quote: "We switched our payment system and suddenly everything moved faster. No more delays.",
    name: "Blessing Okafor",
    role: "Finance manager, Abuja",
  },
  {
    quote: "Their support team actually knows logistics. They don't just read from a script.",
    name: "Aisha Mohammed",
    role: "Operations lead, Kano",
  },
  {
    quote: "The tutorials cut through the noise. Real instruction from people who've actually done the work.",
    name: "Kolade Adeyemi",
    role: "Logistics director, Lagos",
  },
  {
    quote: "I learned more in two weeks than I did in a year of scattered reading.",
    name: "Chinedu Nwosu",
    role: "Supply chain officer, Port Harcourt",
  },
  {
    quote: "The structured content made it simple to implement what I learned immediately.",
    name: "Tunde Oluwaseun",
    role: "Warehouse manager, Ibadan",
  },
];

const Testimonials = () => {
  return (
    <>
    <section className="min-h-screen bg-gray-50 py-16 -mb-40  md:-ml-7 -ml-7">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Results matter</h2>
          <p className="text-sm text-gray-600 mt-2">Hear from those who've built something better</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((t, i) => (
            <div key={i} className="border border-gray-200 rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-3 text-orange-500">★★★★★</div>
              <blockquote className="text-sm text-gray-800 mb-4">"{t.quote}"</blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm text-gray-500">{t.name.split(" ").map(n=>n[0]).slice(0,2).join("")}</div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Testimonials
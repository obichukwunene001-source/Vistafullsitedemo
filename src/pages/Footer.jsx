

import React from 'react'

const columns = {
  Explore: ['Home', 'About', 'Bookings', 'Membership', 'Account'],
  Services: ['Public Appearances', 'Private Events', 'Brand Partnerships', 'Booking Process', 'Request Quote'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer', 'Contact'],
  Connect: ['Instagram', 'Twitter', 'Facebook', 'LinkedIn', 'YouTube'],
  Support: ['Contact us', 'Help center', 'FAQ', 'Booking help', 'Membership help'],
  Account: ['Login', 'Sign up', 'Reset password', 'Profile settings', 'Logout'],
}

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 -ml-7">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold">Stay in the loop</h3>
            <p className="mt-2 text-sm text-gray-600">Get exclusive updates and behind-the-scenes access</p>
          </div>

          <div className="md:w-1/2 flex justify-end">
            <form className="w-full max-w-md flex items-center gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent border-b border-gray-300 focus:outline-none py-2 px-2 text-sm"
              />
              <button className="bg-white/20 border border-gray-300 rounded-full px-4 py-2 text-sm shadow-sm hover:cursor-pointer">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
            {Object.entries(columns).map(([title, items]) => (
              <div key={title}>
                <h4 className="font-bold text-sm mb-3">{title}</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {items.map((it) => (
                    <li key={it} className="hover:underline cursor-pointer">{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6 flex  mx-auto items-center justify-between">
            <div className="text-sm text-gray-600  mx-auto">© 2025 Premium Celebrity Brand Platform</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
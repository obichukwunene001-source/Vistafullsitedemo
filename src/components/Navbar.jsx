import { Menu, X, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';

const Navbar = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="text-black font-semibold fixed z-50 w-full top-0 bg-white shadow">
      <div className="flex items-center max-w-7xl mx-auto px-4 py-6 justify-between md:px-20">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </Link>

        <nav className="hidden md:flex gap-7 items-center">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-orange-500' : 'hover:text-orange-600'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-orange-500' : 'hover:text-orange-600'}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'text-orange-500' : 'hover:text-orange-600'}>Services</NavLink>
          <NavLink to="/testimonials" className={({ isActive }) => isActive ? 'text-orange-500' : 'hover:text-orange-600'}>Testimonials</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-orange-500' : 'hover:text-orange-600'}>Contact</NavLink>

          <div className="relative">
            <button
              className="flex items-center gap-1 hover:text-orange-600"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <span>{user ? user.email : 'Account'}</span>
              <ChevronDown size={16} className={`ml-1 transition-transform ${profileOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-md shadow-lg py-1 z-50">
                {!user && (
                  <>
                    <Link to="/login" className="block px-4 py-2 hover:bg-orange-50" onClick={() => setProfileOpen(false)}>Login</Link>
                    <Link to="/signup" className="block px-4 py-2 hover:bg-orange-50" onClick={() => setProfileOpen(false)}>Sign up</Link>
                  </>
                )}
                {user && (
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-orange-50"
                    onClick={async () => {
                      await supabase.auth.signOut();
                      setProfileOpen(false);
                    }}
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-7 pb-7">
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>

          {!user && (
            <>
              <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
              <Link to="/signup" onClick={() => setIsOpen(false)}>Sign up</Link>
            </>
          )}
          {user && (
            <button
              onClick={async () => {
                await supabase.auth.signOut();
                setIsOpen(false);
              }}
            >
              Logout
            </button>
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;

import { Menu, X, ChevronDown } from 'lucide-react';
import React, { useState} from 'react';
import { NavLink} from 'react-router-dom'
import { Link} from 'react-router-dom'
import logo from '../assets/logo.jpg';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

  return (
  <header className="text-black font-semibold fixed z-2000 w-full top-0 bg-[#ffffff]" >
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
              <div className="flex items-center">
                <button
                  className="flex items-center gap-1 hover:text-orange-600"
                  onClick={() => setProfileOpen(!profileOpen)}
                  aria-expanded={profileOpen}
                >
                  <span>Account</span>
                  <ChevronDown size={16} className={`ml-1 transition-transform ${profileOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
              </div>

              <div className={`${profileOpen ? 'block' : 'hidden'} absolute right-0 mt-2 w-44 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-md shadow-lg py-1 z-50`}>
                <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-700 rounded transition-colors cursor-pointer" onClick={() => { setProfileOpen(false); window.scrollTo(0,0); }}>Login</Link>
                <Link to="/signup" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-700 rounded transition-colors cursor-pointer" onClick={() => { setProfileOpen(false); window.scrollTo(0,0); }}>Sign up</Link>
              </div>
            </div>
            <div className="hidden flex items-center gap-3 mt-3 pl-2">
              <img src={logo} alt="User avatar" className="w-9 h-9 rounded-full object-cover border border-gray-200" />
              <div className="leading-tight flex justify-center items-center flex-col">
                <div className="text-gray-800 text-sm font-medium">Welcome,</div>
                <div className="text-gray-500 text-xs">User</div>
              </div>
            </div>

        </nav>
        <button className="md:hidden" onClick={()=> setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
        </button>
    </div>
    {isOpen &&
    <nav className="md:hidden flex gap-7 flex-col pl-7 pt-7 pb-200 w-full">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-orange-400' : 'hover:text-orange-600'} onClick={()=> setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-orange-400' : 'hover:text-orange-600'} onClick={()=> setIsOpen(false)}>About</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'text-orange-400' : 'hover:text-orange-600'}  onClick={()=> setIsOpen(false)}>Services</NavLink>
                        <NavLink to="/contact" className="hover:text-orange-600" onClick={()=> setIsOpen(false)}>Contact</NavLink>
            <div>
              <button className="flex items-center gap-2 hover:text-orange-600" onClick={() => setProfileOpen(!profileOpen)}>
                Account <ChevronDown className={`${profileOpen ? 'rotate-180' : 'rotate-0'} transition-transform`} />
              </button>
              {profileOpen && (
                <div className="flex flex-col gap-2 md:gap-0 pl-2 mt-3">
                  <Link to="/login" className="hover:text-orange-600 py-1" onClick={() => { setIsOpen(false); setProfileOpen(false); window.scrollTo(0,0); }}>Login</Link>
                  <Link to="/signup" className="hover:text-orange-600 py-1" onClick={() => { setIsOpen(false); setProfileOpen(false); window.scrollTo(0,0); }}>Sign up</Link>
                </div>
              )}
            <div className="hidden flex items-center gap-3 mt-3 pl-2">
              <img src={logo} alt="User avatar" className="w-9 h-9 rounded-full object-cover border border-gray-200" />
              <div className="leading-tight">
                <div className="text-gray-800 text-sm font-medium">Welcome</div>
                <div className="text-gray-500 text-xs">User</div>
              </div>
            </div>
            </div>

           
    </nav>
}
   </header>
  )
}

export default Navbar;
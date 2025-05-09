import React from "react";
import { ImEdge, ImCart } from "react-icons/im";
import { useThemeContext } from '../contexts/ThemeContext';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
function Navbar() {
  const { mode, toggleTheme } = useThemeContext();
  const cartValue = useSelector((state) => state.cart.value); // redux cart value

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-700 mb-4 md:mb-0">
          <ImEdge />
          <span className="ml-3 text-xl">EShop</span>
        </a>
     <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-4">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <Link to="/about" className="hover:text-gray-900">About</Link>
          <Link to="/contact" className="hover:text-gray-900">Contact Us</Link>
          <Link to="/login" className="hover:text-gray-900">Login</Link>
        </nav>
<div className="relative m-5">
  <ImCart className="text-2xl" />
  <div className="absolute -top-2 -right-2 bg-yellow-400 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-black">
    {cartValue}
  </div>
</div>

        <IconButton onClick={toggleTheme} color="inherit">
          {mode === 'dark' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
        </IconButton>
      </div>
    </header>
  );
}

export default Navbar;

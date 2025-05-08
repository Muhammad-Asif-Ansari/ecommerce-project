// import React from "react"
// import { ImEdge } from "react-icons/im";
// import { ImCart } from "react-icons/im";
// import { useThemeContext } from '../contexts/ThemeContext';
// import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
// import IconButton from '@mui/material/IconButton';
// function Navbar() {
//     const { mode, toggleTheme } = useThemeContext();
//     return(
//         <header className="text-gray-600 body-font">
//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//     <ImEdge />
//       <span className="ml-3 text-xl">EShop</span>
//     </a>
//     <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//       <a className="mr-5 hover:text-gray-900 cursor-pointer">Home</a>
//       <a className="mr-5 hover:text-gray-900 cursor-pointer">About</a>
//       <a className="mr-5 hover:text-gray-900 cursor-pointer">Contact Us</a>
//       <a className="mr-5 hover:text-gray-900 cursor-pointer">Login</a>
//     </nav>

//         <div className="d-flex position-relative">
//     <ImCart  className="m-5 size-6" />
        
//         {/* <div className="bg-warning position-absolute end-0  d-flex justify-content-around align-items-center rounded" style={{ width: 15, height: 15 }}>
//           <span className="">{cartvalue}</span>
//         </div> */}
//       </div>

//  <IconButton onClick={toggleTheme} color="inherit">
//       {mode === 'dark' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
//     </IconButton>
//   </div>
// </header>

//     )
// }

// export default Navbar


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
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <ImEdge />
          <span className="ml-3 text-xl">EShop</span>
        </a>
        {/* <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900 cursor-pointer">Home</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">About</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">Contact Us</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">Login</a>
        </nav> */}
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

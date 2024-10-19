import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed w-full  z-10 bg-blue-900 text-white transition-transform ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="navbar container  mx-auto">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl" href="#home">Exhibz</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to={"/"} >Home</Link></li>
            <li><Link to={"/"} >Sponsors</Link></li>
            <li><Link to={"/"} >About</Link></li>
            <li><Link to={"/"} >Speakers</Link></li>
            <li><Link to={"/"} >Schedules</Link></li>
            <li><Link to={"/"} >Blog</Link></li>
          </ul>
        </div>

        <div className="navbar-end lg:hidden">
          <button className="btn btn-square btn-ghost bg-pink-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <ul className="menu menu-compact bg-pink-800 w-full p-2">
            <li><Link >Home</Link></li>
            <li><Link to={'/'} >Sponsors</Link></li>
            <li><Link to={'/'} >About</Link></li>
            <li><Link to={'/'} >Speakers</Link></li>
            <li><Link to={'/'} >Schedules</Link></li>
            <li><Link to={'/'} >Blog</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

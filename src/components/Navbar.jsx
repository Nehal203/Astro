import React, { useState, useEffect } from "react";
import { Search, ShoppingCart, User, Headphones, Mail, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showSticky, setShowSticky] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    window.scrollTo(0, 0);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const NavbarContent = () => (
    <>
      <div className="bg-black flex justify-between items-center px-6 py-2 text-sm border-b border-gray-700 text-white">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Headphones size={16} className="text-orange-500" />
            <span>
              Talk to our Astrologers - <span className="font-semibold">+1800 326 3264</span>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} className="text-orange-500" />
            <span>
              Support - <span className="font-semibold">support@website.com</span>
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 hover:text-orange-500 transition">
            <User size={16} />
            <span>Log in / Register</span>
          </button>
          <div className="flex items-center space-x-2">
            <ShoppingCart size={18} className="text-orange-500" />
            <span>$512</span>
            <span className="bg-orange-500 text-xs px-2 rounded-full">02</span>
          </div>
        </div>
      </div>

      <nav className="bg-[#800000] flex justify-between items-center px-6 py-4 text-white relative">
        <Link to="/">
          <img src={logo} alt="Astrology Logo" className="w-[120px]" />
        </Link>

        <ul className="flex space-x-8 font-medium text-white">
          <li><Link to="/" className="hover:text-orange-500 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-orange-500 transition">About</Link></li>
          <li><Link to="/puja" className="hover:text-orange-500 transition">Puja Services</Link></li>
          <li><Link to="/destinationwedding" className="hover:text-orange-500 transition">Destination Wedding</Link></li>
          <li><Link to="/blog" className="hover:text-orange-500 transition">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-orange-500 transition">Contact</Link></li>
        </ul>

        <div className="relative">
          <Search
            className="text-orange-500 cursor-pointer"
            size={18}
            onClick={() => setShowSearch(!showSearch)}
          />
          {showSearch && (
            <div className="absolute top-10 right-0 z-50 bg-white rounded shadow-md p-2 flex items-center space-x-2 w-64">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <X
                size={18}
                className="text-gray-700 cursor-pointer"
                onClick={() => setShowSearch(false)}
              />
            </div>
          )}
        </div>
      </nav>
    </>
  );

  return (
    <>
      <header className="text-white">
        <NavbarContent />
      </header>

      {showSticky && (
        <header className="fixed top-0 left-0 w-full z-50 shadow-lg transition-transform duration-500">
          <NavbarContent />
        </header>
      )}
    </>
  );
};

export default Navbar;

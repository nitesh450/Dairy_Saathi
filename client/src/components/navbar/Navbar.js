import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar_ham = () => {
  const image = 'https://dairysaathi.com/assets/images/favicon.png';

  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0">
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
        <div className="flex justify-between items-center text-base gap-8">
          <a href="#home">
            <img src={image} alt='dairy-saathi-logo' className="w-10 inline-block items-center" />
            <span className="text-[#263238]">Dairy Saathi</span>
          </a>
          <ul className="md:flex space-x-12 hidden">
            <li><Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="block text-base text-gray-900 hover:text-gray-600 first:font-medium">Home</Link></li>
            <li><Link to="features" spy={true} smooth={true} offset={-100} duration={500} className="block text-base text-gray-900 hover:text-gray-600 first:font-medium">Features</Link></li>
            <li><Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500} className="block text-base text-gray-900 hover:text-gray-600 first:font-medium">Testimonials</Link></li>
            <li><Link to="contact-us" spy={true} smooth={true} offset={-100} duration={500} className="block text-base text-gray-900 hover:text-gray-600 first:font-medium">Contact Us</Link></li>
            <li><Link to="footer" spy={true} smooth={true} offset={-100} duration={500} className="block text-base text-gray-900 hover:text-gray-600 first:font-medium">Footer</Link></li>
          </ul>

          <div className="space-x-12 hidden lg:flex item center">
            <button className="bg-cyan-500 text-white py-2 px-4 transition-all duration-300 rounded hover:bg-blue-500">Get Started</button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none focus:text-gray-500">
              {isMenuOpen ? (<FaXmark className="h-6 w-6" />) : (<FaBars className='h-6 w-6' />)}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className={`space-y-4 px-4 mt-16 py-7 bg-orange-300 fixed top-0 right-0 left-0 md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="block text-base text-gray-900 hover:text-gray-600 first:font-medium">Home</Link>
            <Link to="features" spy={true} smooth={true} offset={-100} duration={500} className="block text-base text-gray-900 hover:text-gray-600 first:font-medium">Features</Link>
            <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500} className="block text-base text-gray-900 hover:text-gray-600 first:font-medium">Testimonials</Link>
            <Link to="contact-us" spy={true} smooth={true} offset={-100} duration={500} className="block text-base text-gray-900 hover:text-gray-600 first:font-medium">Contact Us</Link>
            <Link to="footer" spy={true} smooth={true} offset={-100} duration={500} className="block text-base text-gray-900 hover:text-gray-600 first:font-medium">Footer</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar_ham;

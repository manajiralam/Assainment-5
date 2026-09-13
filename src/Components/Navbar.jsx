import React from 'react';
import logo from '../assets/logo-text.png';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-base-100 shadow-md backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
          </div>
          <div className="flex space-x-8 text-sm font-medium">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#technologies" className="hover:text-primary transition-colors">Technologies</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="btn btn-ghost btn-sm">Sign In</button>
            <button className="btn btn-sm border-0 text-white bg-brand-gradient rounded-full px-6">Sign Up</button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden items-center justify-between h-16">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="#home">Home</a></li>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Dev Stack" className="h-7 w-auto" />
          </div>
          <div className="flex items-center space-x-2">
            <button className="btn btn-ghost btn-xs">Sign In</button>
            <button className="btn btn-xs border-0 text-white bg-brand-gradient rounded-full px-3">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
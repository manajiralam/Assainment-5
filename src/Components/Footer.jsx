import React from 'react';
import logo from '../assets/logo-text.png'


export default function Footer() {
  return (
    <footer className="bg-base-300 text-base-content pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-base-200">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2">
              <span className="text-2xl"><img src={logo} alt="" />
              </span>
            </div>
            <p className="mt-3 text-sm text-base-content/70 max-w-sm">
              Helping developers design, curate, and optimize technology stacks for modern applications effortlessly.
            </p>
            <div className="flex space-x-4 mt-4 text-[20] font-normal">
              <a href="">Github</a>
              <a href="">Twitter</a>
              <a href="">LinkedIn</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-base-content/70">
              <li><a href="">Home</a></li>
              <li><a href="">Technologies</a></li>
              <li><a href="" >Projects</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-base-content/70">
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-base-content/70">
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-base-content/60 gap-4">
          <p>2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#terms" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
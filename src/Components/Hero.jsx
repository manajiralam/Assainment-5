import React from 'react';
import banner from '../assets/banner-stack.png';

export default function Hero() {
  return (
    <div id="home" className="py-16 md:py-24 bg-base-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Build Your Ultimate <span className="text-brand-gradient">Dev Stack</span>
          </h1>
          <p className="mt-4 text-lg text-base-content/70">
            Discover, evaluate, and assemble modern tech stacks tailored for your next web application project.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#technologies" className="btn border-0 text-white bg-brand-gradient hover:opacity-90">
              Explore Technologies
            </a>
            <button className="btn btn-outline border-pink-500 text-pink-500 hover:bg-pink-500 hover:border-pink-500">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img 
            src={banner} 
            alt="Dev Stack Hero" 
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
}
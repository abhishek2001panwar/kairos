// Footer.js

import React from 'react';

const Foot = () => {
  return (
    <footer className=" text-black bg-zinc-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-teal-500">
                About Us
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-500">
                Contact
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-500">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:order-1 text-center md:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Kairos Healthcare. All rights reserved.
            </p>
            <p className="text-sm mt-1">
              Developed by <a href="#" className="text-blue-500 hover:underline">Your Company</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foot;

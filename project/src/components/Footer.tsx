import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © {currentYear} Hamza Elmi. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
          Copyright © 2025 Hamza Elmi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
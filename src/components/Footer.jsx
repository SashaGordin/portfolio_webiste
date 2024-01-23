import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4" style={{ marginTop: 'auto'}}>
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Your Website Name. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy-policy" className="text-gray-400 hover:text-white mr-4">Privacy Policy</a>
          <a href="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
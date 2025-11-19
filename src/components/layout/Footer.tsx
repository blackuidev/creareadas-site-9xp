import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} GrocerEase. All rights reserved.</p>
        <p className="mt-2 text-sm">Fresh groceries, delivered to your door.</p>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-green-600 to-lime-500 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          GrocerEase
        </Link>
        <div className="space-x-4">
          <Button asChild variant="ghost" className="text-white hover:bg-green-700">
            <Link to="/">Home</Link>
          </Button>
          <Button asChild variant="ghost" className="text-white hover:bg-green-700">
            <Link to="/shop">Shop</Link>
          </Button>
          <Button asChild variant="ghost" className="text-white hover:bg-green-700">
            <Link to="/about">About</Link>
          </Button>
          <Button asChild variant="ghost" className="text-white hover:bg-green-700">
            <Link to="/cart">Cart</Link>
          </Button>
          <Button asChild variant="secondary" className="bg-white text-green-700 hover:bg-gray-100">
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
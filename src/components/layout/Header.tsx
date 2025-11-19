import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ToggleTheme } from '@/components/ui/toggle-theme';

const Header: React.FC = () => {
  return (
    <header className="bg-background border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          LuxMotors & Tech
        </Link>
        <nav className="flex items-center space-x-4">
          <Link to="/">
            <Button variant="ghost" className="text-lg">Home</Button>
          </Link>
          <Link to="/shop">
            <Button variant="ghost" className="text-lg">Shop</Button>
          </Link>
          <Link to="/about">
            <Button variant="ghost" className="text-lg">About</Button>
          </Link>
          <Link to="/login">
            <Button variant="ghost" className="text-lg">Login</Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" className="text-lg">Cart</Button>
          </Link>
          <ToggleTheme />
        </nav>
      </div>
    </header>
  );
};

export default Header;

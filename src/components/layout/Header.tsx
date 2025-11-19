import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-gray-200 transition-colors">
          Lightswind Rentals
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/shop">Shop</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/about">About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/cart">Cart</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

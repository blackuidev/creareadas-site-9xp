import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white hover:text-gray-300">
          CarRental
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="text-white hover:text-gray-300">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/login" className="rounded bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-700">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
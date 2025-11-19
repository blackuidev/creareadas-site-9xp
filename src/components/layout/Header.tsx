import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-200">
          Creareadas
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-300 transition-colors duration-200">Home</Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-blue-300 transition-colors duration-200">Shop</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-300 transition-colors duration-200">About</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-blue-300 transition-colors duration-200">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        My Portfolio
      </Link>
      <nav className="space-x-4">
        <Link to="/">
          <Button variant="ghost" className="text-white hover:bg-gray-700">Home</Button>
        </Link>
        <Link to="/about">
          <Button variant="ghost" className="text-white hover:bg-gray-700">About</Button>
        </Link>
        <Link to="/projects">
          <Button variant="ghost" className="text-white hover:bg-gray-700">Projects</Button>
        </Link>
        <Link to="/contact">
          <Button variant="ghost" className="text-white hover:bg-gray-700">Contact</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

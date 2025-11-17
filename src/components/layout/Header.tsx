const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">Codem Name</a>
        {/* Add navigation links here */}
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/shop" className="hover:text-gray-300">Shop</a></li>
          <li><a href="/about" className="hover:text-gray-300">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
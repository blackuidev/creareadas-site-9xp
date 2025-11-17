import { useTheme } from '../../context/ThemeContext.tsx'; // Adjust path if necessary
import { Button } from '../ui/button.tsx'; // Assuming you have a Button component

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold">Creareadas Site</div>
      <nav className="flex items-center space-x-4">
        <a href="/" className="hover:text-blue-500 transition-colors">Home</a>
        <a href="/shop" className="hover:text-blue-500 transition-colors">Shop</a>
        <a href="/about" className="hover:text-blue-500 transition-colors">About</a>
        <Button onClick={toggleTheme} className="ml-4 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white dark:bg-purple-600 dark:hover:bg-purple-700">
          Toggle Theme ({theme === 'dark' ? 'Dark' : 'Light'})
        </Button>
      </nav>
    </header>
  );
};

export default Header;

import ToggleTheme from '../ui/toggle-theme.tsx';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 shadow-md">
      <h1 className="text-2xl font-bold">My Awesome Site</h1>
      <nav>
        <ToggleTheme />
      </nav>
    </header>
  );
};

export default Header;
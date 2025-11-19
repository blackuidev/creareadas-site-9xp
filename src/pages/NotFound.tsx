import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center p-4 text-center">
    <h1 className="text-6xl font-bold text-gray-800 dark:text-white">404</h1>
    <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">Page Not Found</p>
    <p className="mt-2 text-gray-500 dark:text-gray-400">The page you are looking for does not exist.</p>
    <Link
      to="/"
      className="mt-6 rounded-md bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Go to Home
    </Link>
  </div>
);

export default NotFound;
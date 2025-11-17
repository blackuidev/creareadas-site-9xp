const Home = () => {
  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-600 dark:text-blue-400">
        Welcome to Creareadas Site!
      </h1>
      <p className="text-lg text-center max-w-2xl mb-8">
        Discover innovative UI components and build stunning web experiences. This page now fully respects your chosen theme!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Feature 1</h2>
          <p className="text-gray-700 dark:text-gray-300">Explore our cutting-edge 3D components and animations.</p>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Feature 2</h2>
          <p className="text-gray-700 dark:text-gray-300">Integrate beautiful UI elements designed for modern web apps.</p>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Feature 3</h2>
          <p className="text-gray-700 dark:text-gray-300">Enjoy a seamless user experience with responsive designs.</p>
        </div>
      </div>
      <button className="mt-10 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
        Get Started
      </button>
    </div>
  );
};

export default Home;

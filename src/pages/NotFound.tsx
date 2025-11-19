const NotFound = () => (
  <div className="p-8 bg-red-50 min-h-[calc(100vh-64px)] flex items-center justify-center text-center">
    <div>
      <h1 className="text-6xl font-extrabold text-red-700 mb-4">404</h1>
      <p className="text-2xl text-red-600 mb-6">Page Not Found</p>
      <p className="text-lg text-red-500">The page you're looking for doesn't exist.</p>
      <a href="/" className="mt-8 inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition duration-300 ease-in-out">Go to Home</a>
    </div>
  </div>
);

export default NotFound;
const Home = () => (
  <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-[calc(100vh-64px)] flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in-down">Welcome to Creareadas Car Rentals!</h1>
      <p className="text-xl text-gray-700 mb-8 animate-fade-in-up delay-100">Your journey starts here. Discover our fleet and find your perfect ride.</p>
      <div className="space-x-4 animate-fade-in-up delay-200">
        <a href="/shop" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1">Browse Cars</a>
        <a href="/about" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1">Learn More</a>
      </div>
    </div>
  </div>
);

export default Home;
const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header/Navigation */}
      <header className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-6 bg-transparent">
        <div className="text-2xl font-bold tracking-wider">TESLA</div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-gray-300 transition-colors">Model S</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Model 3</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Model X</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Model Y</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Solar Roof</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Solar Panels</a>
        </nav>
        <div className="flex space-x-4 text-sm font-medium">
          <a href="#" className="hover:text-gray-300 transition-colors hidden md:block">Shop</a>
          <a href="#" className="hover:text-gray-300 transition-colors hidden md:block">Account</a>
          <button className="md:hidden">Menu</button>
        </div>
      </header>

      {/* Hero Section - Model 3 */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-LHD-Desktop.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">Model 3</h1>
          <p className="text-xl md:text-2xl mb-8">Order Online for Touchless Delivery</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#" className="bg-white text-black px-10 py-3 rounded-md font-semibold text-lg hover:bg-gray-200 transition-colors">
              Custom Order
            </a>
            <a href="#" className="bg-gray-800 text-white px-10 py-3 rounded-md font-semibold text-lg hover:bg-gray-700 transition-colors">
              Existing Inventory
            </a>
          </div>
        </div>
      </section>

      {/* Other Model Sections (simplified) */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-LHD-Desktop.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10">
          <h2 className="text-6xl md:text-8xl font-bold mb-4">Model Y</h2>
          <p className="text-xl md:text-2xl mb-8">Order Online for Touchless Delivery</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#" className="bg-white text-black px-10 py-3 rounded-md font-semibold text-lg hover:bg-gray-200 transition-colors">
              Custom Order
            </a>
            <a href="#" className="bg-gray-800 text-white px-10 py-3 rounded-md font-semibold text-lg hover:bg-gray-700 transition-colors">
              Existing Inventory
            </a>
          </div>
        </div>
      </section>

      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-LHD-Desktop.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10">
          <h2 className="text-6xl md:text-8xl font-bold mb-4">Model S</h2>
          <p className="text-xl md:text-2xl mb-8">Order Online for Touchless Delivery</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#" className="bg-white text-black px-10 py-3 rounded-md font-semibold text-lg hover:bg-gray-200 transition-colors">
              Custom Order
            </a>
            <a href="#" className="bg-gray-800 text-white px-10 py-3 rounded-md font-semibold text-lg hover:bg-gray-700 transition-colors">
              Existing Inventory
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-sm py-16 text-center">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
          <li><a href="#" className="hover:text-gray-300">Tesla © 2024</a></li>
          <li><a href="#" className="hover:text-gray-300">Privacy & Legal</a></li>
          <li><a href="#" className="hover:text-gray-300">Vehicle Recalls</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          <li><a href="#" className="hover:text-gray-300">Careers</a></li>
          <li><a href="#" className="hover:text-gray-300">News</a></li>
          <li><a href="#" className="hover:text-gray-300">Engage</a></li>
          <li><a href="#" className="hover:text-gray-300">Locations</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
const Shop = () => (
  <div className="p-8 bg-gray-50 min-h-[calc(100vh-64px)]">
    <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Car Fleet</h1>
    <p className="text-lg text-gray-700 mb-8">Explore our wide selection of vehicles. From economy to luxury, we have a car for every need.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Placeholder for car cards */}
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Car Model {item}</h3>
          <p className="text-gray-600 mb-4">A sleek and comfortable car for your urban adventures.</p>
          <div className="flex justify-between items-center">
            <span className="text-blue-600 font-bold text-xl">$50/day</span>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Rent Now</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Shop;
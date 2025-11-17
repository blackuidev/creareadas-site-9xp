const Shop = () => {
  return (
    <div className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-full">
      <h1 className="text-3xl font-bold mb-4">Our Shop</h1>
      <p className="text-lg">Browse our amazing collection of products.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg shadow bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-2">Product A</h2>
          <p>A fantastic item for your daily needs.</p>
        </div>
        <div className="p-4 border rounded-lg shadow bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-2">Product B</h2>
          <p>You'll love this unique design.</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;

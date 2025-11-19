import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProductCard from '@/components/ProductCard';

const dummyProducts = [
  { id: "1", name: "Organic Apples (1kg)", price: 3.99, image: "https://via.placeholder.com/300/FF0000/FFFFFF?text=Apples", category: "Fruits" },
  { id: "2", name: "Fresh Spinach (250g)", price: 2.49, image: "https://via.placeholder.com/300/008000/FFFFFF?text=Spinach", category: "Vegetables" },
  { id: "3", name: "Whole Milk (1L)", price: 1.89, image: "https://via.placeholder.com/300/87CEEB/FFFFFF?text=Milk", category: "Dairy" },
  { id: "4", name: "Artisan Bread Loaf", price: 4.50, image: "https://via.placeholder.com/300/A0522D/FFFFFF?text=Bread", category: "Bakery" },
  { id: "5", name: "Free-Range Eggs (12)", price: 3.20, image: "https://via.placeholder.com/300/F4A460/FFFFFF?text=Eggs", category: "Dairy" },
  { id: "6", name: "Bananas (1kg)", price: 1.50, image: "https://via.placeholder.com/300/FFFF00/000000?text=Bananas", category: "Fruits" },
  { id: "7", name: "Broccoli (500g)", price: 2.99, image: "https://via.placeholder.com/300/32CD32/FFFFFF?text=Broccoli", category: "Vegetables" },
  { id: "8", name: "Cheddar Cheese (200g)", price: 5.99, image: "https://via.placeholder.com/300/FF8C00/FFFFFF?text=Cheese", category: "Dairy" },
];

const Shop: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name-asc');
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = ["all", "Fruits", "Vegetables", "Dairy", "Bakery"];

  const filteredProducts = dummyProducts
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCategory === 'all' || product.category === filterCategory)
    )
    .sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Fresh Groceries</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
        <Input
          type="text"
          placeholder="Search for products..."
          className="max-w-sm flex-grow md:flex-grow-0"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex gap-4 w-full md:w-auto">
          <Select onValueChange={setFilterCategory} defaultValue={filterCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(cat => (
                <SelectItem key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={setSortBy} defaultValue={sortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name-asc">Name (A-Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z-A)</SelectItem>
              <SelectItem value="price-asc">Price (Low to High)</SelectItem>
              <SelectItem value="price-desc">Price (High to Low)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center text-gray-600 text-lg">No products found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
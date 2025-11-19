import React, { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { products, Product } from '../data/products';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ShinyText } from '@/components/ui/shiny-text';

const Shop: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'price_asc' | 'price_desc' | 'name_asc'>('name_asc');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const allCategories = products.map(p => p.category);
    return ['All', ...Array.from(new Set(allCategories))];
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    switch (sortBy) {
      case 'price_asc':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price_desc':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'name_asc':
      default:
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [searchTerm, sortBy, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        <ShinyText text="Our Premium Collection" className="inline-block" />
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-card p-4 rounded-lg shadow-sm">
        <Input
          type="text"
          placeholder="Search products..."
          className="max-w-sm flex-grow"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select onValueChange={(value: typeof selectedCategory) => setSelectedCategory(value)} defaultValue="All">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={(value: typeof sortBy) => setSortBy(value)} defaultValue="name_asc">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name_asc">Name (A-Z)</SelectItem>
            <SelectItem value="price_asc">Price (Low to High)</SelectItem>
            <SelectItem value="price_desc">Price (High to Low)</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setSortBy('name_asc'); }}>
          Reset Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredAndSortedProducts.length > 0 ? (
          filteredAndSortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">No products found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;

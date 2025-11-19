import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Dummy product data - in a real app, this would come from an API
const dummyProducts = [
  { id: "1", name: "Organic Apples (1kg)", price: 3.99, image: "https://via.placeholder.com/600/FF0000/FFFFFF?text=Organic+Apples", category: "Fruits", description: "Crisp, sweet, and organically grown apples. Perfect for snacking or baking. Rich in vitamins and fiber." },
  { id: "2", name: "Fresh Spinach (250g)", price: 2.49, image: "https://via.placeholder.com/600/008000/FFFFFF?text=Fresh+Spinach", category: "Vegetables", description: "Farm-fresh spinach, great for salads, smoothies, or sautéing. Packed with iron and antioxidants." },
  { id: "3", name: "Whole Milk (1L)", price: 1.89, image: "https://via.placeholder.com/600/87CEEB/FFFFFF?text=Whole+Milk", category: "Dairy", description: "Rich and creamy whole milk, sourced from local farms. Essential for your daily needs." },
  { id: "4", name: "Artisan Bread Loaf", price: 4.50, image: "https://via.placeholder.com/600/A0522D/FFFFFF?text=Artisan+Bread", category: "Bakery", description: "Hand-crafted artisan bread, baked fresh daily. Perfect with any meal or as a snack." },
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = dummyProducts.find(p => p.id === id);

  if (!product) {
    return (
      <Card className="p-8 max-w-xl mx-auto mt-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-lg">The product you are looking for does not exist.</p>
        <Button asChild className="mt-6 bg-green-600 hover:bg-green-700">
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </Card>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="flex flex-col md:flex-row shadow-lg overflow-hidden">
        <div className="md:w-1/2 p-4 flex items-center justify-center">
          <img src={product.image} alt={product.name} className="w-full max-h-[400px] object-contain rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 p-6 md:p-8 space-y-4 flex flex-col justify-center">
          <CardHeader className="p-0">
            <CardTitle className="text-4xl font-bold text-gray-900">{product.name}</CardTitle>
            <CardDescription className="text-lg text-green-700 font-semibold">{product.category}</CardDescription>
          </CardHeader>
          <CardContent className="p-0 space-y-4">
            <p className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</p>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Quantity:</span>
              <Input type="number" defaultValue={1} min={1} className="w-20" />
            </div>
            <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">Add to Cart</Button>
            <Button asChild variant="outline" className="w-full text-green-700 border-green-700 hover:bg-green-50">
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetail;
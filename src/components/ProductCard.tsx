import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-200 ease-in-out">
      <CardHeader className="p-0">
        <Link to={`/shop/${product.id}`}>
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-lg font-semibold mb-2">
          <Link to={`/shop/${product.id}`} className="hover:underline">
            {product.name}
          </Link>
        </CardTitle>
        <p className="text-gray-600 text-sm mb-1">{product.category}</p>
        <p className="text-xl font-bold text-green-700">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-green-600 hover:bg-green-700">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
        <CardDescription className="text-sm text-gray-500">{product.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold text-primary">${product.price.toLocaleString()}</p>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-end p-4 pt-0">
        <Link to={`/shop/${product.id}`}>
          <Button variant="outline">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

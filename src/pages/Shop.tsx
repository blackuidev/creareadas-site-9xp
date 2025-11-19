import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from 'react-router-dom';

const ShopPage: React.FC = () => {
  // Placeholder car data (would typically come from props or API)
  const cars = [
    { id: 1, name: "Economy Hatchback", price: 30, image: "https://via.placeholder.com/250x150", description: "Great for budget travel." },
    { id: 2, name: "Mid-size Sedan", price: 45, image: "https://via.placeholder.com/250x150", description: "Comfortable and efficient." },
    { id: 3, name: "Standard SUV", price: 70, image: "https://via.placeholder.com/250x150", description: "Room for the whole family." },
    { id: 4, name: "Luxury Sedan", price: 100, image: "https://via.placeholder.com/250x150", description: "Premium comfort and style." },
    { id: 5, name: "Electric Vehicle", price: 80, image: "https://via.placeholder.com/250x150", description: "Eco-friendly and modern." },
    { id: 6, name: "Compact SUV", price: 55, image: "https://via.placeholder.com/250x150", description: "Versatile for city and adventure." },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Fleet</h1>

      <div className="flex flex-col lg:flex-row gap-8 mb-10">
        <div className="w-full lg:w-1/4">
          <Card className="p-4">
            <h3 className="text-2xl font-semibold mb-4">Filter Cars</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="search">Search</Label>
                <Input id="search" placeholder="e.g., SUV, Electric" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="type">Car Type</Label>
                <Select>
                  <SelectTrigger id="type" className="mt-1">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="sedan">Sedan</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="hatchback">Hatchback</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="price">Max Price per Day</Label>
                <Input id="price" type="number" placeholder="e.g., 75" className="mt-1" />
              </div>
              <Button className="w-full">Apply Filters</Button>
            </div>
          </Card>
        </div>

        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <Card key={car.id} className="flex flex-col">
                <CardHeader>
                  <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded-md mb-2" />
                  <CardTitle>{car.name}</CardTitle>
                  <CardDescription>{car.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-2xl font-bold">${car.price}<span className="text-sm text-muted-foreground">/day</span></p>
                </CardContent>
                <CardFooter className="flex-col space-y-2">
                  <Link to={`/product/${car.id}`} className="w-full">
                    <Button className="w-full" variant="outline">View Details</Button>
                  </Link>
                  <Button className="w-full">Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

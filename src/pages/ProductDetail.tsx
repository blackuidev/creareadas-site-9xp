import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Placeholder car data for demonstration
  // In a real app, this would fetch data based on `id`
  const car = {
    id: id,
    name: "Luxury SUV",
    make: "XYZ Motors",
    model: "Explorer Pro",
    year: 2023,
    price: 150,
    image: "https://via.placeholder.com/600x400",
    description: "Experience unparalleled comfort and capability with our Luxury SUV. Perfect for long journeys and family adventures. Equipped with premium features, advanced safety systems, and a spacious interior.",
    features: [
      "Automatic Transmission", "GPS Navigation", "Bluetooth Connectivity",
      "Air Conditioning", "Leather Seats", "Sunroof", "All-wheel Drive"
    ],
    availability: "In Stock"
  };

  // In a real application, you'd handle case where car data for ID isn't found.
  if (!car) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Car Not Found</h1>
        <p>The car you are looking for does not exist.</p>
        <Button className="mt-6" onClick={() => window.history.back()}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="image-gallery">
          <img src={car.image} alt={car.name} className="w-full h-auto rounded-lg shadow-lg object-cover" />
          {/* Add more image thumbnails here if needed */}
        </div>

        <div className="details-section">
          <h1 className="text-4xl font-bold mb-2">{car.make} {car.model}</h1>
          <p className="text-2xl text-primary font-semibold mb-4">${car.price} <span className="text-lg text-muted-foreground">/ day</span></p>
          <Badge variant="secondary" className="mb-6">{car.availability}</Badge>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{car.description}</CardDescription>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {car.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex gap-4 mt-8">
            <Button size="lg">Add to Cart</Button>
            <Button size="lg" variant="outline">Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

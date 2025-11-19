import React from 'react';
import HeroSection from '@/components/layout/HeroSection';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Featured Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Compact Sedan</CardTitle>
                <CardDescription>Perfect for city driving and fuel efficiency.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <img src="https://via.placeholder.com/300x200" alt="Compact Sedan" className="w-full h-auto rounded-md mb-4" />
                <p>Starting from <span className="font-semibold text-lg">$35/day</span></p>
              </CardContent>
              <CardFooter>
                <Link to="/product/1">
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Family SUV</CardTitle>
                <CardDescription>Spacious and comfortable for your family trips.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <img src="https://via.placeholder.com/300x200" alt="Family SUV" className="w-full h-auto rounded-md mb-4" />
                <p>Starting from <span className="font-semibold text-lg">$60/day</span></p>
              </CardContent>
              <CardFooter>
                <Link to="/product/2">
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Luxury Sports Car</CardTitle>
                <CardDescription>Experience elegance and performance.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <img src="https://via.placeholder.com/300x200" alt="Luxury Sports Car" className="w-full h-auto rounded-md mb-4" />
                <p>Starting from <span className="font-semibold text-lg">$120/day</span></p>
              </CardContent>
              <CardFooter>
                <Link to="/product/3">
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <Link to="/shop">
            <Button className="mt-10" size="lg">Explore All Cars</Button>
          </Link>
        </div>
      </section>

      {/* Placeholder for other sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground">Reliable service, wide selection, and competitive prices.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

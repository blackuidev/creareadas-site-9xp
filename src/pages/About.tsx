import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Lightswind Car Rentals</h1>

      <section className="mb-12">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg mb-4">
              Lightswind Car Rentals is dedicated to providing premium car rental services across the globe. 
              Our mission is to make car rental easy, affordable, and accessible for everyone, 
              whether for business trips, family vacations, or daily commutes.
            </p>
            <p className="text-lg">
              Founded in 2023, we've grown from a small local service to a recognized name 
              in the car rental industry, known for our exceptional customer service and diverse fleet.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Satisfaction</CardTitle>
            </CardHeader>
            <CardContent>
              We prioritize our customers' needs and strive to exceed their expectations with every rental.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Reliability</CardTitle>
            </CardHeader>
            <CardContent>
              Our fleet is meticulously maintained to ensure safety and performance, offering peace of mind.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              Constantly integrating new technologies to streamline the rental process and enhance user experience.
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src="https://via.placeholder.com/150/random?text=JD" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-muted-foreground">CEO & Founder</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src="https://via.placeholder.com/150/random?text=JS" alt="Jane Smith" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-muted-foreground">Chief Operations Officer</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src="https://via.placeholder.com/150/random?text=AB" alt="Alice Brown" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold">Alice Brown</h3>
            <p className="text-muted-foreground">Head of Customer Relations</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

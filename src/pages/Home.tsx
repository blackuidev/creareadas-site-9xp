import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const categories = [
    { name: "Fresh Fruits", image: "https://via.placeholder.com/150/FFD700/FFFFFF?text=Fruits", description: "Healthy and delicious." },
    { name: "Organic Vegetables", image: "https://via.placeholder.com/150/228B22/FFFFFF?text=Veggies", description: "Farm-fresh goodness." },
    { name: "Dairy & Eggs", image: "https://via.placeholder.com/150/ADD8E6/FFFFFF?text=Dairy", description: "Everyday essentials." },
    { name: "Bakery", image: "https://via.placeholder.com/150/A0522D/FFFFFF?text=Bakery", description: "Freshly baked treats." },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 to-lime-400 text-white py-20 px-4 rounded-lg shadow-lg text-center">
        <h1 className="text-5xl font-extrabold mb-4 animate-fade-in-down">
          GrocerEase: Your Freshness Delivered!
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Get the freshest groceries, dairy, bakery, and more delivered right to your doorstep. Quality and convenience guaranteed.
        </p>
        <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100 animate-scale-in">
          <Link to="/shop">Start Shopping Now!</Link>
        </Button>
      </section>

      {/* Featured Categories */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Shop By Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <CardHeader className="p-0">
                <img src={category.image} alt={category.name} className="w-full h-40 object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl font-semibold mb-2">{category.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">{category.description}</CardDescription>
                <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                  <Link to="/shop">View {category.name}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="bg-gray-50 p-8 rounded-lg shadow-inner text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">About GrocerEase</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          We are committed to providing you with the highest quality groceries and an unparalleled shopping experience. Learn more about our mission and values.
        </p>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link to="/about">Learn More</Link>
        </Button>
      </section>
    </div>
  );
};

export default Home;
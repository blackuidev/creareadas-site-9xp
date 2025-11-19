import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  // Placeholder cart items
  const cartItems = [
    { id: 1, name: "Mid-size Sedan", duration: "3 days", price: 45, total: 135, image: "https://via.placeholder.com/100x70" },
    { id: 2, name: "Economy Hatchback", duration: "5 days", price: 30, total: 150, image: "https://via.placeholder.com/100x70" },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.total, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Rental Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-muted-foreground">Your cart is empty. <Link to="/shop" className="text-primary hover:underline">Start browsing cars!</Link></p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="h-16 w-24 object-cover rounded-md" />
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-muted-foreground">Duration: {item.duration} @ ${item.price}/day</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">${item.total.toFixed(2)}</p>
                  <Button variant="ghost" size="sm" className="text-red-500">Remove</Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="w-full lg:w-1/3">
            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (10%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Button className="w-full mt-6">Proceed to Checkout</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

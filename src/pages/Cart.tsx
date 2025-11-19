import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter } from "@/components/ui/table";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const dummyCartItems: CartItem[] = [
  { id: "1", name: "Organic Apples (1kg)", price: 3.99, quantity: 2, image: "https://via.placeholder.com/50/FF0000/FFFFFF?text=Apples" },
  { id: "3", name: "Whole Milk (1L)", price: 1.89, quantity: 1, image: "https://via.placeholder.com/50/87CEEB/FFFFFF?text=Milk" },
  { id: "6", name: "Bananas (1kg)", price: 1.50, quantity: 3, image: "https://via.placeholder.com/50/FFFF00/000000?text=Bananas" },
];

const Cart: React.FC = () => {
  const subtotal = dummyCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.00; // Dummy shipping cost
  const total = subtotal + shipping;

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center text-gray-800">Your Shopping Cart</h1>

      {dummyCartItems.length === 0 ? (
        <Card className="p-8 text-center">
          <CardTitle className="text-2xl mb-4">Your cart is empty!</CardTitle>
          <CardDescription className="mb-6">Looks like you haven't added anything to your cart yet.</CardDescription>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link to="/shop">Start Shopping</Link>
          </Button>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Items in your cart</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Product</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummyCartItems.map(item => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
                    </TableCell>
                    <TableCell className="font-medium">
                      <Link to={`/shop/${item.id}`} className="hover:underline text-green-700">
                        {item.name}
                      </Link>
                    </TableCell>
                    <TableCell>${item.price.toFixed(2)}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell className="text-right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={4}>Subtotal</TableCell>
                  <TableCell className="text-right">${subtotal.toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={4}>Shipping</TableCell>
                  <TableCell className="text-right">${shipping.toFixed(2)}</TableCell>
                </TableRow>
                <TableRow className="font-bold text-lg">
                  <TableCell colSpan={4}>Total</TableCell>
                  <TableCell className="text-right">${total.toFixed(2)}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-end gap-4 p-6">
            <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
              <Link to="/shop">Continue Shopping</Link>
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">Proceed to Checkout</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default Cart;
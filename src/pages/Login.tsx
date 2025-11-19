import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Login: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Welcome Back!</CardTitle>
          <CardDescription>Log in to access your account and manage your orders.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
            Login
          </Button>
          <p className="text-center text-sm text-gray-600">
            Don't have an account? <a href="#" className="text-green-700 hover:underline">Sign Up</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
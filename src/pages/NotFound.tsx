import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-4">
      <Card className="text-center p-8 shadow-lg">
        <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</p>
        <p className="text-lg text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link to="/">Go to Home</Link>
        </Button>
      </Card>
    </div>
  );
};

export default NotFound;
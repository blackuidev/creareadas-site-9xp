import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-16rem)] flex flex-col items-center justify-center text-center px-4 py-12">
      <h1 className="text-9xl font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/">
        <Button size="lg">Go to Homepage</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;

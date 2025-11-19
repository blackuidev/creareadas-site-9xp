import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Card className="p-8 space-y-4 max-w-lg mx-auto mt-10 text-center">
    <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
    <p className="text-lg">Oops! The page you are looking for does not exist.</p>
    <Button asChild>
      <Link to="/">Go to Home</Link>
    </Button>
  </Card>
);

export default NotFound;

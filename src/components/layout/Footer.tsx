import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Card className="p-6 mt-8 w-full bg-background/95 shadow-lg dark:bg-zinc-900/95 border-t border-border/40">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Creareadas Site. All rights reserved.</p>
        </div>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-primary transition-colors">
            <Button variant="link" className="p-0 h-auto">Home</Button>
          </Link>
          <Link to="/shop" className="hover:text-primary transition-colors">
            <Button variant="link" className="p-0 h-auto">Shop</Button>
          </Link>
          <Link to="/about" className="hover:text-primary transition-colors">
            <Button variant="link" className="p-0 h-auto">About</Button>
          </Link>
          <Link to="/login" className="hover:text-primary transition-colors">
            <Button variant="link" className="p-0 h-auto">Login</Button>
          </Link>
        </nav>
      </div>
    </Card>
  );
};

export default Footer;
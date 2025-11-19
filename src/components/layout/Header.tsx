import { Button } from "@/components/ui/button";
import { ToggleTheme } from "@/components/ui/toggle-theme";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const Header = () => {
  return (
    <Card className="sticky top-0 z-50 p-4 bg-background/95 shadow-md flex justify-between items-center dark:bg-zinc-900/95 border-b border-border/40">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          Creareadas
        </Link>
        <nav className="flex items-center space-x-4">
          <Link to="/">
            <Button variant="ghost">Home</Button>
          </Link>
          <Link to="/shop">
            <Button variant="ghost">Shop</Button>
          </Link>
          <Link to="/about">
            <Button variant="ghost">About</Button>
          </Link>
          <Link to="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <ToggleTheme />
        </nav>
      </div>
    </Card>
  );
};

export default Header;
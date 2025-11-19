import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from '@/components/ui/toggle-theme';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">Lightswind Car Rentals</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link to="/shop" className={navigationMenuTriggerStyle()}>
                Shop
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link to="/about" className={navigationMenuTriggerStyle()}>
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Link to="/login">
            <Button variant="ghost">Login</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

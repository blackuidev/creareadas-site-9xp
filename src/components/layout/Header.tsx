import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Youtube, Upload, Bell, Menu } from 'lucide-react'; // Assuming lucide-react is installed

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/results?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 flex items-center justify-between">
      {/* Left section: Logo and Menu */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <Link to="/" className="flex items-center space-x-1">
          <Youtube className="h-8 w-8 text-red-600" />
          <span className="text-xl font-bold">YouTubeClone</span>
        </Link>
      </div>

      {/* Center section: Search bar */}
      <div className="flex-1 max-w-xl mx-4 hidden md:flex">
        <form onSubmit={handleSearch} className="flex w-full">
          <Input
            type="text"
            placeholder="Search"
            className="flex-1 rounded-r-none border-r-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" variant="outline" className="rounded-l-none">
            <Search className="h-5 w-5" />
          </Button>
        </form>
      </div>

      {/* Right section: Icons */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Upload className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;

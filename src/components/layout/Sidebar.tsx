import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Home, Compass, Library, History, Clock, ThumbsUp, ChevronDown } from 'lucide-react'; // Assuming lucide-react is installed

const Sidebar: React.FC = () => {
  return (
    <ScrollArea className="h-full w-56 border-r dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
      <nav className="space-y-1">
        <Link to="/">
          <Button variant="ghost" className="w-full justify-start space-x-2">
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Button>
        </Link>
        <Link to="/explore"> {/* Placeholder for an explore page */}
          <Button variant="ghost" className="w-full justify-start space-x-2">
            <Compass className="h-5 w-5" />
            <span>Explore</span>
          </Button>
        </Link>
        <Link to="/library"> {/* Placeholder for a library page */}
          <Button variant="ghost" className="w-full justify-start space-x-2">
            <Library className="h-5 w-5" />
            <span>Library</span>
          </Button>
        </Link>
        <Link to="/history"> {/* Placeholder for a history page */}
          <Button variant="ghost" className="w-full justify-start space-x-2">
            <History className="h-5 w-5" />
            <span>History</span>
          </Button>
        </Link>
      </nav>

      <div className="my-4 border-t dark:border-gray-700 pt-4">
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 px-2">Subscriptions</h3>
        <nav className="space-y-1">
          {/* Example subscription links */}
          <Link to="/channel/lofigirl">
            <Button variant="ghost" className="w-full justify-start space-x-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://yt3.ggpht.com/a-/AAuE7mB_R1Z2Y3X4W5V6U7T8S9A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S=s68-c-k-c0x00ffffff-no-rj-mo" />
                <AvatarFallback>LG</AvatarFallback>
              </Avatar>
              <span className="truncate">Lofi Girl</span>
            </Button>
          </Link>
          <Link to="/channel/mkbhd">
            <Button variant="ghost" className="w-full justify-start space-x-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://yt3.ggpht.com/a-/AAuE7mB_S5T6R7Q8P9O0N1M2L3K4J5I6H7G8F9E0D1C2B3A4S5R6Q7P8O9N0M1L2K3J4I5H6G7F8E9D0C1B2A3=s68-c-k-c0x00ffffff-no-rj-mo" />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
              <span className="truncate">Marques Brownlee</span>
            </Button>
          </Link>
          <Button variant="ghost" className="w-full justify-start space-x-2">
            <ChevronDown className="h-5 w-5" />
            <span>Show more</span>
          </Button>
        </nav>
      </div>
    </ScrollArea>
  );
};

export default Sidebar;

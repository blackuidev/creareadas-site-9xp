import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <Card className="rounded-none mt-auto border-t bg-gray-50 dark:bg-gray-950">
      <CardContent className="py-6 px-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Button variant="link" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            Privacy Policy
          </Button>
          <Button variant="link" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            Terms of Service
          </Button>
          <Button variant="link" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            Contact Us
          </Button>
        </div>
      </CardContent>
      <Separator className="my-0" />
      <div className="py-3 px-8 text-xs text-center text-gray-400 dark:text-gray-500">
        Built with ❤️ using Lightswind UI
      </div>
    </Card>
  );
};

export default Footer;
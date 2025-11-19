import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t bg-background py-6 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} Lightswind Car Rentals. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="hover:underline mx-2">Privacy Policy</a> | 
          <a href="#" className="hover:underline mx-2">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

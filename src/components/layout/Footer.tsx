import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t py-6 mt-8">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} LuxMotors & Tech. All rights reserved.</p>
        <p className="mt-1">Designed with 💙 and Lightswind UI.</p>
      </div>
    </footer>
  );
};

export default Footer;

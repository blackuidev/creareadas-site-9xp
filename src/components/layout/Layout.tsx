import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  // children?: React.ReactNode; // No longer needed with Outlet
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* This is where the routed components will be rendered */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

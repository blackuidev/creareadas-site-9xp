import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar'; // Import the new Sidebar

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-50">
      <Header />
      <div className="flex flex-1">
        <Sidebar /> {/* Integrate Sidebar */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

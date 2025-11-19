import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t dark:border-gray-700 bg-white dark:bg-gray-900 p-4 text-center text-sm text-gray-600 dark:text-gray-400">
      &copy; {new Date().getFullYear()} YouTubeClone. All rights reserved.
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} Lightswind Rentals. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

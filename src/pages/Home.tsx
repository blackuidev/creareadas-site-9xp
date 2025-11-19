import HeroSection from "../components/layout/HeroSection";

const Home = () => {
  return (
    <div className="min-h-screen"> {/* Ensure Home page takes full height for AuroraBackground */}
      <HeroSection />
      {/* Other content for the Home page can go here below the hero */}
      <div className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to Creareadas Car Rentals</h2>
        <p className="text-lg text-gray-700">Your journey begins here. Browse our extensive selection of vehicles and book with confidence.</p>
      </div>
    </div>
  );
};

export default Home;
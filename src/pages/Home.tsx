import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto py-12 px-4 min-h-[calc(100vh-160px)] flex items-center justify-center">
      <Card className="p-8 text-center bg-gradient-to-br from-indigo-700 to-purple-900 text-white shadow-lg border border-indigo-500 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-500">John Doe</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          A passionate Full-Stack Developer creating beautiful and functional web experiences.
        </p>
        <Link to="/projects">
          <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg">
            View My Work
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default Home;

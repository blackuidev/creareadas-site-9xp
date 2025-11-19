import React from 'react';
import { Button } from '@/components/ui/button';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <AuroraBackground>
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-800 py-24 sm:py-32 lg:py-40 text-white flex items-center justify-center min-h-[500px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Drive Your Dreams: Rent a Car Today
            </h1>
            <p className="mt-6 text-lg leading-8">
              Explore our wide range of vehicles, from economy cars to luxury SUVs. 
              Find the perfect ride for your next adventure with Lightswind Car Rentals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/shop">
                <Button size="lg" className="px-8 py-3 bg-white text-indigo-900 hover:bg-gray-100">
                  Browse Cars
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="px-8 py-3 text-white border-white hover:bg-white hover:text-indigo-900">
                Learn More <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default HeroSection;

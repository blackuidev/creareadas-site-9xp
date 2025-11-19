import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShinyText } from '@/components/ui/shiny-text';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { SparkleParticles } from '@/components/ui/sparkle-particles';

const NotFound: React.FC = () => {
  return (
    <AuroraBackground>
      <SparkleParticles
        minSize={0.6}
        maxSize={1.5}
        particleDensity={50}
        className="absolute inset-0"
      />
      <div className="min-h-[calc(100vh-160px)] flex flex-col items-center justify-center text-center p-4 relative z-10">
        <h1 className="text-7xl md:text-9xl font-extrabold mb-4">
          <ShinyText text="404" className="inline-block" />
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
          Page Not Found
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button size="lg" className="text-lg px-8 py-4">
            Go to Home
          </Button>
        </Link>
      </div>
    </AuroraBackground>
  );
};

export default NotFound;

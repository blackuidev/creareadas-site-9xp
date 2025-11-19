import React from 'react';
import { ShinyText } from '@/components/ui/shiny-text';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { SparkleParticles } from '@/components/ui/sparkle-particles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About: React.FC = () => {
  return (
    <AuroraBackground>
      <SparkleParticles
        minSize={0.6}
        maxSize={1.5}
        particleDensity={50}
        className="absolute inset-0"
      />
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-160px)]">
        <Card className="w-full max-w-3xl p-8 shadow-2xl rounded-lg text-center bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-6">
            <CardTitle className="text-5xl font-extrabold mb-4">
              <ShinyText text="About LuxMotors & Tech" className="inline-block" />
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg leading-relaxed text-muted-foreground">
            <p className="mb-6">
              At LuxMotors & Tech, we are dedicated to providing an unparalleled experience in the world of luxury vehicles and premium technology. Our curated selection features the latest innovations in automotive engineering and state-of-the-art gadgets designed to elevate your lifestyle.
            </p>
            <p className="mb-6">
              Founded with a passion for excellence and a commitment to customer satisfaction, we strive to bring you products that combine sophisticated design, cutting-edge performance, and sustainable solutions. From exhilarating electric SUVs to high-performance laptops, every item in our collection is chosen for its quality, innovation, and ability to inspire.
            </p>
            <p>
              Discover the future of luxury with LuxMotors & Tech – where your aspirations meet reality.
            </p>
          </CardContent>
        </Card>
      </div>
    </AuroraBackground>
  );
};

export default About;

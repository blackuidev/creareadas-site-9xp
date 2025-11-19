import React from 'react';
import HeroSection from '@/components/layout/HeroSection';
import { Button } from '@/components/ui/button';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { ShinyText } from '@/components/ui/shiny-text';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { SparkleParticles } from '@/components/ui/sparkle-particles';
import { ScrollCarousel } from '@/components/ui/scroll-carousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const featuredProducts = [
  {
    title: 'Electric SUV E-Trail',
    description: 'Experience the future of mobility with our latest electric SUV. Range up to 300 miles.',
    header: (
      <img
        src="https://images.unsplash.com/photo-1621257962137-d2d89052a5f4?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Electric SUV E-Trail"
        className="object-cover object-center w-full h-full rounded-xl"
      />
    ),
    className: 'md:col-span-2',
    icon: <span className="text-xl">🚗</span>,
  },
  {
    title: 'High-Performance Laptop X1',
    description: 'Unleash your productivity with cutting-edge processing power.',
    header: (
      <img
        src="https://images.unsplash.com/photo-1616422736733-14902166925c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="High-Performance Laptop X1"
        className="object-cover object-center w-full h-full rounded-xl"
      />
    ),
    className: 'md:col-span-1',
    icon: <span className="text-xl">💻</span>,
  },
  {
    title: 'Luxury Sedan S-Class',
    description: 'Redefine luxury travel with unparalleled comfort and elegance.',
    header: (
      <img
        src="https://images.unsplash.com/photo-1605335801932-843e93b2a24c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Luxury Sedan S-Class"
        className="object-cover object-center w-full h-full rounded-xl"
      />
    ),
    className: 'md:col-span-1',
    icon: <span className="text-xl">✨</span>,
  },
  {
    title: 'Premium Wireless Headphones Alpha',
    description: 'Immersive sound experience with advanced noise cancellation.',
    header: (
      <img
        src="https://images.unsplash.com/photo-1505740420928-5e560c06f2e2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Premium Wireless Headphones Alpha"
        className="object-cover object-center w-full h-full rounded-xl"
      />
    ),
    className: 'md:col-span-2',
    icon: <span className="text-xl">🎧</span>,
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah K.',
    quote: 'Absolutely love my new S-Class. The buying process was seamless!',
    avatar: 'https://api.dicebear.com/8.x/lorelei/svg?seed=Sarah'
  },
  {
    id: 2,
    name: 'John D.',
    quote: 'The electric SUV is a game-changer. Great service and excellent quality.',
    avatar: 'https://api.dicebear.com/8.x/lorelei/svg?seed=John'
  },
  {
    id: 3,
    name: 'Emily R.',
    quote: 'My Alpha headphones are fantastic! Clear sound and super comfortable.',
    avatar: 'https://api.dicebear.com/8.x/lorelei/svg?seed=Emily'
  },
  {
    id: 4,
    name: 'Michael B.',
    quote: 'LuxMotors & Tech provided an outstanding experience from start to finish.',
    avatar: 'https://api.dicebear.com/8.x/lorelei/svg?seed=Michael'
  },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <AuroraBackground>
        <SparkleParticles
          minSize={0.6}
          maxSize={1.5}
          particleDensity={50}
          className="absolute inset-0"
        />
        <HeroSection
          title={<ShinyText text="Drive Your Future, Live Your Passion" className="text-5xl md:text-7xl font-bold text-center" />}
          description="Explore an exclusive collection of luxury vehicles and cutting-edge tech. Elevate your lifestyle with unparalleled performance and design."
          buttonText="Explore Our Collection"
          buttonLink="/shop"
          backgroundImage="https://images.unsplash.com/photo-1560959040-420a7d97e74d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </AuroraBackground>

      <section className="py-16 md:py-24 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <ShinyText text="Featured Collections" className="inline-block" />
          </h2>
          <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
            {featuredProducts.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-900 to-indigo-900 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            What Our <ShinyText text="Clients Say" className="inline-block text-white" />
          </h2>
          <ScrollCarousel
            items={testimonials.map(t => (
              <Card key={t.id} className="w-72 h-48 flex flex-col justify-between p-4 mx-2 bg-card text-card-foreground shadow-lg rounded-xl">
                <CardContent className="flex-grow text-center flex flex-col items-center justify-center p-0">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mb-3" />
                  <p className="italic text-sm line-clamp-3">\"{t.quote}\"</p>
                </CardContent>
                <CardFooter className="text-center flex justify-center p-0">
                  <p className="font-semibold text-primary">- {t.name}</p>
                </CardFooter>
              </Card>
            ))}
            itemWidth={288} // w-72 is 288px
            gap={16} // mx-2 implies gap
            speed={0.1}
            autoPlay={true}
            loop={true}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

import { AuroraBackground } from "@/components/ui/aurora-background";
import { ShinyText } from "@/components/ui/shiny-text";
import { GradientButton } from "@/components/ui/gradient-button";

const HeroSection = () => {
  return (
    <AuroraBackground>
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <ShinyText className="text-4xl md:text-7xl font-bold text-white mb-4">
          Unleash Your Next Adventure
        </ShinyText>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          Discover a world of possibilities with our premium car rental service.
          Seamless booking, unbeatable prices, unforgettable journeys.
        </p>
        <GradientButton className="px-8 py-3 text-lg">
          Explore Our Fleet
        </GradientButton>
      </div>
    </AuroraBackground>
  );
};

export default HeroSection;
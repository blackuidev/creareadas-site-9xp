import { AuroraBackground } from "@/app/component2/ui/aurora-background";
import { TypingText } from "@/app/component2/ui/typing-text";
import { ShineButton } from "@/app/component2/ui/shine-button";

const Home = () => {
  return (
    <AuroraBackground className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-4">
      <div className="text-center space-y-6 max-w-3xl relative z-10">
        <TypingText
          text="Your Journey Starts Here: Rent the Perfect Car"
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        />
        <p className="text-lg md:text-xl text-gray-300">
          Explore our wide selection of vehicles for every adventure. Easy booking, great prices, unforgettable experiences.
        </p>
        <ShineButton className="mt-8 px-8 py-4 text-lg font-semibold">
          Browse Our Fleet
        </ShineButton>
      </div>
    </AuroraBackground>
  );
};

export default Home;
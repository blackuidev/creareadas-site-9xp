import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Home = () => (
  <Card className="p-8 space-y-4 max-w-lg mx-auto mt-10">
    <h1 className="text-3xl font-bold">Car Rental Home</h1>
    <p>Find the perfect car for your trip. Click below to browse cars.</p>
    <Button>Browse Cars</Button>
  </Card>
);

export default Home;
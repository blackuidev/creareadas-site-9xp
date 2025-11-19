import { useParams } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Card className="p-8 space-y-4 max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold">Product Details for ID: {id}</h1>
      <p>This is where the details for product {id} would be displayed.</p>
      <Button>Add to Cart</Button>
    </Card>
  );
};

export default ProductDetail;

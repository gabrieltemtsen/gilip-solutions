/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/Card';
import { Button } from './Button';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleSubscribe = () => {
    alert({
      title: "Success!",
      description: `You've subscribed to ${product.name}. We'll contact you soon.`,
    });
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border rounded-lg">
      <div className="relative h-48 w-full">
        <img
          src={product.image || ''}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-semibold mb-2">{product.name}</CardTitle>
        <CardDescription className="text-sm text-gray-600 mb-3">{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-xl font-bold text-blue-600">
        &#8358; {product.price.toLocaleString()}
        </p>
      </CardContent>
      <CardFooter className="p-4 flex gap-2">
        <Button
          variant="outline"
          className="w-full"
          asChild
        >
          <Link href={`/products/${product.id}`}>
          Purchase
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

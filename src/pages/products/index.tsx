import Layout from '@/components/Layout';
import ProductCard, { Product } from '@/components/ProductCard';

const products: Product[] = [
  {
    id: '1',
    name: 'Gilip Web solutions',
    description: 'Hire our team of experts to build your custom web application.',
    price: 500000,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
  },
  {
    id: '2',
    name: 'Virtual Internship',
    description: 'Get access to our network of top tech talents for your next project.',
    price: 50000,
    image: 'https://images.unsplash.com/photo-1472220625704-91e1462799b2',
  },
  {
    id: '3',
    name: 'Attend Annual Event',
    description: 'Join us at our annual conference for a chance to network and learn. get your tickets now.',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1438557068880-c5f474830377',
  },
];

export default function Products() {
  return (
    <Layout>
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Products</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Discover our range of innovative solutions designed to transform your business
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
}
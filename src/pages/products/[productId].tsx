/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { Button } from '@/components/Button';
import { CheckCircle2 } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <Layout>
       <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
          {/* Product Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src={''}
              alt={'product.name'}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              
            />
          </div>

          {/* Product Details */}
          <div className="mt-10 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight">{productId}</h1>
            <div className="mt-4">
              <p className="text-4xl font-bold tracking-tight text-blue-600">
                ${productId}
              </p>
            </div>
            <div className="mt-6">
              <p className="text-lg text-muted-foreground">{productId}</p>
            </div>

            {/* Features List */}
            <div className="mt-10">
              <h3 className="text-sm font-medium">Key Features</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-5 w-5 flex-none text-blue-600" />
                    <span className="text-sm">{'FEAT'}</span>
                  </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex gap-x-4">
              <Button size="lg" className="flex-1">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};
export default ProductDetail;

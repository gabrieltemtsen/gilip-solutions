/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/Button';
import Layout from '@/components/Layout';

const features = [
  {
    name: 'Web Solutions',
    description: 'Scalable solutions designed for enterprise-level businesses',
  },
  {
    name: 'SEO Integration',
    description: 'Seamless integration with leading search engines for better visibility',
  },
  {
    name: 'Organize Tech Events',
    description: 'Host and attend tech events to network and learn',
  },
  {
    name: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance',
  },
];

export default function Home() {
  return (
    <Layout>
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Transform Your Business with Gilip Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Empowering businesses with innovative technology solutions that drive growth and efficiency.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to scale your business
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We provide comprehensive solutions that help businesses thrive in the digital age.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                    <CheckCircle2 className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate">
        <div className="absolute inset-0 bg-blue-50 dark:bg-blue-950/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to transform your business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Join thousands of businesses that trust Gilip Solutions for their technology needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
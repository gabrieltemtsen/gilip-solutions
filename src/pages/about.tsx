/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Users, Target, Lightbulb, } from 'lucide-react';
import { Button } from '@/components/Button';
import Layout from '@/components/Layout';

const values = [
  {
    name: 'Innovation',
    description: 'We constantly push boundaries to deliver cutting-edge solutions.',
    icon: Lightbulb,
  },
  {
    name: 'Customer Focus',
    description: 'Your success is our priority. We are committed to exceeding expectations.',
    icon: Target,
  },
  {
    name: 'Collaboration',
    description: 'We work together with our clients to achieve exceptional results.',
    icon: Users,
  },
];

export default function About() {
  return (
    <Layout>
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">About Gilip Solutions</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We are a team of passionate technologists dedicated to helping businesses succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-blue-600">Our Mission</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight">
                  Empowering businesses through technology
                </p>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  At Gilip Solutions, we believe in the transformative power of technology. Our mission is to provide innovative solutions that help businesses thrive in an increasingly digital world.
                </p>
                <div className="mt-10">
                  <Button asChild>
                    <Link href="/contact">Work with us</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team collaboration"
                className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight">
              What drives us forward
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our core values shape everything we do and guide our interactions with clients and partners.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.name} className="flex flex-col items-center text-center">
                  <dt className="flex flex-col items-center gap-y-4">
                    <div className="rounded-lg bg-blue-600/10 p-4">
                      <value.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="text-base font-semibold leading-7">{value.name}</div>
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
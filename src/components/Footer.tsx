import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="space-y-8 md:w-1/2">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Gilip Solutions
            </h2>
            <p className="mt-2 text-muted-foreground">
              Innovative technology solutions for modern businesses
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span className="text-sm">Rayfield, Jos,  Plateau State</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="text-sm">+234 (090) 523-90212</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-600" />
              <span className="text-sm">contact@gilipsolutions.com</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-0">
          <h3 className="text-sm font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {[
              { name: 'About Us', href: '/about' },
              { name: 'Products', href: '/products' },
              { name: 'Contact', href: '/contact' },
              { name: 'Privacy Policy', href: '/privacy' },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Gilip Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/Button';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Get in touch with our team. We're here to help and answer any questions you might have.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our team is ready to assist you with any inquiries about our products and services.
            </p>

            <dl className="mt-8 space-y-6">
              <div className="flex gap-x-4">
                <dt>
                  <MapPin className="h-6 w-6 text-blue-600" />
                </dt>
                <dd>
                  <p className="text-sm font-semibold">Address</p>
                  <p className="mt-1 text-muted-foreground">
                    No 2<br />
                    opp Steel rolling mill,
                    Rayfield Jos,<br />
                    Plateau State
                  </p>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt>
                  <Phone className="h-6 w-6 text-blue-600" />
                </dt>
                <dd>
                  <p className="text-sm font-semibold">Phone</p>
                  <p className="mt-1 text-muted-foreground">+234 (090) 523-9021</p>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt>
                  <Mail className="h-6 w-6 text-blue-600" />
                </dt>
                <dd>
                  <p className="text-sm font-semibold">Email</p>
                  <p className="mt-1 text-muted-foreground">contact@gilipsolutions.com</p>
                </dd>
              </div>
            </dl>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        {/* Map Section */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative aspect-[2/1] overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.828221074226!2d8.872552114157084!3d9.896527192905984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105375cfc13e71f7%3A0x44adf7762e5d1d10!2sJos%2C%20Plateau%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1698937161045!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
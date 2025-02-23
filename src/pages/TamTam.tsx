import React from 'react';
import { Share2, Users, MessageCircle, Globe } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Community Building',
    description: 'Connect with African communities worldwide.'
  },
  {
    icon: MessageCircle,
    title: 'Real-time Chat',
    description: 'Instant messaging in multiple languages.'
  },
  {
    icon: Share2,
    title: 'Content Sharing',
    description: 'Share stories, photos, and videos easily.'
  },
  {
    icon: Globe,
    title: 'Cultural Exchange',
    description: 'Bridge cultures through social connection.'
  }
];

const TamTam = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-4xl font-bold mb-6">Tam Tam S.A.</h1>
              <p className="text-xl mb-8">
                The fastest-growing social media platform connecting African communities.
              </p>
              <a
                href="#contact"
                className="inline-block bg-white text-green-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Join Now
              </a>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80"
                alt="Social Connection"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect, share, and engage with the African diaspora
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md">
                <feature.icon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TamTam;
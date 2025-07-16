import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, Award, Trophy, Crown } from 'lucide-react';

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: 'Title Sponsor',
      icon: Crown,
      color: 'bg-yellow-100 text-yellow-800',
      sponsors: [
        {
          name: 'Tech Innovations Ltd.',
          logo: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg',
          description: 'Leading technology company supporting innovation in education.',
          website: 'https://example.com',
          contribution: 'Main sponsor for Confluence 2024',
        },
      ],
    },
    {
      tier: 'Gold Sponsors',
      icon: Trophy,
      color: 'bg-orange-100 text-orange-800',
      sponsors: [
        {
          name: 'Digital Solutions Inc.',
          logo: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg',
          description: 'Providing digital transformation solutions for businesses.',
          website: 'https://example.com',
          contribution: 'Event management systems and digital infrastructure',
        },
        {
          name: 'Creative Studios',
          logo: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg',
          description: 'Award-winning creative agency specializing in brand experiences.',
          website: 'https://example.com',
          contribution: 'Branding and marketing materials for all events',
        },
      ],
    },
    {
      tier: 'Silver Sponsors',
      icon: Award,
      color: 'bg-gray-100 text-gray-800',
      sponsors: [
        {
          name: 'Local Food Corp.',
          logo: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg',
          description: 'Premium food and beverage services for events.',
          website: 'https://example.com',
          contribution: 'Catering services for all event days',
        },
        {
          name: 'Transport Solutions',
          logo: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg',
          description: 'Reliable transportation services across the region.',
          website: 'https://example.com',
          contribution: 'Transportation for participants and guests',
        },
        {
          name: 'Print Media House',
          logo: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg',
          description: 'Professional printing and media production company.',
          website: 'https://example.com',
          contribution: 'Printing services and promotional materials',
        },
      ],
    },
    {
      tier: 'Bronze Sponsors',
      icon: Star,
      color: 'bg-blue-100 text-blue-800',
      sponsors: [
        {
          name: 'Equipment Rental Co.',
          logo: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg',
          description: 'Audio-visual equipment and technical support services.',
          website: 'https://example.com',
          contribution: 'Sound and lighting equipment for performances',
        },
        {
          name: 'Security Services Ltd.',
          logo: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg',
          description: 'Professional security and crowd management services.',
          website: 'https://example.com',
          contribution: 'Security personnel and crowd management',
        },
        {
          name: 'Decoration Masters',
          logo: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg',
          description: 'Event decoration and setup specialists.',
          website: 'https://example.com',
          contribution: 'Venue decoration and stage setup',
        },
        {
          name: 'Photography Studio',
          logo: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg',
          description: 'Professional photography and videography services.',
          website: 'https://example.com',
          contribution: 'Event photography and videography',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Sponsors
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are grateful to our sponsors who make our events possible. Their support enables us to create memorable experiences for everyone.
          </p>
        </motion.div>

        {/* Sponsor Tiers */}
        <div className="space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <motion.section
              key={tier.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: tierIndex * 0.2 }}
            >
              <div className="text-center mb-8">
                <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${tier.color} mb-4`}>
                  <tier.icon className="w-5 h-5" />
                  <span className="font-semibold">{tier.tier}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{tier.tier}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: sponsorIndex * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center p-8">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {sponsor.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {sponsor.description}
                      </p>
                      <div className="bg-blue-50 p-3 rounded-lg mb-4">
                        <p className="text-sm font-medium text-blue-800">
                          Contribution: {sponsor.contribution}
                        </p>
                      </div>
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Visit Website
                        <ExternalLink className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-blue-600 rounded-lg p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Become a Sponsor
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with us to reach thousands of students and faculty at NIT Kurukshetra. Join our community of supporters who believe in fostering education and culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sponsors@madclub.nitkkr.ac.in"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/sponsorship-brochure.pdf"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Download Brochure
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Sponsors;
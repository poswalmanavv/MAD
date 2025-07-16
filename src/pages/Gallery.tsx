import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'confluence', name: 'Confluence' },
    { id: 'workshops', name: 'Workshops' },
    { id: 'cultural', name: 'Cultural Events' },
    { id: 'team', name: 'Team Activities' },
  ];

  const images = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
      category: 'confluence',
      title: 'Confluence 2023 Opening Ceremony',
      description: 'The grand opening of our biggest cultural fest',
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg',
      category: 'cultural',
      title: 'Dance Performance',
      description: 'Amazing dance performance by our talented students',
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg',
      category: 'workshops',
      title: 'Technical Workshop',
      description: 'Interactive technical workshop for skill development',
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
      category: 'team',
      title: 'Team Meeting',
      description: 'MAD Club team planning session',
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      category: 'confluence',
      title: 'Musical Evening',
      description: 'Live music performance during Confluence',
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
      category: 'cultural',
      title: 'Art Exhibition',
      description: 'Student art exhibition showcasing creativity',
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg',
      category: 'workshops',
      title: 'Leadership Workshop',
      description: 'Workshop on leadership and management skills',
    },
    {
      id: 8,
      url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      category: 'team',
      title: 'Team Building Activity',
      description: 'Fun team building exercises and games',
    },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

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
            Photo Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our memorable moments, events, and activities through our comprehensive photo gallery.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
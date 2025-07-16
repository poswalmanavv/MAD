import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Confluence 2024 - Cultural Festival',
      date: '2024-03-15',
      time: '10:00 AM',
      location: 'Main Campus, NIT Kurukshetra',
      description: 'The biggest cultural fest of NIT Kurukshetra featuring competitions, performances, and exhibitions.',
      category: 'Festival',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
      registrationOpen: true,
    },
    {
      id: 2,
      title: 'Leadership Workshop',
      date: '2024-02-20',
      time: '2:00 PM',
      location: 'Seminar Hall, Academic Block',
      description: 'Interactive workshop on leadership skills and team management for club members.',
      category: 'Workshop',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg',
      registrationOpen: true,
    },
    {
      id: 3,
      title: 'Technical Seminar on Event Management',
      date: '2024-02-25',
      time: '11:00 AM',
      location: 'Conference Room, Admin Block',
      description: 'Learn about modern event management techniques and digital tools.',
      category: 'Seminar',
      image: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg',
      registrationOpen: true,
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: 'Confluence 2023',
      date: '2023-03-18',
      location: 'Main Campus, NIT Kurukshetra',
      description: 'Successfully organized cultural fest with 5000+ participants.',
      category: 'Festival',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      participants: '5000+',
    },
    {
      id: 2,
      title: 'Freshers Welcome 2023',
      date: '2023-08-15',
      location: 'Auditorium, NIT Kurukshetra',
      description: 'Grand welcome event for new students with cultural performances.',
      category: 'Welcome',
      image: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg',
      participants: '800+',
    },
    {
      id: 3,
      title: 'Alumni Meet 2023',
      date: '2023-12-10',
      location: 'Campus Grounds',
      description: 'Reunion event connecting current students with alumni.',
      category: 'Alumni',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
      participants: '300+',
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
            Events
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our upcoming events and relive the memories of our successful past events.
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Upcoming Events
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {event.category}
                    </span>
                    {event.registrationOpen && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        Open
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {event.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  {event.registrationOpen && (
                    <Link
                      to="/registration"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center justify-center"
                    >
                      Register Now
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Past Events
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                      {event.category}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                      Completed
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {event.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.participants} participants</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
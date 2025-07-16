import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Trophy, Star, Camera, GraduationCap } from 'lucide-react';
import Hero3D from '../components/Hero3D';
import AnimatedCard from '../components/AnimatedCard';
import ParticleBackground from '../components/ParticleBackground';

const Home = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Event Management',
      description: 'Professional event planning and execution for college festivals and cultural activities.',
    },
    {
      icon: Users,
      title: 'Team Building',
      description: 'Developing leadership skills and fostering teamwork among club members.',
    },
    {
      icon: Trophy,
      title: 'Competitions',
      description: 'Organizing and participating in inter-college competitions and festivals.',
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Maintaining high standards in all club activities and events.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Events Organized' },
    { number: '2000+', label: 'Active Members' },
    { number: '50+', label: 'Awards Won' },
    { number: '10+', label: 'Years of Excellence' },
  ];

  return (
    <div className="min-h-screen">
      <ParticleBackground />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden min-h-screen flex items-center">
        <Hero3D />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              MAD Club
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl mb-6 text-blue-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Managing and Directing Club
            </motion.p>
            <motion.p 
              className="text-xl mb-10 text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              NIT Kurukshetra's premier club for event management, cultural activities, and leadership development. Join us in creating memorable experiences.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Link
                to="/registration"
                className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-2xl"
              >
                Register for Confluence
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/events"
                className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
              >
                View Events
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MAD Club is dedicated to fostering leadership, creativity, and excellence in event management and cultural activities at NIT Kurukshetra.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <AnimatedCard
                key={index}
                className="text-center p-8 rounded-2xl bg-white border border-gray-200 shadow-lg"
                hoverScale={1.08}
                rotateOnHover={true}
                glowEffect={true}
              >
                <motion.div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl inline-block mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-blue-100">
              Numbers that speak for our dedication and success
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <AnimatedCard
                key={index}
                className="text-center p-8 rounded-2xl bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20"
                hoverScale={1.1}
                glowEffect={true}
              >
                <motion.div 
                  className="text-6xl font-bold text-white mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-blue-100 font-semibold text-lg">
                  {stat.label}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <h2 className="text-6xl font-bold text-white mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Be part of NIT Kurukshetra's most vibrant club and contribute to organizing the biggest cultural fest - Confluence 2024.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/registration"
                className="group bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-2xl"
              >
                Register Now
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/team"
                className="border-2 border-white text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
              >
                Meet Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
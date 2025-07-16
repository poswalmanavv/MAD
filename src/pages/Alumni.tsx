import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Briefcase, GraduationCap, Award, MapPin } from 'lucide-react';

const Alumni = () => {
  const alumni = [
    {
      name: 'Dr. Priya Sharma',
      batch: '2010',
      position: 'Senior Software Architect',
      company: 'Google',
      location: 'San Francisco, USA',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg',
      achievements: [
        'Led development of Google Cloud Platform features',
        'Author of 15+ research papers in AI',
        'Mentor for 50+ junior developers',
      ],
      linkedin: 'https://linkedin.com/in/priyasharma',
      email: 'priya.sharma@gmail.com',
    },
    {
      name: 'Rahul Gupta',
      batch: '2012',
      position: 'VP Engineering',
      company: 'Microsoft',
      location: 'Seattle, USA',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg',
      achievements: [
        'Scaling Azure infrastructure for millions of users',
        'TEDx speaker on cloud computing',
        'Founding member of Microsoft India Alumni Network',
      ],
      linkedin: 'https://linkedin.com/in/rahulgupta',
      email: 'rahul.gupta@outlook.com',
    },
    {
      name: 'Anjali Patel',
      batch: '2014',
      position: 'Founder & CEO',
      company: 'TechStart Solutions',
      location: 'Bangalore, India',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      achievements: [
        'Built a $10M startup from scratch',
        'Forbes 30 under 30 recipient',
        'Investor in 20+ tech startups',
      ],
      linkedin: 'https://linkedin.com/in/anjalipatel',
      email: 'anjali@techstart.com',
    },
    {
      name: 'Vikram Singh',
      batch: '2008',
      position: 'Director of AI Research',
      company: 'Amazon',
      location: 'London, UK',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      achievements: [
        'Leading Alexa AI development team',
        'Published 25+ papers in ML conferences',
        'Holds 8 patents in natural language processing',
      ],
      linkedin: 'https://linkedin.com/in/vikramsingh',
      email: 'vikram.singh@amazon.com',
    },
    {
      name: 'Shreya Reddy',
      batch: '2016',
      position: 'Product Manager',
      company: 'Facebook (Meta)',
      location: 'Menlo Park, USA',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
      achievements: [
        'Launched Instagram Reels feature',
        'Managed products with 500M+ users',
        'Mentor for product management bootcamps',
      ],
      linkedin: 'https://linkedin.com/in/shreyareddy',
      email: 'shreya.reddy@meta.com',
    },
    {
      name: 'Arjun Malhotra',
      batch: '2011',
      position: 'Chief Technology Officer',
      company: 'Flipkart',
      location: 'Bangalore, India',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
      achievements: [
        'Architected Flipkart\'s mobile platform',
        'Led team of 200+ engineers',
        'Speaker at major tech conferences',
      ],
      linkedin: 'https://linkedin.com/in/arjunmalhotra',
      email: 'arjun.malhotra@flipkart.com',
    },
  ];

  const stats = [
    { number: '2000+', label: 'Alumni Worldwide' },
    { number: '150+', label: 'Companies' },
    { number: '25+', label: 'Countries' },
    { number: '50+', label: 'Startups Founded' },
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
            Our Alumni
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our accomplished alumni who have made significant contributions to their fields and continue to inspire current students.
          </p>
        </motion.div>

        {/* Alumni Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Alumni */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Featured Alumni
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumni.map((alumnus, index) => (
              <motion.div
                key={alumnus.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={alumnus.image}
                    alt={alumnus.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {alumnus.name}
                    </h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                      {alumnus.batch}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span className="text-sm">{alumnus.position}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      <span className="text-sm">{alumnus.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{alumnus.location}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      Key Achievements
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {alumnus.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={alumnus.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${alumnus.email}`}
                      className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Alumni Network CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-blue-600 rounded-lg p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Join Our Alumni Network
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stay connected with your fellow MAD Club alumni. Share experiences, mentor current students, and continue building our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:alumni@madclub.nitkkr.ac.in"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Alumni Team
            </a>
            <a
              href="/alumni-form"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Update Your Profile
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Alumni;
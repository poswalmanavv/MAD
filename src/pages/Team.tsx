import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Instagram, Crown, Trophy, Star, Users } from 'lucide-react';

const Team = () => {
  const teamHierarchy = [
    {
      level: 'Executive Committee',
      icon: Crown,
      color: 'bg-purple-100 text-purple-800',
      members: [
        {
          name: 'Aarav Sharma',
          position: 'President',
          year: '4th Year',
          branch: 'Computer Science',
          image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg',
          email: 'president@madclub.nitkkr.ac.in',
          phone: '+91 98765 43210',
          linkedin: 'https://linkedin.com/in/aaravsharma',
          instagram: 'https://instagram.com/aaravsharma',
          responsibilities: [
            'Overall club leadership and strategic planning',
            'Coordination with college administration',
            'External relations and partnerships',
          ],
        },
        {
          name: 'Diya Patel',
          position: 'Vice President',
          year: '4th Year',
          branch: 'Electronics & Communication',
          image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
          email: 'vicepresident@madclub.nitkkr.ac.in',
          phone: '+91 98765 43211',
          linkedin: 'https://linkedin.com/in/diyapatel',
          instagram: 'https://instagram.com/diyapatel',
          responsibilities: [
            'Support president in all activities',
            'Event coordination and planning',
            'Team management and development',
          ],
        },
        {
          name: 'Rohit Kumar',
          position: 'General Secretary',
          year: '3rd Year',
          branch: 'Mechanical Engineering',
          image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
          email: 'secretary@madclub.nitkkr.ac.in',
          phone: '+91 98765 43212',
          linkedin: 'https://linkedin.com/in/rohitkumar',
          instagram: 'https://instagram.com/rohitkumar',
          responsibilities: [
            'Documentation and record keeping',
            'Meeting coordination and minutes',
            'Communication with members',
          ],
        },
      ],
    },
    {
      level: 'Department Heads',
      icon: Trophy,
      color: 'bg-blue-100 text-blue-800',
      members: [
        {
          name: 'Neha Singh',
          position: 'Cultural Head',
          year: '3rd Year',
          branch: 'Civil Engineering',
          image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
          email: 'cultural@madclub.nitkkr.ac.in',
          phone: '+91 98765 43213',
          linkedin: 'https://linkedin.com/in/nehasingh',
          instagram: 'https://instagram.com/nehasingh',
          responsibilities: [
            'Cultural events planning and execution',
            'Artist coordination and bookings',
            'Performance quality assurance',
          ],
        },
        {
          name: 'Arjun Reddy',
          position: 'Technical Head',
          year: '3rd Year',
          branch: 'Information Technology',
          image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
          email: 'technical@madclub.nitkkr.ac.in',
          phone: '+91 98765 43214',
          linkedin: 'https://linkedin.com/in/arjunreddy',
          instagram: 'https://instagram.com/arjunreddy',
          responsibilities: [
            'Technical events and workshops',
            'Equipment management and setup',
            'Digital platform development',
          ],
        },
        {
          name: 'Priya Gupta',
          position: 'Marketing Head',
          year: '2nd Year',
          branch: 'Chemical Engineering',
          image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg',
          email: 'marketing@madclub.nitkkr.ac.in',
          phone: '+91 98765 43215',
          linkedin: 'https://linkedin.com/in/priyagupta',
          instagram: 'https://instagram.com/priyagupta',
          responsibilities: [
            'Social media management and content',
            'Promotional campaigns and outreach',
            'Brand partnerships and collaborations',
          ],
        },
        {
          name: 'Vikash Jain',
          position: 'Finance Head',
          year: '3rd Year',
          branch: 'Electrical Engineering',
          image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg',
          email: 'finance@madclub.nitkkr.ac.in',
          phone: '+91 98765 43216',
          linkedin: 'https://linkedin.com/in/vikashjain',
          instagram: 'https://instagram.com/vikashjain',
          responsibilities: [
            'Budget planning and financial management',
            'Expense tracking and reporting',
            'Sponsorship coordination',
          ],
        },
      ],
    },
    {
      level: 'Core Team',
      icon: Star,
      color: 'bg-green-100 text-green-800',
      members: [
        {
          name: 'Kavya Sharma',
          position: 'Event Manager',
          year: '2nd Year',
          branch: 'Biotechnology',
          image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
          email: 'events@madclub.nitkkr.ac.in',
          phone: '+91 98765 43217',
          linkedin: 'https://linkedin.com/in/kavyasharma',
          instagram: 'https://instagram.com/kavyasharma',
          responsibilities: [
            'Event logistics and coordination',
            'Vendor management and contracts',
            'Timeline management and execution',
          ],
        },
        {
          name: 'Raj Malhotra',
          position: 'Design Head',
          year: '2nd Year',
          branch: 'Computer Science',
          image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
          email: 'design@madclub.nitkkr.ac.in',
          phone: '+91 98765 43218',
          linkedin: 'https://linkedin.com/in/rajmalhotra',
          instagram: 'https://instagram.com/rajmalhotra',
          responsibilities: [
            'Visual design and branding materials',
            'Website design and maintenance',
            'Creative direction for events',
          ],
        },
        {
          name: 'Sneha Agarwal',
          position: 'Public Relations',
          year: '2nd Year',
          branch: 'Electronics & Communication',
          image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
          email: 'pr@madclub.nitkkr.ac.in',
          phone: '+91 98765 43219',
          linkedin: 'https://linkedin.com/in/snehaagarwal',
          instagram: 'https://instagram.com/snehaagarwal',
          responsibilities: [
            'Media relations and press coverage',
            'External communications',
            'Community engagement',
          ],
        },
        {
          name: 'Harsh Verma',
          position: 'Logistics Manager',
          year: '1st Year',
          branch: 'Mechanical Engineering',
          image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
          email: 'logistics@madclub.nitkkr.ac.in',
          phone: '+91 98765 43220',
          linkedin: 'https://linkedin.com/in/harshverma',
          instagram: 'https://instagram.com/harshverma',
          responsibilities: [
            'Transportation and accommodation',
            'Material procurement and storage',
            'Venue setup and management',
          ],
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
            Our Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated individuals who make MAD Club a success. Our team brings together diverse skills and perspectives to create exceptional experiences.
          </p>
        </motion.div>

        {/* Team Hierarchy */}
        <div className="space-y-16">
          {teamHierarchy.map((level, levelIndex) => (
            <motion.section
              key={level.level}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: levelIndex * 0.2 }}
            >
              <div className="text-center mb-8">
                <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${level.color} mb-4`}>
                  <level.icon className="w-5 h-5" />
                  <span className="font-semibold">{level.level}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{level.level}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {level.members.map((member, memberIndex) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: memberIndex * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-medium mb-2">
                          {member.position}
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                          <span>{member.year}</span>
                          <span>•</span>
                          <span>{member.branch}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">
                          Key Responsibilities
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {member.responsibilities.map((responsibility, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex justify-center space-x-4">
                          <a
                            href={`mailto:${member.email}`}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                            title="Email"
                          >
                            <Mail className="w-5 h-5" />
                          </a>
                          <a
                            href={`tel:${member.phone}`}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                            title="Phone"
                          >
                            <Phone className="w-5 h-5" />
                          </a>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                            title="LinkedIn"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                          <a
                            href={member.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                            title="Instagram"
                          >
                            <Instagram className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-blue-600 rounded-lg p-12 text-center text-white"
        >
          <Users className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl font-bold mb-4">
            Join Our Team
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Are you passionate about event management and cultural activities? Join MAD Club and be part of creating memorable experiences for the entire college community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/registration"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Apply Now
            </a>
            <a
              href="mailto:recruitment@madclub.nitkkr.ac.in"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Team;
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">MAD Club</h3>
                <p className="text-gray-400">NIT Kurukshetra</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Managing and Directing Club - Fostering leadership, creativity, and excellence in event management and cultural activities.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mad.nitkkr?igsh=MWxkczdtOGtub2E1aA==" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/mad-nitkkr/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white transition-colors">Team</Link></li>
              <li><Link to="/alumni" className="text-gray-400 hover:text-white transition-colors">Alumni</Link></li>
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Events</h4>
            <ul className="space-y-2">
              <li><Link to="/registration" className="text-gray-400 hover:text-white transition-colors">Confluence 2024</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Workshops</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cultural Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technical Seminars</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">NIT Kurukshetra, Haryana</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">mad.club@nitkkr.ac.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">+91 8950011705</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 MAD Club, NIT Kurukshetra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
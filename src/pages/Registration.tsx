import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, MapPin, Users, Mail, Phone, User, GraduationCap, Building } from 'lucide-react';

interface RegistrationForm {
  name: string;
  email: string;
  phone: string;
  rollNumber: string;
  branch: string;
  year: string;
  event: string;
  accommodation: boolean;
  dietaryRequirements: string;
  emergencyContact: string;
  emergencyPhone: string;
}

const Registration = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationForm>();

  const events = [
    { id: 'confluence-main', name: 'Confluence 2024 - Main Event' },
    { id: 'dance-competition', name: 'Dance Competition' },
    { id: 'music-competition', name: 'Music Competition' },
    { id: 'drama-competition', name: 'Drama Competition' },
    { id: 'art-exhibition', name: 'Art Exhibition' },
    { id: 'technical-events', name: 'Technical Events' },
  ];

  const branches = [
    'Computer Science Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electronics and Communication',
    'Chemical Engineering',
    'Information Technology',
    'Biotechnology',
  ];

  const onSubmit = (data: RegistrationForm) => {
    console.log('Registration data:', data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8 text-center"
          >
            <div className="bg-green-100 p-4 rounded-full inline-block mb-6">
              <Users className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Registration Successful!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for registering for Confluence 2024. We'll send you further details via email.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 font-medium">
                Registration ID: MAD-2024-{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Register for Confluence 2024
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for the biggest cultural fest of NIT Kurukshetra. Fill out the form below to secure your participation.
          </p>
        </motion.div>

        {/* Event Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-blue-50 rounded-lg p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center text-gray-700">
              <Calendar className="w-5 h-5 mr-3 text-blue-600" />
              <span>March 15-17, 2024</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Clock className="w-5 h-5 mr-3 text-blue-600" />
              <span>10:00 AM - 10:00 PM</span>
            </div>
            <div className="flex items-center text-gray-700">
              <MapPin className="w-5 h-5 mr-3 text-blue-600" />
              <span>Main Campus, NIT Kurukshetra</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Users className="w-5 h-5 mr-3 text-blue-600" />
              <span>Open to all students</span>
            </div>
          </div>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-1" />
                  Full Name *
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email Address *
                </label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-1" />
                  Phone Number *
                </label>
                <input
                  {...register('phone', { required: 'Phone number is required' })}
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              {/* Roll Number */}
              <div>
                <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  <GraduationCap className="w-4 h-4 inline mr-1" />
                  Roll Number *
                </label>
                <input
                  {...register('rollNumber', { required: 'Roll number is required' })}
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your roll number"
                />
                {errors.rollNumber && <p className="text-red-500 text-sm mt-1">{errors.rollNumber.message}</p>}
              </div>

              {/* Branch */}
              <div>
                <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="w-4 h-4 inline mr-1" />
                  Branch *
                </label>
                <select
                  {...register('branch', { required: 'Branch is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your branch</option>
                  {branches.map((branch) => (
                    <option key={branch} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
                {errors.branch && <p className="text-red-500 text-sm mt-1">{errors.branch.message}</p>}
              </div>

              {/* Year */}
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                  Year of Study *
                </label>
                <select
                  {...register('year', { required: 'Year is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                  <option value="5">5th Year</option>
                </select>
                {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year.message}</p>}
              </div>
            </div>

            {/* Event Selection */}
            <div>
              <label htmlFor="event" className="block text-sm font-medium text-gray-700 mb-2">
                Select Event *
              </label>
              <select
                {...register('event', { required: 'Please select an event' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Choose an event</option>
                {events.map((event) => (
                  <option key={event.id} value={event.id}>
                    {event.name}
                  </option>
                ))}
              </select>
              {errors.event && <p className="text-red-500 text-sm mt-1">{errors.event.message}</p>}
            </div>

            {/* Accommodation */}
            <div className="flex items-center">
              <input
                {...register('accommodation')}
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="accommodation" className="ml-2 text-sm text-gray-700">
                I need accommodation during the event
              </label>
            </div>

            {/* Dietary Requirements */}
            <div>
              <label htmlFor="dietaryRequirements" className="block text-sm font-medium text-gray-700 mb-2">
                Dietary Requirements (Optional)
              </label>
              <textarea
                {...register('dietaryRequirements')}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any dietary restrictions or preferences"
              />
            </div>

            {/* Emergency Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-2">
                  Emergency Contact Name *
                </label>
                <input
                  {...register('emergencyContact', { required: 'Emergency contact is required' })}
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Emergency contact name"
                />
                {errors.emergencyContact && <p className="text-red-500 text-sm mt-1">{errors.emergencyContact.message}</p>}
              </div>

              <div>
                <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700 mb-2">
                  Emergency Contact Phone *
                </label>
                <input
                  {...register('emergencyPhone', { required: 'Emergency contact phone is required' })}
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Emergency contact phone"
                />
                {errors.emergencyPhone && <p className="text-red-500 text-sm mt-1">{errors.emergencyPhone.message}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Register for Confluence 2024
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Registration;
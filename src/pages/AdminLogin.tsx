import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Shield, Mail, Lock, Eye, EyeOff } from 'lucide-react';

interface LoginForm {
  email: string;
  password: string;
}

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    // Simple authentication for demo purposes
    if (data.email === '123105128@nitkkr.ac.in' && data.password === 'Manav@2005') {
      // Store admin session (in real app, use proper authentication)
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin/dashboard');
    } else {
      setLoginError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
            <Shield className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Portal
          </h2>
          <p className="text-gray-600">
            Sign in to access the MAD Club admin dashboard
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {loginError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                {loginError}
              </div>
            )}

           {/* <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-700 text-sm"> */}
              {/* <strong>Demo Credentials:</strong><br /> */}
              {/* Email: admin@madclub.nitkkr.ac.in<br /> */}
              {/* Password: admin123 */}
            {/* </div> */}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-1" />
                Email Address
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
                placeholder="Enter your admin email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                <Lock className="w-4 h-4 inline mr-1" />
                Password
              </label>
              <div className="relative">
                <input
                  {...register('password', { required: 'Password is required' })}
                  type={showPassword ? 'text' : 'password'}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="mailto:admin@madclub.nitkkr.ac.in"
              className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
            >
              Forgot your password?
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminLogin;
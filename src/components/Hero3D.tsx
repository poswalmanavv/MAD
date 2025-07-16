import React from 'react';

const Hero3D = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative w-full h-full">
        {/* Animated background shapes using CSS */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500 rounded-full opacity-70 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-purple-500 transform rotate-45 opacity-60 animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-cyan-500 rounded-lg opacity-50 animate-spin"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-green-500 rounded-full opacity-70 animate-bounce delay-300"></div>
        <div className="absolute top-60 left-1/2 w-10 h-10 bg-yellow-500 transform rotate-45 opacity-60 animate-pulse delay-500"></div>
        <div className="absolute top-32 right-1/3 w-18 h-18 bg-red-500 rounded-lg opacity-50 animate-spin delay-700"></div>
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white rounded-full opacity-30 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero3D;
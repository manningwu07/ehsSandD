import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen bg-darkPurple overflow-hidden">
      {/* Parallax Star Layers */}
      <div
        className={`absolute inset-0 parallax-stars parallax-layer`}
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div
        className={`absolute inset-0 parallax-stars parallax-layer`}
        style={{ transform: `translateY(${scrollY * 0.4}px)`, opacity: 0.8 }}
      ></div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-white text-5xl lg:text-6xl font-bold px-4">
          Welcome to Gemini Academy
        </h1>
        <p className="text-gold mt-4 text-xl lg:text-2xl px-4">
          Unlock Your Potential in the Stars
        </p>
        <button className="mt-8 bg-gold text-darkPurple py-3 px-6 font-semibold rounded-lg transition-transform duration-300 transform hover:scale-105">
          Start Your Journey
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

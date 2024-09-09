import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const HeroSection = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
      <div className="text-center space-y-4">
        {/* Main Heading */}
        <h1
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#ee5e2c] via-orange-400 to-orange-600 bg-clip-text text-transparent animate-fadeIn heroTextsize max-w-6xl dark:from-orange-500 dark:via-orange-600 dark:to-orange-700"
        >
          Cutting-Edge Digital Marketing Solutions to Drive Business Growth
        </h1>
        {/* Description */}
        <p
          className="text-lg text-black max-w-5xl mx-auto dark:text-white"
        >
          A dynamic digital marketing strategist driven by innovation, I leverage cutting-edge technology and proven expertise to unlock growth and deliver impactful results.
        </p>

        {/* Button */}
        <button className="cursor-pointer font-semibold overflow-hidden relative z-100 border-2 md:mt-2 border-[#ee5e2c] group px-9 py-2 dark:border-orange-500">
          <span className="relative z-10 text-[#ee5e2c] group-hover:text-white text-xl duration-500 dark:text-orange-400 dark:group-hover:text-gray-900">
            Blog ↓
          </span>
          <span className="absolute w-full h-full bg-[#ee5e2c] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500 dark:bg-orange-600"></span>
          <span className="absolute w-full h-full bg-[#ee5e2c] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500 dark:bg-orange-600"></span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

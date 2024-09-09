import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  {
    id: 1,
    name: 'Jane Doe',
    testimonial: `Working with this team has been a game-changer for our marketing strategy. Their expertise and dedication helped us achieve our goals efficiently and effectively.`,
    position: 'Marketing Director, Company A',
    icon: '🌟',
  },
  {
    id: 2,
    name: 'John Smith',
    testimonial: `The level of service and innovation provided exceeded our expectations. We saw significant improvements in our campaign performance thanks to their cutting-edge strategies.`,
    position: 'CEO, Company B',
    icon: '💬',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    testimonial: `Their team truly integrates with ours and provides actionable insights that drive real results. We've experienced substantial growth since partnering with them.`,
    position: 'Product Manager, Company C',
    icon: '👍',
  }
];

const TestimonialCard = ({ icon, name, testimonial, position }) => (
  <motion.div
    className="testimonial-card flex flex-col items-center bg-white dark:bg-black shadow-xl rounded-lg p-10 transition-transform transform hover:scale-105"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-5xl mb-6 text-[#ee5e2c]">{icon}</div>
    <p className="text-center text-lg font-light mb-4 text-black dark:text-gray-300">
      "{testimonial}"
    </p>
    <h3 className="text-xl font-bold text-center mb-2 text-[#ee5e2c]">
      {name}
    </h3>
    <p className="text-blackwqs dark:text-gray-400 text-center">
      {position}
    </p>
  </motion.div>
);

const Testimonial = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.testimonial-card');

    // Smooth fade-in for each card using ScrollTrigger
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 10%',
            scrub: 1,
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-[#f9fafb] dark:bg-black">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-semibold text-[#ee5e2c] dark:text-white mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              icon={testimonial.icon}
              name={testimonial.name}
              testimonial={testimonial.testimonial}
              position={testimonial.position}
            />
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <div className="h-1 w-40 bg-[#ee5e2c] dark:bg-[#ee5e2c] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

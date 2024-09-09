import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clients = [
  { name: 'Casper', src: '/path/to/casper.png' },
  { name: 'Catalina Crunch', src: '/path/to/catalina-crunch.png' },
  { name: 'Figma', src: '/path/to/figma.png' },
  { name: 'Honest', src: '/path/to/honest.png' },
  { name: 'MyFitnessPal', src: '/path/to/myfitnesspal.png' },
  { name: 'Stripe', src: '/path/to/stripe.png' },
  { name: "Bob's Red Mill", src: '/path/to/bobs-red-mill.png' },
  { name: 'Gorjana', src: '/path/to/gorjana.png' },
  { name: 'SmartSweets', src: '/path/to/smart-sweets.png' },
  { name: 'Lord & Taylor', src: '/path/to/lord-taylor.png' },
  { name: 'Quadient', src: '/path/to/quadient.png' },
  { name: 'Taylor', src: '/path/to/taylor.png' },
  { name: 'Sambazon', src: '/path/to/sambazon.png' },
  { name: 'Hippeas', src: '/path/to/hippeas.png' },
  { name: 'Pura Vida', src: '/path/to/pura-vida.png' },
  { name: 'Coola', src: '/path/to/coola.png' },
  { name: 'Another Logo', src: '/path/to/another-logo.png' },
  { name: 'Kate Somerville', src: '/path/to/kate-somerville.png' },
];

const ClientLogos = () => {
  const logosRef = useRef([]);

  useEffect(() => {
    // Animate the logos to scroll up into view with a staggered effect
    gsap.fromTo(
      logosRef.current,
      { opacity: 0, y: 100 }, // Start state: logos start lower and invisible
      {
        opacity: 1,
        y: 0, // End state: logos move into place and become fully visible
        stagger: 0.2, // Stagger each logo animation
        ease: 'power4.out',
        duration: 1.5,
        scrollTrigger: {
          trigger: '.client-logo-container', // The container that triggers the animation
          start: 'top bottom', // Animation starts when the container's top reaches the bottom of the viewport
          end: 'bottom top', // Animation ends when the container's bottom reaches the top of the viewport
          scrub: true, // Smooth animation as you scroll
        },
      }
    );
  }, []);

  return (
    <div className="bg-white dark:bg-black py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 client-logo-container">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#ee5e2c] dark:text-[#ee5e2c] mb-12 md:mb-16">
          Join the ranks of clients like:
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex justify-center transform transition-transform duration-300 hover:scale-110"
              ref={(el) => (logosRef.current[index] = el)} // Store refs for each logo
            >
              <img
                src={client.src}
                alt={client.name}
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto dark:brightness-90 dark:text-white"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;

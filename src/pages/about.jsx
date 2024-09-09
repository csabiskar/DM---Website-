import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Strong Parallax Effects
    gsap.to('.hero-image', {
      y: '50%',  // Increased parallax movement
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-image',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to('.hero-text', {
      y: '-30%',  // Increased parallax movement
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-text',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to('.hero-button', {
      y: '40%',  // Increased parallax movement
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-button',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Strong Text Animations
    gsap.fromTo(
      '.hero-text',
      { opacity: 0, y: 100, scale: 1.2, rotate: -15 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 1.5,
        ease: 'power4.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.hero-text',
          start: 'top 80%',
          end: 'top 60%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.hero-button',
      { opacity: 0, y: 50, scale: 1.3 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: 'bounce.out',
        scrollTrigger: {
          trigger: '.hero-button',
          start: 'top 80%',
          end: 'top 60%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.hero-testimonial',
      { opacity: 0, y: 40, scale: 1.2 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: 'back.out(1.7)',
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.hero-testimonial',
          start: 'top 80%',
          end: 'top 60%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="relative overflow-hidden bg-white dark:bg-black">
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
        <div className="text-center space-y-4">
          {/* Main Heading */}
          <h1
            className="hero-text text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#ee5e2c] via-orange-400 to-orange-600 bg-clip-text text-transparent animate-fadeIn heroTextsize max-w-6xl dark:from-orange-500 dark:via-orange-600 dark:to-orange-700"
          >
            Cutting-Edge Digital Marketing Solutions to Drive Business Growth
          </h1>
          {/* Description */}
          <p
            className="hero-text text-lg text-black max-w-5xl mx-auto dark:text-white"
          >
            A dynamic digital marketing strategist driven by innovation, I leverage cutting-edge technology and proven expertise to unlock growth and deliver impactful results.
          </p>

          {/* Button */}
          <button
            className="hero-button cursor-pointer font-semibold overflow-hidden relative z-100 border-2 md:mt-2 border-[#ee5e2c] group px-9 py-2 dark:border-orange-500"
            onClick={() => {
              const targetSection = document.getElementById('Blog');
              if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="relative z-10 text-[#ee5e2c] group-hover:text-white text-xl duration-500 dark:text-orange-400 dark:group-hover:text-gray-900">
              Blog ↓
            </span>
            <span className="absolute w-full h-full bg-[#ee5e2c] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500 dark:bg-orange-600"></span>
            <span className="absolute w-full h-full bg-[#ee5e2c] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500 dark:bg-orange-600"></span>
          </button>
        </div>
      </div>

      {/* Background Parallax Elements */}
      <div className="absolute inset-0">
        <div className="hero-image bg-cover bg-center w-full h-full relative" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1080)' }}></div>
      </div>
    </section>
  );
};

export default About;

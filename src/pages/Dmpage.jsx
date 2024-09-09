import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/fulllogo.png';
import Darklogo from '../assets/dark-logo.png';
import dev from '../assets/dev.png'; // Replace with your image
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const CombinedComponent = () => {
  const [darkMode, setDarkMode] = useState(false);
  const logosRef = useRef([]);
  const containerRef = useRef(null);
  const form = useRef()

  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);
  //gsap
  useEffect(() => {
    // Strong Parallax Effects
    gsap.to('.hero-image', {
      y: '40%',  // Increased parallax movement
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-image',
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to('.hero-text', {
      y: '-20%',  // Increased parallax movement
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-text',
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to('.hero-button', {
      y: '30%',  // Increased parallax movement
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-button',
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to('.hero-testimonial', {
      y: '25%',  // Increased parallax movement
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-testimonial',
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Strong Text Animations
    gsap.fromTo(
      '.hero-text',
      { opacity: 0, y: 50, scale: 1.2 }, // Initial state
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.2,
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
      { opacity: 0, y: 30, scale: 1.2 }, // Initial state
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
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
      { opacity: 0, y: 20, scale: 1.1 }, // Initial state
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.hero-testimonial',
          start: 'top 80%',
          end: 'top 60%',
          scrub: true,
        },
      }
    );

    //clientlogs


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

    //testimonial

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
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const clients = [
    { name: "Casper", src: "/path/to/casper.png" },
    { name: "Catalina Crunch", src: "/path/to/catalina-crunch.png" },
    { name: "Figma", src: "/path/to/figma.png" },
    { name: "Honest", src: "/path/to/honest.png" },
    { name: "MyFitnessPal", src: "/path/to/myfitnesspal.png" },
    { name: "Stripe", src: "/path/to/stripe.png" },
    { name: "Bob's Red Mill", src: "/path/to/bobs-red-mill.png" },
    { name: "Gorjana", src: "/path/to/gorjana.png" },
    { name: "SmartSweets", src: "/path/to/smart-sweets.png" },
    { name: "Lord & Taylor", src: "/path/to/lord-taylor.png" },
    { name: "Quadient", src: "/path/to/quadient.png" },
    { name: "Taylor", src: "/path/to/taylor.png" },
    { name: "Sambazon", src: "/path/to/sambazon.png" },
    { name: "Hippeas", src: "/path/to/hippeas.png" },
    { name: "Pura Vida", src: "/path/to/pura-vida.png" },
    { name: "Coola", src: "/path/to/coola.png" },
    { name: "Another Logo", src: "/path/to/another-logo.png" },
    { name: "Kate Somerville", src: "/path/to/kate-somerville.png" },
  ];

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
      className="testimonial-card flex flex-col items-center bg-white dark:bg-black shadow-xl rounded-lg p-10 transition-transform transform hover:scale-105 dark:border dark:border-[#ee5e2c]"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-5xl mb-6 text-[#ee5e2c]">{icon}</div>
      <p className="text-center text-lg font-light mb-4 text-black dark:text-white">
        "{testimonial}"
      </p>
      <h3 className="text-xl font-bold text-center mb-2 text-[#ee5e2c]">
        {name}
      </h3>
      <p className="text-blackwqs dark:text-white text-center">
        {position}
      </p>
    </motion.div>
  );

  const benefitsData = [
    {
      id: 1,
      icon: '🚀',
      title: 'Instant Online Visibility',
      description: `Digital marketing allows you to reach your target audience immediately through various online channels like search engines, social media, and email.`,
    },
    {
      id: 2,
      icon: '📊',
      title: 'Measurable Results',
      description: `Track your campaigns with precise analytics and metrics, ensuring every marketing dollar is well-spent.`,
    },
    {
      id: 3,
      icon: '🎯',
      title: 'Targeted Advertising',
      description: `Reach your ideal customer by targeting demographics, interests, and behaviors, leading to higher conversion rates.`,
    },
    {
      id: 4,
      icon: '💰',
      title: 'Cost-Effective Marketing',
      description: `Compared to traditional advertising, digital marketing offers a more cost-effective solution with the potential for a higher return on investment.`,
    },
  ];

  const BenefitCard = ({ icon, title, description }) => (
    <div className="flex flex-col items-center bg-white dark:bg-black dark:border dark:border-[#ee5e2c] bg-opacity-90 text-center p-8 shadow-lg rounded-xl transform transition-all hover:scale-105 hover:rotate-2">
      <div className="text-5xl mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );

  const posts = [
    {
      title: "What Is Omnichannel Retailing?",
      description: "Are you wanting to increase brand awareness? Continue reading to learn more about how omnichannel retailing can increase your sales and brand visibility.",
      link: "#",
      image: "https://www.shutterstock.com/image-vector/letter-dm-logo-design-monogram-260nw-2248588327.jpg",
      author: "John Doe",
      category: "Retail",
      subCategory: "Marketing"
    },
    {
      title: "7 Creative Retail Marketing Tips for 2023",
      description: "With the retail industry constantly evolving it is important that you stay ahead of marketing trends. Discover the top retail marketing tips you can benefit from.",
      link: "#",
      image: "https://www.shutterstock.com/image-vector/letter-dm-logo-design-monogram-260nw-2248588327.jpg",
      author: "Jane Smith",
      category: "Marketing",
      subCategory: "Trends"
    },
    {
      title: "9 B2B Marketing Trends for 2023",
      description: "There’s a lot changing in marketing in 2023. In the midst of it all, what should B2B marketers keep in mind? Check out these top 9 trends.",
      link: "#",
      image: "https://www.shutterstock.com/image-vector/letter-dm-logo-design-monogram-260nw-2248588327.jpg",
      author: "Emily White",
      category: "B2B",
      subCategory: "Marketing"
    },
  ];

  //handle contactform

  const handlesubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1g0wge5', 'template_cxw3p9p', form.current, {
      publicKey: 'EGIvTJ4oQ-kW4xENZ',
    })
      .then(() => {
        toast.success("Mail sent 👍")
        form.current.reset();
      })
      .catch((error) => { toast.error("Email failed", error.txt) })

  }
  return (
    <>
      {/* Navbar*/}
      <div className="sticky top-0 z-50">
        {/* Violet Bar */}
        <div className="w-full py-1 bg-gradient-to-r from-[#ee5e2c] via-orange-400 to-orange-600 text-white text-center text-sm">
          Digital marketing is about connecting with people, creating value, and building lasting relationships online.
        </div>

        {/* Navbar */}
        <nav className="py-1 backdrop-blur-lg font-semibold bg-white dark:bg-black dark:text-white">
          <div className="container px-4 mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={darkMode ? Darklogo : logo}
                className="h-12 md:h-16 w-auto object-contain mr-2"
                alt="Logo"
              />
            </div>
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 dark:focus:ring-gray-300"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <svg className="w-6 h-6 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m-9-9h1m16 0h1M4.22 4.22l.7.7m14.56 14.56l.7.7M4.22 19.78l.7-.7m14.56-14.56l.7-.7M12 6a6 6 0 100 12 6 6 0 000-12z"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m-9-9h1m16 0h1M4.22 4.22l.7.7m14.56 14.56l.7.7M4.22 19.78l.7-.7m14.56-14.56l.7-.7M12 6a6 6 0 100 12 6 6 0 000-12z"></path>
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Herosection */}

      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black" id='home'>
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
          <button
            className="cursor-pointer font-semibold overflow-hidden relative z-100 border-2 md:mt-2 border-[#ee5e2c] group px-9 py-2 dark:border-orange-500"
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

      {/* about */}

      <section className="relative overflow-hidden bg-[#ee5e2c]" id='about'>
        <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center">
          {/* Text Section */}
          <div className="w-full md:w-1/2 mt-12 md:mt-0 text-center md:text-left py-12 md:py-24 px-8 md:px-12 relative bg-[#ee5e2c] overflow-hidden">
            <h1 className="hero-text text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white relative z-10">
              Truly Connect with Your Customers
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] to-[#000000]">
                Jay Baer - The Ultimate Expert in Business Growth & Customer Experience
              </span>
            </h1>

            <p className="hero-text mt-8 text-lg text-white relative z-10">
              Audiences say Jay Baer does more to help them build their business
              than any other speaker, author, and researcher.
            </p>
            <p className="hero-text mt-4 italic text-white relative z-10">
              Voted 2024 #1 Global Guru in marketing
              <br />
              Voted 2024 #2 Global Guru in customer experience
            </p>

            <div className="mt-10 relative z-10">
              <a
                href=""
                // target="_blank"
                rel="noopener noreferrer"
                className="hero-button inline-flex items-center text-white bg-[#ee5e2c] px-6 py-3 rounded-full font-semibold border-2 border-[#d34e25] shadow-lg hover:bg-[#d34e25] transition-transform transform hover:scale-110"
              >
                See Jay in Action
              </a>
            </div>

            {/* Decorative Stripes */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ee5e2c] via-white to-white opacity-15 -z-10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ee5e2c] to-transparent opacity-40 -z-20"></div>

            {/* Testimonials */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 text-white relative z-10">
              <div className="hero-testimonial">
                <p className="text-xl">“WOW! One of the best presenters in the world!”</p>
                <div className="mt-4 text-sm text-white">- Tim Roush, Primrose</div>
              </div>
              <div className="hero-testimonial">
                <p className="text-xl">“The most fun I’ve ever had at a keynote!”</p>
                <div className="mt-4 text-sm text-white">- Madalina Iordache, Bright Pink</div>
              </div>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center relative bg-[#ffffff] py-12 md:py-24">
            <div className="relative">
              <img
                src={dev}
                alt="Jay Baer"
                className="hero-image w-3/4 max-w-sm rounded-lg shadow-2xl border-4 border-[#ee5e2c] transform hover:scale-110 transition-transform duration-500"
              />

              {/* Decorative Shapes */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#ee5e2c] rounded-full opacity-40 blur-xl"></div>
              <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-[#ee5e2c] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-full h-full border-t-4 border-[#ee5e2c] absolute top-0 left-0"></div>
                <div className="w-full h-full border-l-4 border-[#ee5e2c] absolute top-0 left-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* clients */}

      <div className="bg-white dark:bg-black py-16 md:py-20" id='clients'>
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

      {/* testimonial */}

      <section ref={containerRef} className="py-20 bg-[#f9fafb] dark:bg-black" id='feedback'>
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-semibold text-[#ee5e2c] dark:text-[#ee5e2c] mb-12">
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

      {/* benifits  of dm */}

      <section className="relative py-20 bg-[#ffffff] dark:bg-black overflow-hidden" id='dm'>
        {/* Decorative wave */}
        <div className="absolute inset-x-0 top-0 transform -translate-y-1/2 pointer-events-none">
          {/* Optional SVG for design */}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-[#ee5e2c] dark:text-[#ee5e2c] text-center mb-16">
            Benefits of Digital Marketing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsData.map((benefit) => (
              <BenefitCard
                key={benefit.id}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>

        {/* Decorative bubbles */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white dark:bg-gray-700 opacity-20 rounded-full filter blur-2xl transform scale-75"></div>
        <div className="absolute top-0 right-0 w-60 h-60 bg-white dark:bg-gray-700 opacity-20 rounded-full filter blur-2xl transform scale-75"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white dark:bg-gray-700 opacity-20 rounded-full filter blur-2xl transform scale-75"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white dark:bg-gray-700 opacity-20 rounded-full filter blur-2xl transform scale-75"></div>
      </section>

      {/* blog */}

      <section className="py-16 bg-white dark:bg-black" id='Blog'>
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <h2 className="text-3xl font-bold text-[#ee5e2c] dark:text-orange-400 mb-12 text-center">
            What's the latest?
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <div key={index} className="rounded overflow-hidden flex flex-col max-w-xl mx-auto bg-white dark:bg-[#ee5e2c] dark:border dark:border-[#ee5e2c]">
                <a href={post.link}>
                  <img className="w-full" src={post.image} alt={post.title} />
                </a>
                <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white dark:bg-black m-10 shadow-lg rounded-lg">
                  <a
                    href={post.link}
                    className="font-semibold text-lg inline-block hover:text-[#ee5e2c] dark:hover:text-orange-400 transition duration-500 ease-in-out mb-2 dark:text-white"
                  >
                    {post.title}
                  </a>
                  <p className="text-gray-500 dark:text-white text-sm">
                    {post.description}
                  </p>
                  <p className="mt-5 text-gray-600 dark:text-white text-xs">
                    By{" "}
                    <a href="#" className="text-[#ee5e2c] dark:text-[#ee5e2c] transition duration-500 ease-in-out">
                      {post.author}
                    </a>{" "}
                    | in{" "}
                    <a href="#" className="text-[#ee5e2c] dark:text-[#ee5e2c] transition duration-500 ease-in-out">
                      {post.category}
                    </a>
                    ,{" "}
                    <a href="#" className="text-[#ee5e2c] dark:text-[#ee5e2c] transition duration-500 ease-in-out">
                      {post.subCategory}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="cursor-pointer font-semibold overflow-hidden relative z-100 border-2 border-[#ee5e2c] dark:border-[#ee5e2c] group px-9 py-2">
              <span className="relative z-10 text-[#ee5e2c] dark:text-[#ee5e2c] group-hover:text-white text-xl duration-500">View More</span>
              <span className="absolute w-full h-full bg-[#ee5e2c] dark:bg-[#ee5e2c] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
              <span className="absolute w-full h-full bg-[#ee5e2c] dark:bg-orange-700 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
            </button>
          </div>
        </div>
      </section>

      {/* contact us */}

      <div className="flex flex-col lg:flex-row items-center justify-center min-h-[60vh] bg-gradient-to-r from-[#ff7849] via-[#ee5e2c] to-[#d54c1b] p-6 lg:p-16 text-white dark:from-[#ff7849] dark:via-[#ee5e2c] dark:to-[#d54c1b]" id='contact'>
        {/* Text Section */}
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 ">
            Join our growing community of business leaders who receive <span className='pacifico-regular'>Dev's</span> insights regularly
          </h1>
          <p className="bg-white text-black p-4 rounded-lg shadow-md dark:bg-black dark:text-white">
            <em>
              Join our growing community of business leaders who receive Dev's
              insights regularly.
            </em>
            <br />
            <span className="block mt-2 font-bold text-[#ee5e2c] dark:text-[#ff7849]">Dev Jayakumar</span>
            <span className="text-gray-600 dark:text-white">Business Expert and The Dev Facts subscriber</span>
          </p>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/3 bg-white text-black p-6 rounded-lg shadow-lg dark:bg-black dark:text-white">
          <h2 className="text-2xl font-bold mb-4">“The <span className='pacifico-regular'>Dev's</span> Facts” Directly to Your Inbox</h2>
          <form className="flex flex-col" ref={form} onSubmit={handlesubmit}>
            <Toaster />
            <label className="mb-2 font-bold">Name *</label>
            <input
              type="text"
              className="p-2 mb-4 border border-gray-300 rounded-md dark:border-white dark:bg-gray-50 dark:text-white"
              placeholder="Your Name"
              required
              name='to_name'
            />
            <label className="mb-2 font-bold">Email Address *</label>
            <input
              type="email"
              className="p-2 mb-4 border border-gray-300 rounded-md dark:border-white dark:bg-gray-50 dark:text-white"
              placeholder="email@gmail.com"
              required
              name='from_name'
            />
            <button
              type="submit"
              className="bg-[#ee5e2c] text-white p-2 rounded-md font-bold hover:bg-[#d54c1b] transition-colors dark:bg-[#ee5e2c] dark:hover:bg-[#ff7344]"
            >
              Join the Newsletter
            </button>
          </form>
        </div>
      </div>

      {/* footer */}

      <footer className="w-full py-12 dark:bg-black ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <a href="/#" className="flex justify-center ">
              <img src={darkMode ? Darklogo : logo} alt="logo" classNameName='w-40 h-12 md:w-96 md:h-24' />
            </a>
            <ul className="text-lg flex items-center justify-center flex-col gap-4 md:flex-row md:gap-12 transition-all duration-500 py-12 mb-8 border-b border-[#ee5e2c] font-medium">
              <li><a href="#home" className="text-black hover:text-[#ee5e2c] dark:hover:text-[#ee5e2c]   dark:text-white">Home</a></li>
              <li><a href="#about" className=" text-black hover:text-[#ee5e2c] dark:hover:text-[#ee5e2c]  dark:text-white">About</a></li>
              <li><a href="#dm" className=" text-black hover:text-[#ee5e2c] dark:hover:text-[#ee5e2c]  dark:text-white">Benifits DM</a></li>
              <li><a href="#clients" className=" text-black hover:text-[#ee5e2c] dark:hover:text-[#ee5e2c]  dark:text-white">Clients</a></li>
              <li><a href="#Blog" className=" text-black hover:text-[#ee5e2c] dark:hover:text-[#ee5e2c]  dark:text-white">Blog</a></li>
              <li><a href="#feedback" className=" text-black hover:text-[#ee5e2c] dark:hover:text-[#ee5e2c]  dark:text-white">Feedback</a></li>
              <li><a href="#contact" className=" text-black hover:text-[#ee5e2c] dark:hover:text-[#ee5e2c]  dark:text-white">Contact Us</a></li>
            </ul>
            <div className="flex space-x-10 justify-center items-center mb-14">
              <a href="javascript:;"
                className="border border-gray-300 p-2 rounded-full aspect-square text-black  dark:text-white dark:hover:text-[#ee5e2c] transition-all duration-500 hover:text-[#ee5e2c] hover:border-[#ee5e2c] focus-within:outline-0 focus-within:text-[#ee5e2c] focus-within:border-[#ee5e2c]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                    fill="currentColor" />
                </svg>
              </a>
              <a href="javascript:;"
                className="border border-gray-300 p-2 rounded-full aspect-square text-black  dark:text-white dark:hover:text-[#ee5e2c] transition-all duration-500 hover:text-[#ee5e2c] hover:border-[#ee5e2c] focus-within:outline-0 focus-within:text-[#ee5e2c] focus-within:border-[#ee5e2c]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M7.7117 9.93956C7.7117 8.66117 8.76298 7.62456 10.0601 7.62456C11.3573 7.62456 12.4092 8.66117 12.4092 9.93956C12.4092 11.218 11.3573 12.2546 10.0601 12.2546C8.76298 12.2546 7.7117 11.218 7.7117 9.93956ZM6.44187 9.93956C6.44187 11.909 8.06177 13.5055 10.0601 13.5055C12.0585 13.5055 13.6784 11.909 13.6784 9.93956C13.6784 7.97012 12.0585 6.37367 10.0601 6.37367C8.06177 6.37367 6.44187 7.97012 6.44187 9.93956ZM12.9761 6.23228C12.976 6.3971 13.0256 6.55824 13.1184 6.69532C13.2113 6.83239 13.3433 6.93926 13.4978 7.00239C13.6523 7.06552 13.8223 7.08209 13.9863 7.05C14.1503 7.01791 14.301 6.93861 14.4193 6.82211C14.5377 6.70561 14.6182 6.55716 14.6509 6.39552C14.6836 6.23388 14.667 6.06632 14.603 5.91402C14.5391 5.76173 14.4307 5.63153 14.2917 5.53991C14.1527 5.44829 13.9893 5.39935 13.822 5.39928H13.8217C13.5975 5.39939 13.3825 5.48717 13.224 5.64336C13.0654 5.79954 12.9763 6.01136 12.9761 6.23228ZM7.21337 15.5922C6.52637 15.5613 6.15296 15.4486 5.90481 15.3533C5.57583 15.2271 5.3411 15.0767 5.0943 14.8338C4.8475 14.591 4.69474 14.3598 4.56722 14.0356C4.47049 13.7912 4.35605 13.4231 4.32482 12.746C4.29066 12.014 4.28384 11.7941 4.28384 9.93962C4.28384 8.08512 4.29123 7.86584 4.32482 7.13323C4.35611 6.45617 4.47139 6.08878 4.56722 5.84362C4.6953 5.51939 4.84784 5.28806 5.0943 5.04484C5.34076 4.80162 5.57526 4.65106 5.90481 4.5254C6.15285 4.43006 6.52637 4.31728 7.21337 4.28651C7.95613 4.25284 8.17925 4.24612 10.0601 4.24612C11.9411 4.24612 12.1644 4.25339 12.9078 4.28651C13.5948 4.31734 13.9676 4.43095 14.2163 4.5254C14.5453 4.65106 14.7801 4.80195 15.0268 5.04484C15.2736 5.28773 15.4258 5.51939 15.5539 5.84362C15.6507 6.08806 15.7651 6.45617 15.7963 7.13323C15.8305 7.86584 15.8373 8.08512 15.8373 9.93962C15.8373 11.7941 15.8305 12.0134 15.7963 12.746C15.765 13.4231 15.65 13.7911 15.5539 14.0356C15.4258 14.3598 15.2733 14.5912 15.0268 14.8338C14.7804 15.0765 14.5453 15.2271 14.2163 15.3533C13.9683 15.4486 13.5948 15.5614 12.9078 15.5922C12.165 15.6258 11.9419 15.6326 10.0601 15.6326C8.1784 15.6326 7.9559 15.6258 7.21337 15.5922ZM7.15503 3.03717C6.40489 3.07084 5.8923 3.18806 5.44465 3.35973C4.98105 3.53701 4.58859 3.77484 4.19641 4.16073C3.80423 4.54662 3.56352 4.93401 3.38364 5.39089C3.20945 5.83234 3.09051 6.33723 3.05635 7.07651C3.02162 7.81695 3.01367 8.05367 3.01367 9.93956C3.01367 11.8255 3.02162 12.0622 3.05635 12.8026C3.09051 13.542 3.20945 14.0468 3.38364 14.4882C3.56352 14.9448 3.80429 15.3327 4.19641 15.7184C4.58853 16.1041 4.98105 16.3416 5.44465 16.5194C5.89314 16.6911 6.40489 16.8083 7.15503 16.842C7.90675 16.8756 8.14655 16.884 10.0601 16.884C11.9737 16.884 12.2139 16.8762 12.9653 16.842C13.7155 16.8083 14.2277 16.6911 14.6756 16.5194C15.139 16.3416 15.5317 16.1043 15.9239 15.7184C16.3161 15.3325 16.5563 14.9448 16.7367 14.4882C16.9108 14.0468 17.0304 13.5419 17.064 12.8026C17.0981 12.0616 17.1061 11.8255 17.1061 9.93956C17.1061 8.05367 17.0981 7.81695 17.064 7.07651C17.0298 6.33717 16.9108 5.83206 16.7367 5.39089C16.5563 4.93428 16.3154 4.54723 15.9239 4.16073C15.5323 3.77423 15.139 3.53701 14.6762 3.35973C14.2277 3.18806 13.7154 3.07028 12.9658 3.03717C12.2145 3.00351 11.9743 2.99512 10.0607 2.99512C8.14712 2.99512 7.90675 3.00295 7.15503 3.03717Z"
                    fill="currentColor" />
                </svg>
              </a>
              <a href="javascript:;"
                className="border border-gray-300 p-2 rounded-full aspect-square text-black  dark:text-white dark:hover:text-[#ee5e2c] transition-all duration-500 hover:text-[#ee5e2c] hover:border-[#ee5e2c] focus-within:outline-0 focus-within:text-[#ee5e2c] focus-within:border-[#ee5e2c]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M6.87818 15.5556V7.87128H4.31767V15.5556H6.87845H6.87818ZM5.59846 6.82229C6.49118 6.82229 7.04695 6.23223 7.04695 5.49481C7.03024 4.74059 6.49118 4.16699 5.61544 4.16699C4.7391 4.16699 4.16675 4.74059 4.16675 5.49474C4.16675 6.23216 4.72232 6.82223 5.58168 6.82223H5.59826L5.59846 6.82229ZM8.29546 15.5556H10.8558V11.2648C10.8558 11.0354 10.8725 10.8055 10.9401 10.6417C11.1251 10.1826 11.5464 9.70742 12.2539 9.70742C13.1802 9.70742 13.551 10.412 13.551 11.4451V15.5556H16.1112V11.1497C16.1112 8.78945 14.8482 7.69112 13.1636 7.69112C11.7825 7.69112 11.1759 8.46114 10.8389 8.9856H10.856V7.87154H8.29559C8.32901 8.59243 8.29539 15.5559 8.29539 15.5559L8.29546 15.5556Z"
                    fill="currentColor" />
                </svg>
              </a>
              <a href="javascript:;"
                className="border border-gray-300 p-2 rounded-full aspect-square text-black  dark:text-white dark:hover:text-[#ee5e2c] transition-all duration-500 hover:text-[#ee5e2c] hover:border-[#ee5e2c] focus-within:outline-0 focus-within:text-[#ee5e2c] focus-within:border-[#ee5e2c]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M15.9329 5.13919C16.5667 5.31036 17.0648 5.80978 17.2332 6.44286C17.5396 7.59178 17.5396 9.99044 17.5396 9.99044C17.5396 9.99044 17.5396 12.3891 17.2332 13.538C17.0625 14.1734 16.5643 14.6729 15.9329 14.8417C14.7869 15.1489 10.1889 15.1489 10.1889 15.1489C10.1889 15.1489 5.5932 15.1489 4.44487 14.8417C3.81106 14.6705 3.3129 14.1711 3.14451 13.538C2.83813 12.3891 2.83813 9.99044 2.83813 9.99044C2.83813 9.99044 2.83813 7.59178 3.14451 6.44286C3.31524 5.80744 3.8134 5.30801 4.44487 5.13919C5.5932 4.83203 10.1889 4.83203 10.1889 4.83203C10.1889 4.83203 14.7869 4.83203 15.9329 5.13919ZM12.5393 9.99044L8.72007 12.2015V7.77936L12.5393 9.99044Z"
                    fill="currentColor" />
                </svg>
              </a>
            </div>
            <span className="text-lg text-bl text-center block  dark:text-white">©<a href="/#">Dev Jayakumar</a> 2024, All rights reserved.</span>
          </div>
        </div>
      </footer>

    </>
  );
};

export default CombinedComponent;

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1g0wge5', 'template_cxw3p9p', form.current, {
        publicKey: 'EGIvTJ4oQ-kW4xENZ',
      })
      .then(
        () => {
          toast.success('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
         toast.error('Something went wrong',error.txt);
        },
      );
  };
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-[60vh] bg-gradient-to-r from-[#ff7849] via-[#ee5e2c] to-[#d54c1b] p-6 lg:p-16 text-white dark:from-[#ff7849] dark:via-[#ee5e2c] dark:to-[#d54c1b]">
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
        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
        <Toaster />
          <label className="mb-2 font-bold">Name *</label>
          <input
            type="text"
            className="p-2 mb-4 border border-gray-300 rounded-md dark:border-white dark:bg-gray-50 dark:text-white"
            placeholder="Your Name"
            required
            name="to_name"
          />
          <label className="mb-2 font-bold">Email Address *</label>
          <input
            type="email"
            className="p-2 mb-4 border border-gray-300 rounded-md dark:border-white dark:bg-gray-50 dark:text-white"
            placeholder="email@gmail.com"
            required
            name="from_name"
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
  );
};

export default ContactForm;

import React from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

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

const BenefitsOfDigitalMarketing = () => {
  return (
    <section className="relative py-20 bg-[#f9f9f9] dark:bg-black overflow-hidden">
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
  );
};

export default BenefitsOfDigitalMarketing;

import React from "react";

const Blog = () => {
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

  return (
    <section className="py-16 bg-white dark:bg-black">
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
  );
};

export default Blog;

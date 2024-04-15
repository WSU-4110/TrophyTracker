import React from 'react';

const News = () => {
  return (
    <section id="news" className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]">
      <div className="container mx-auto px-4">
        <h1 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2] text-center">
          Latest News
        </h1>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 text-center">
          Stay updated with the latest news and updates from our team and the industry.
        </p>
      </div>
    </section>
  );
};

export default News;

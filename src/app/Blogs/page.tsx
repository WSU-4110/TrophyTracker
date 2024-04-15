import React from 'react';

const Blog = () => {
  // Example blog posts data tailored to gaming news
  const posts = [
    {
      id: 1,
      title: 'New Overwatch Update Brings Exciting Changes',
      summary: 'The latest Overwatch update introduces a new map and balance changes that are sure to shake up the competitive scene. Explore what\'s new and how it might affect your gameplay strategy.',
      imageUrl: '/images/blog-overwatch-update.jpg' // Make sure to replace with actual path
    },
    {
      id: 2,
      title: 'Destiny 2’s New Season: What You Need to Know',
      summary: 'Dive into the new season of Destiny 2 with our comprehensive guide. Discover the new features, seasonal rewards, and challenges awaiting Guardians in this expansive update.',
      imageUrl: '/images/blog-destiny-season.jpg' // Make sure to replace with actual path
    },
    {
      id: 3,
      title: 'Top New Games Releasing This Month',
      summary: 'Stay ahead of the game with our rundown of the most anticipated game releases this month. Find out what\'s coming to your favorite platforms and prepare for exciting new adventures.',
      imageUrl: '/images/blog-new-games.jpg' // Make sure to replace with actual path
    },
  ];

  return (
    <section id="blog" className="bg-gray-100 py-12 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white text-center">
          Trophy Tracker Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-900">
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h2 className="font-semibold text-xl text-gray-800 dark:text-white">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {post.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

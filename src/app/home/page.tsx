// pages/index.tsx
import React from 'react';
import Link from 'next/link';
import { FaArrowUp, FaArrowDown, FaCommentAlt } from 'react-icons/fa';

const mockPosts = [
  {
    id: 1,
    title: 'Stinger GT2 Scorpion Package for $37k worth it?',
    author: 'u/LeCordonB1eu',
    upvotes: 11,
    downvotes: 0,
    content: 'Found a certified 2022 Stinger GT2 with scorpion package. It has close to 40k miles on it but the pictures look clean. Dealer wants $37k for it. Is this worth it or too expensive?',
    comments: [
      { id: 1, text: 'Totally agree!' },
      { id: 2, text: 'Seems like a decent deal.' },
    ],
  },
  // ...additional mock posts
];

const HomePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="border-b border-gray-700">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link href="/" className="text-xl font-semibold">
            Reddit Clone
          </Link>
          <Link href="/submit" className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded transition duration-300">
            Create Post
          </Link>
        </div>
      </header>

      <main className="container mx-auto p-4">
        {mockPosts.map((post) => (
          <div key={post.id} className="bg-gray-800 rounded-md p-4 mb-4">
            <div className="flex items-start">
              <div className="flex flex-col items-center mr-4">
                <FaArrowUp className="cursor-pointer hover:text-gray-400 text-xl" />
                <span className="text-sm font-semibold my-1">{post.upvotes - post.downvotes}</span>
                <FaArrowDown className="cursor-pointer hover:text-gray-400 text-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-gray-400 text-sm">Posted by {post.author}</p>
                <p className="mt-2 text-gray-300 text-sm">{post.content}</p>
                <div className="flex items-center text-sm mt-2">
                  <FaCommentAlt className="mr-1 text-gray-400" />
                  <span className="hover:text-gray-300 transition duration-300 cursor-pointer">{post.comments.length} comments</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default HomePage;

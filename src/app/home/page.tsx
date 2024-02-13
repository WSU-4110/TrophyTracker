// pages/index.tsx
import React from 'react';
import Link from 'next/link';

const mockPosts = [
  {
    id: 1,
    title: 'Next.js is awesome!',
    author: 'user1',
    upvotes: 120,
    downvotes: 3,
    comments: [{ id: 1, text: 'Totally agree!' }, { id: 2, text: 'Love it!' }],
  },
  // Add more posts as needed...
];

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <nav className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">home interface filler</h1>
        <Link href="/create-post" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block">
          Create Post
        </Link>
      </nav>
      <div>
        {mockPosts.map((post) => (
          <div key={post.id} className="bg-white rounded shadow p-4 mb-6">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-800">Posted by {post.author}</p>
            <div className="mt-2">
              <span className="text-green-600">👍 {post.upvotes}</span>
              <span className="ml-4 text-red-600">👎 {post.downvotes}</span>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Comments:</h3>
              {post.comments.map((comment) => (
                <p key={comment.id} className="text-sm text-gray-800 mt-1">- {comment.text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

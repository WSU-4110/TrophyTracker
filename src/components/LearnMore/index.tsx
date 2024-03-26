import React from "react";

const LearnMore: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 py-10"></div>
      <div className="mx-auto max-w-2xl px-4">
        <h1 className="mb-4 text-3xl font-bold">Learn More</h1>
        <p className="mb-4 text-gray-700">Welcome to the Learn More page!</p>
        <p className="mb-4 text-gray-700">
          Here, you can provide additional information about your application or
          feature.
        </p>
        <p className="mb-4 text-gray-700">
          Feel free to customize this page with your own content.
        </p>
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h2 className="mb-4 text-2xl font-bold">Discussion Board</h2>
          <div className="mb-4">
            <h3 className="text-lg font-bold">User1:</h3>
            <p className="text-gray-700">
              Hey, I just achieved the &quot;Pentakill&quot; achievement in
              League of Legends!
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">User2:</h3>
            <p className="text-gray-700">
              That&apos;s amazing! Congrats on the Pentakill! It&apos;s not an
              easy achievement to get.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">User1:</h3>
            <p className="text-gray-700">
              Thanks! It was an intense team fight, but I managed to take down
              all five enemies in one go.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">User2:</h3>
            <p className="text-gray-700">
              That&apos;s some impressive skill! I hope I can achieve a
              Pentakill someday too.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnMore;

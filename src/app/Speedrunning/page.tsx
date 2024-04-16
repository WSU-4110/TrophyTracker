import React from "react";

const Speedrunning = () => {
  return (
    <section
      id="charts"
      className="bg-gray-50 py-12 transition duration-500 ease-in-out dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1
          className="animate-text mb-12 bg-gradient-to-r from-green-400 via-purple-600 to-blue-500 bg-clip-text text-center text-6xl font-extrabold 
          text-transparent dark:from-green-300 dark:via-blue-400 dark:to-purple-500"
        >
          Speedruns
        </h1>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-14">
          <div className="col-span-1 flex justify-center sm:col-span-2 lg:col-span-3">
            <div className="transform rounded-xl bg-white p-10 shadow-2xl filter backdrop-blur-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-inner dark:bg-gray-700">
              <h2 className="mb-6 text-center text-4xl font-semibold text-gray-800 dark:text-gray-100"></h2>
              <p className="text-xl text-gray-600 dark:text-gray-200">
                Check out the fastest times in any game!
              </p>
              <div
                className="mt-10 flex h-64 items-center justify-center overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-600"
                style={{ height: "1000px", width: "800px" }}
              >
                <iframe
                  src="https://www.speedrun.com/sm64"
                  style={{ border: "none" }}
                  name="myiFrame"
                  scrolling="no"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speedrunning;

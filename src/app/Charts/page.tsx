import React from "react";

const Charts = () => {
  return (
    <section id="charts" className="bg-gray-50 py-12 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-12 bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 bg-clip-text text-center text-6xl font-black text-transparent dark:from-green-300 dark:via-blue-400 dark:to-purple-500">
          Performance Charts
        </h1>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-14">
          <div className="col-span-1 flex justify-center sm:col-span-2 lg:col-span-3">
            <div className="transform rounded-xl bg-white bg-opacity-90 p-10 shadow-xl backdrop-blur-lg backdrop-filter transition-all hover:scale-110 dark:bg-gray-700">
              <h2 className="mb-6 text-center text-4xl font-semibold text-gray-800 dark:text-gray-100"></h2>
              <p className="text-xl text-gray-600 dark:text-gray-200">
                Find out what&rsquo;s being played right now!
              </p>
              <div
                className="mt-10 flex h-64 items-center justify-center rounded-xl bg-gray-200 dark:bg-gray-600"
                style={{ height: "1000px", width: "800px" }}
              >
                <iframe
                  src="https://steamcharts.com/"
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

export default Charts;

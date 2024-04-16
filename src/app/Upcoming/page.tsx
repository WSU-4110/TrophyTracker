import React from "react";

const UpcomingGames = () => {
  return (
    <section
      id="upcoming-games"
      className="relative py-12 before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-900 before:via-black before:to-gray-800 dark:before:from-gray-800 dark:before:via-gray-900 dark:before:to-black"
    >
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-center text-6xl font-black leading-tight text-transparent">
          Upcoming Games
        </h1>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-14">
          <div className="col-span-1 flex justify-center sm:col-span-2 lg:col-span-3">
            <div className="transform rounded-xl bg-white p-10 shadow-2xl backdrop-blur-lg transition-transform duration-300 ease-in-out hover:scale-110 dark:bg-gray-800">
              <p className="text-xl font-semibold text-gray-600 dark:text-gray-300">
                Explore the most anticipated games of the year!
              </p>
              <div className="mt-10 flex items-center justify-center overflow-hidden rounded-xl">
                <iframe
                  src="https://steambase.io/games/upcoming-steam-game-releases"
                  style={{
                    border: "none",
                    boxShadow: "0 4px 14px 0 rgba(0, 118, 255, 0.39)",
                    borderRadius: "12px",
                    height: "1000px",
                    width: "800px",
                    transition: "transform .2s", // Smooth transition for scaling
                  }}
                  name="upcomingGamesIframe"
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 z-0 h-full w-full bg-cover bg-fixed bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url("https://example.com/background-image.jpg")',
        }}
      ></div>{" "}
      {/* Optional: Background image */}
    </section>
  );
};

export default UpcomingGames;

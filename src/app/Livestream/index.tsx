import React from "react";

const Livestream = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-800 text-white">
      <header className="bg-gray-900 p-4 shadow-lg">
        <h1 className="text-xl font-bold">Game Streaming Dashboard</h1>
      </header>

      <div className="flex flex-grow">
        <aside className="w-64 space-y-4 bg-gray-900 p-4">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">Channels</h2>
            <a href="#" className="text-gray-400 hover:text-white">
              Channel 1
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Channel 2
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Channel 3
            </a>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">Games</h2>
            <a href="#" className="text-gray-400 hover:text-white">
              Game 1
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Game 2
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Game 3
            </a>
          </div>
        </aside>

        <main className="flex flex-grow flex-col items-center p-4">
          <div className="relative w-full max-w-4xl pb-[56.25%]">
            {" "}
            {/* 16:9 Aspect Ratio */}
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src="https://player.twitch.tv/?channel=gamesdonequick&parent=https://trophy-tracker-wsu.vercel.app/"
              frameBorder="0"
              allowFullScreen={true}
              scrolling="no"
            ></iframe>
          </div>
          <section className="mt-4 w-full max-w-4xl rounded-lg bg-gray-900 p-4">
            <h2 className="text-lg font-bold">Stream Details</h2>
            <p className="mt-2">
              Welcome to the official GamesDoneQuick streaming page. Here you
              can find speedruns and playthroughs of various games. Feel free to
              engage in the chat and interact with the community.
            </p>
          </section>
        </main>
      </div>

      <footer className="bg-gray-900 p-4 text-center">
        <p>&copy; 2023 Game Streams. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Livestream;

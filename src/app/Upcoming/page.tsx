import React from 'react';

const UpcomingGames = () => {
  // Example array of upcoming games
  const games = [
    {
      id: 1,
      title: 'Elden Ring II',
      releaseDate: 'March 15, 2024',
      imageUrl: '/images/upcoming/elden-ring-ii.jpg',
      description: 'Experience the sequel to the critically acclaimed open-world RPG by FromSoftware, featuring an expanded world and deeper lore.'
    },
    {
      id: 2,
      title: 'Horizon Forbidden West: Return to the Wild',
      releaseDate: 'May 22, 2024',
      imageUrl: '/images/upcoming/horizon-forbidden-west.jpg',
      description: 'Continue Aloy’s adventure in this breathtaking sequel, exploring distant lands and facing new dangers in a post-apocalyptic world.'
    },
    {
      id: 3,
      title: 'Final Fantasy XVI',
      releaseDate: 'September 9, 2024',
      imageUrl: '/images/upcoming/final-fantasy-xvi.jpg',
      description: 'Dive into the next chapter of this iconic series with a new storyline, enhanced graphics, and innovative gameplay mechanics.'
    },
  ];

  return (
    <section id="upcoming-games" className="bg-gray-100 py-12 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="mb-6 text-4xl font-bold text-center text-gray-800 dark:text-white">
          Upcoming Games
        </h1>
        <div className="space-y-8">
          {games.map(game => (
            <div key={game.id} className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-900 flex flex-col md:flex-row">
              <img src={game.imageUrl} alt={game.title} className="w-full md:w-1/3 object-cover"/>
              <div className="p-6 flex-1">
                <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">{game.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {game.description}
                </p>
                <p className="text-sm font-semibold text-gray-800 dark:text-white mt-2">
                  Release Date: {game.releaseDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingGames;

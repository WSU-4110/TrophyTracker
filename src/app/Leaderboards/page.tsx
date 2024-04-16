import React from 'react';

const Leaderboards = () => {
  // Example leaderboard data
  const leaderboardData = [
    {
      rank: 1,
      name: 'DragonSlayer42',
      score: 987654,
      game: 'Elden Ring II'
    },
    {
      rank: 2,
      name: 'PixelPirate',
      score: 925100,
      game: 'Horizon Forbidden West'
    },
    {
      rank: 3,
      name: 'CraftyCoder',
      score: 875000,
      game: 'Minecraft Extreme'
    },
    // More entries can be added here
  ];

  return (
    <section id="leaderboards" className="bg-gray-100 py-12 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="mb-6 text-4xl font-bold text-center text-gray-800 dark:text-white">
          Leaderboards
        </h1>
        <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-900">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                  Rank
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                  Player
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                  Score
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                  Game
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800">
              {leaderboardData.map(entry => (
                <tr key={entry.rank}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {entry.rank}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">
                    {entry.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">
                    {entry.score.toLocaleString()} {/* Formatting large numbers */}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">
                    {entry.game}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Leaderboards;

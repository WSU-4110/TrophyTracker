import React from 'react';

const Speedrunning = () => {
  // Example speedrunning data
  const speedruns = [
    {
      rank: 1,
      player: 'FastFalcon',
      time: '1h 27m 34s',
      game: 'The Legend of Zelda: Breath of the Wild',
      category: 'Any%'
    },
    {
      rank: 2,
      player: 'QuickQuester',
      time: '45m 16s',
      game: 'Super Mario Odyssey',
      category: 'Any%'
    },
    {
      rank: 3,
      player: 'NimbleNinja',
      time: '2h 19m 12s',
      game: 'Dark Souls III',
      category: 'All Bosses'
    },
    // Additional entries can be added here
  ];

  return (
    <section id="speedrunning" className="bg-gray-100 py-12 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="mb-6 text-4xl font-bold text-center text-gray-800 dark:text-white">
          Speedrunning Records
        </h1>
        <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-900">
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
                  Time
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                  Game
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                  Category
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800">
              {speedruns.map(run => (
                <tr key={run.rank}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {run.rank}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">
                    {run.player}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">
                    {run.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">
                    {run.game}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">
                    {run.category}
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

export default Speedrunning;

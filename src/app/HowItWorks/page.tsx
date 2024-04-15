import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Sign In with GitHub',
      summary: 'Create your account by signing in through GitHub, ensuring a secure and swift registration process.',
      imageUrl: '/images/HowItWorks/SignInWithGit.png'
    },
    {
      id: 2,
      title: 'Click on "Create an Achievement"',
      summary: 'Access the "Create an Achievement" section at the bottom of your dashboard to start setting up your game achievements. If your game is not there, feel free to add it.',
      imageUrl: '/images/HowItWorks/CreateAnAchievement.png'
    },
    {
      id: 3,
      title: 'Select or Add Your Game',
      summary: 'Choose a game from our extensive library or add a new one if it\'s not already listed.',
      imageUrl: '/images/HowItWorks/SelectGame.png'
    },
    {
      id: 4,
      title: 'Name Your Achievement',
      summary: 'Define your achievements by giving them unique names that describe the milestones you\'ve reached.',
      imageUrl: '/images/HowItWorks/NameAchiev.png'
    },
    {
      id: 5,
      title: 'Determine Difficulty',
      summary: 'Use the slider to set the difficulty level of your achievement, tailoring challenges to your skills.',
      imageUrl: '/images/HowItWorks/DetermineDifficulty.png'
    },
    {
      id: 6,
      title: 'Add a Description',
      summary: 'Describe your achievement, detailing what it entails and any special notes related to completing it.',
      imageUrl: '/images/HowItWorks/Description.png'
    },
    {
      id: 7,
      title: 'Upload and Interact',
      summary: 'Once everything is set, click "Upload" and start enjoying the community interaction with other users.',
      imageUrl: '' // No image for this step
    },
  ];

  return (
    <section id="how-it-works" className="bg-gray-100 py-12 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="mb-6 text-4xl font-bold text-center text-gray-800 dark:text-white">
          How It Works
        </h1>
        <div className="space-y-8">
          {steps.map(step => (
            <div key={step.id} className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-900 flex flex-col md:flex-row">
              <div className="p-6 flex-1">
                <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">{`${step.id}. ${step.title}`}</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.summary}
                </p>
              </div>
              {step.imageUrl && (
                <div className="md:flex-1">
                  <img src={step.imageUrl} alt={`Step ${step.id}`} className="w-full h-auto object-contain"/>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#/" className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

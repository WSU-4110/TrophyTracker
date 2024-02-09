import React from 'react';

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-cover bg-center h-96 text-white py-24 px-4 object-fill" style={{ backgroundImage: "url('/testbackround.jpg')" }}>
        <div className="md:w-1/2">
          <p className="font-bold text-sm uppercase">Welcome to TrophyTracker</p>
          <p className="text-3xl font-bold">About Us</p>
          <p className="text-2xl mb-4">Track all your achievemnts across multiple platforms all in one spot.</p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="py-8 px-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-center">Our Mission</h2>
        </div>
        <p className="text-lg text-gray-700">
        At TrophyTracker, we empower individuals to chronicle their journeys and celebrate every milestone, born from the ambition of Wayne State students, our platform is dedicated to creating a vibrant community where achievements are not just recorded but shared, discussed, and celebrated. Our mission is to provide a comprehensive and engaging space that fosters motivation, inspiration, and a sense of accomplishment, believing in the power of collective encouragement and the value of every success, big or small. Through AchieveTogether, we aim to connect like-minded individuals, enabling them to support and uplift each other as they pursue personal growth and excellence. Our core values of community, inspiration, inclusivity, growth, integrity, and innovation reflect our commitment to building strong, positive connections among our users, facilitating meaningful discussions and shared experiences, and prioritizing personal and collective growth with a focus on diversity and safety. We are driven by a dedication to transparency, honesty, and continuous improvement, actively seeking feedback to enhance the user experience. AchieveTogether is not just a platform; it’s a movement towards recognizing and valuing every step of the achievement journey, creating a world where every accomplishment is acknowledged, and every milestone is a step towards collective empowerment        </p>
      </div>
      
      {/* Additional sections would go here */}
    </div>
  );
};

export default AboutUs;
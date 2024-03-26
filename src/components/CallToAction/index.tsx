import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap items-stretch">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center">
                {/* Heading */}
                <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                  <span>What Are You Waiting For?</span>
                  <span className="text-3xl font-normal md:text-[40px]">
                    {" "}
                    Start Tracking Your Achievements Now{" "}
                  </span>
                </h2>
                {/* Description */}
                <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
                  Don&apos;t miss out on the fun! Millions of gamers are already
                  using TrophyTracker to manage their games and achievements.
                  Join the community and start tracking your progress today!
                </p>
                {/* Link */}
                <Link
                  href="/auth/signin"
                  className="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Background SVG */}
      <div>
        <span className="absolute left-0 top-0">
          <svg
            width="495"
            height="470"
            viewBox="0 0 495 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Circle */}
            <circle
              cx="55"
              cy="442"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            {/* Circle */}
            <circle
              cx="446"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            {/* Path */}
            <path
              d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
              stroke="white"
              strokeOpacity="0.08"
              strokeWidth="12"
            />
          </svg>
        </span>
        <span className="absolute bottom-0 right-0">
          <svg
            width="493"
            height="470"
            viewBox="0 0 493 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Circle */}
            <circle
              cx="462"
              cy="5"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            {/* Circle */}
            <circle
              cx="49"
              cy="470"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            {/* Path */}
            <path
              d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
              stroke="white"
              strokeOpacity="0.06"
              strokeWidth="13"
            />
          </svg>
        </span>
      </div>
      {/* Key Features */}
      <div className="container mx-auto mt-16">
        <h3 className="mb-8 text-center text-2xl font-bold text-white">
          Key Features
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="rounded-lg bg-white p-6">
            <h4 className="mb-2 text-lg font-bold">Achievement Tracking</h4>
            <p className="text-gray-600">
              Easily track your achievements across multiple games and
              platforms. Keep a record of your progress and share your
              accomplishments with friends.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="rounded-lg bg-white p-6">
            <h4 className="mb-2 text-lg font-bold">Community</h4>
            <p className="text-gray-600">
              Join a vibrant community of gamers who share your passion. Connect
              with like-minded individuals, discuss games, and discover new
              challenges.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="rounded-lg bg-white p-6">
            <h4 className="mb-2 text-lg font-bold">Game Library</h4>
            <p className="text-gray-600">
              Access a vast library of games and keep track of your collection.
              Get recommendations based on your preferences and explore new
              titles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

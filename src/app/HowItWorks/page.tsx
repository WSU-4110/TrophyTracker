// Importing Image component from next.js for image rendering
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section
      id="HowItWorks"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  How TrophyTracker Works
                </h2>
                <div className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  Follow these simple steps to start tracking your gaming achievements:
                  <ol className="list-decimal pl-5">
                    <li>Make an account by signing in with GitHub.</li>
                    <li>Click on Achievements.</li>
                    <li>Select your game or add a new one to our library.</li>
                    <li>Name your achievement.</li>
                    <li>Use the slider to determine its difficulty.</li>
                    <li>Add a description of your achievement.</li>
                    <li>Click Upload and enjoy interacting with other users.</li>
                  </ol>
                </div>
                <a
                  href="/#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white duration-300 hover:bg-primary/90"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                    {/* Step by step image */}
                    <Image
                      src="/images/how-it-works/how-it-works-01.jpg"
                      alt="How It Works Step 1"
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    {/* Detailed instruction image */}
                    <Image
                      src="/images/how-it-works/how-it-works-02.jpg"
                      alt="How It Works Step 2"
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

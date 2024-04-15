import React from "react";

const Support = () => {
  return (
    <section
      id="support"
      className="bg-gradient-to-br from-blue-800 via-blue-800 to-blue-900 py-20 dark:from-gray-900 dark:via-gray-800 dark:to-black"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="bg-gradient-to-br from-blue-300 to-teal-100 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Support Center
          </h1>
          <p className="mt-4 text-lg font-medium text-blue-200">
            Have suggestions or need help with TrophyTracker? Contact us!
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap items-start justify-center">
          {/* Contact Form Section */}
          <div className="w-full p-4 md:w-1/2 lg:w-1/3">
            <div className="overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-100 shadow-2xl dark:from-gray-800 dark:to-gray-900">
              <div className="px-6 py-8 sm:p-10">
                <h3 className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-2xl font-semibold text-transparent dark:text-white">
                  Contact Us
                </h3>
                <form className="mt-6 space-y-6">
                  <input
                    type="email"
                    className="block w-full rounded-md border-0 bg-gradient-to-br from-blue-50 to-teal-50 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your email"
                    required
                  />
                  <textarea
                    className="block w-full rounded-md border-0 bg-gradient-to-br from-blue-50 to-teal-50 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    rows={4}
                    placeholder="Your message"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-gradient-to-r from-blue-600 to-teal-600 px-4 py-3 font-semibold text-white shadow-lg hover:from-blue-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Quick Help Section */}
          <div className="w-full p-4 md:w-1/2 lg:w-1/3">
            <div className="overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-100 shadow-2xl dark:from-gray-800 dark:to-gray-900">
              <div className="px-6 py-8 sm:p-10">
                <h3 className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-2xl font-semibold text-transparent dark:text-white">
                  Quick Help
                </h3>
                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Email Us Directly
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a
                        href="mailto:support@TrophyTracker.com"
                        className="text-blue-500 hover:underline focus:text-teal-300"
                      >
                        support@TrophyTracker.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Call Us
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a
                        href="tel:+15551234567"
                        className="text-blue-500 hover:underline focus:text-teal-300"
                      >
                        +1 555-123-4567
                      </a>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Visit Our Office
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      1234 Tracker Way, Trophy City, TC 56789
                    </p>
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

export default Support;

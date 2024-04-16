import React from "react";

const LegalNotice = () => {
  return (
    <section
      id="legalnotice"
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 pb-12 pt-24 dark:from-cyan-600 dark:to-blue-600"
    >
      <div className="w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-gray-800">
        <div className="p-8 text-center sm:p-12 md:p-16">
          <h1 className="mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent dark:from-green-300 dark:to-blue-400">
            Legal Notice
          </h1>
          <p className="mb-12 text-lg font-light leading-relaxed text-gray-600 dark:text-gray-300">
            Welcome to our gaming platform. This page outlines the legal terms
            and conditions governing your use of our services.
          </p>
          <div className="space-y-8">
            <div className="animate-fade-in-down">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Purpose
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                The primary purpose of this website is to provide a virtual
                space for users to engage in games and activities purely for
                entertainment. This platform is strictly for personal use and
                enjoyment.
              </p>
            </div>
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Commercial Activity
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                We do not engage in any form of commercial sales through this
                platform. There are no goods, services, or monetary transactions
                offered, solicited, or conducted here.
              </p>
            </div>
            <div className="animate-fade-in-down">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                No Warranties
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                All games and services on this platform are provided &quot;as
                is&quot; with no warranties or guarantees. Users participate at
                their own risk with no promise of performance or accuracy.
              </p>
            </div>
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Limitation of Liability
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                The platform, its owners, affiliates, and contributors shall not
                be liable for any damages or losses that may result from
                participation in the games or use of the site.
              </p>
            </div>
            <div className="animate-fade-in-down">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Intellectual Property
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                All content, including games, graphics, text, and interfaces,
                provided on the platform are the property of the site owners or
                are used with permission and are protected by intellectual
                property rights.
              </p>
            </div>
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Acceptance of Terms
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                By using this platform, users agree to comply with and be bound
                by the terms outlined herein. These terms are subject to change
                without prior notice, and continued use of the site constitutes
                agreement to any modified terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalNotice;

import React from 'react';

const PrivacyNotice = () => {
  return (
    <section id="privacy-notice" className="bg-gray-100 py-12 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white text-center">
          Privacy Notice
        </h1>
        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-900">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">Data Collection</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              We collect personal data when you use our website, including information you provide by filling out forms, details of your visits, and the resources that you access. This information includes your IP address, web browser details, and operating system.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-900">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">Use of Data</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              We use the information we collect to provide, maintain, and improve our services, to develop new services, and to protect our company and our users. We also use this information to offer you tailored content – like giving you more relevant search results and ads.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-900">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">Your Rights</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              You have rights under data protection laws in relation to your personal data. These include the right to access, correct, update, or request deletion of your personal data. You can also object to processing of your data, ask us to restrict processing of your data, or request portability of your data.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-900">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">Contact Us</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              If you have any questions or concerns about our use of your personal information, please contact us using the contact details provided in this privacy notice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyNotice;

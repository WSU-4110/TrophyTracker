import React from 'react';

const LegalNotice = () => {
  return (
    <section id="legalnotice" className="bg-gray-100 pb-8 pt-20 dark:bg-gray-800 lg:pb-20 lg:pt-28">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold text-center text-gray-900 dark:text-white">
          Legal Notice
        </h1>

        <div className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Terms of Use</h2>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Please read these terms of use carefully before using our services. By accessing this website or using any of our services, you agree to be bound by these terms.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Privacy Policy</h2>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Your privacy is very important to us. This section explains our policies regarding the collection, use, and disclosure of your personal information when you use our service.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Copyright Information</h2>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
            All content included on this site, such as text, graphics, logos, button icons, images, and software, is the property of our company or its content suppliers and protected by international copyright laws.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Contact Information</h2>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
            If you have any questions about these notices or our service, please contact us on the support page.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalNotice;

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
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Copyright Information</h2>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
            All content included on this site, such as text, graphics, logos, button icons, images, and software, is the property of our company or its content suppliers and protected by international copyright laws.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Disclaimer for TrophyTracker</h2>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
            All the information on this website - <a href="https://trophy-tracker-wsu.vercel.app/" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">https://trophy-tracker-wsu.vercel.app/</a> - is published in good faith and for general information purpose only. TrophyTracker does not make any warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the information on this website (TrophyTracker), is strictly at your own risk. TrophyTracker will not be liable for any losses and/or damages in connection with the use of our website.
          </p>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
            By using our website, you hereby consent to our disclaimer and agree to its terms.
          </p>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Should we update, amend or make any changes to this document, those changes will be prominently posted here.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Accessibility Statement</h2>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
            We are committed to making our website&apos;s content accessible and user friendly to everyone. If you are having difficulty viewing or navigating the content on this website, or notice any content, feature, or functionality that you believe is not fully accessible to people with disabilities, please email our team on the support page, include &quot;Disabled Access&quot; in the subject line, and provide a description of the specific feature you feel is not fully accessible or a suggestion for improvement.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Contact Information</h2>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
            If you have any questions about these notices or our service, please contact us at <a href="mailto:trophytracker@gmail.com" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">trophytracker@gmail.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalNotice;

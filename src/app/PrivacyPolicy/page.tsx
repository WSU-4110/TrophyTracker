import React from "react";

const PrivacyNotice = () => {
  return (
    <section
      id="privacy-notice"
      className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 py-12 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-center text-4xl font-extrabold text-transparent dark:from-green-300 dark:to-blue-400">
          Privacy Notice
        </h1>
        <div className="space-y-8">
          {privacySections.map((section, index) => (
            <PrivacySection
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const privacySections = [
  {
    title: "Introduction",
    content: (
      <>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          Thank you for choosing to be part of our community at [Your Company
          Name] (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;,
          &quot;our&quot;). We are committed to protecting your personal
          information and your right to privacy. If you have any questions or
          concerns about our privacy notice or our practices with regards to
          your personal information, please contact us at
          contact@yourcompany.com.
        </p>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          When you visit our website yourwebsite.com (the &quot;Website&quot;),
          and more generally, use any of our services (the &quot;Services&quot;,
          which include the Website), we appreciate that you are trusting us
          with your personal information. We take your privacy very seriously.
          In this privacy notice, we seek to explain to you in the clearest way
          possible what information we collect, how we use it and what rights
          you have in relation to it. We hope you take some time to read through
          it carefully, as it is important. If there are any terms in this
          privacy notice that you do not agree with, please discontinue use of
          our Services immediately.
        </p>
      </>
    ),
  },
  {
    title: "Data Collection",
    content: (
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
        We collect personal data when you use our website, including information
        you provide by filling out forms, details of your visits, and the
        resources that you access. This information includes your IP address,
        web browser details, time zone, and operating system, as well as
        information concerning your browsing behavior on our website, such as
        the pages you visit and the actions you take.
      </p>
    ),
  },
  {
    title: "Use of Data",
    content: (
      <>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          We use the information we collect to provide, maintain, and improve
          our services, to develop new services, and to protect our company and
          our users. We also use this information to offer you tailored content
          – like giving you more relevant search results and ads.
        </p>
        <ul className="list-disc pl-5">
          <li>
            Communicate with you, including for customer service, to provide you
            with updates and other information relating to the website, and for
            marketing and promotional purposes
          </li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>
      </>
    ),
  },
  {
    title: "Sharing Your Information",
    content: (
      <>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          We may share your information in the following situations:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>With Service Providers:</strong> We may share your personal
            information with service providers to monitor and analyze the use of
            our service, for contact purposes.
          </li>
          <li>
            <strong>For Business Transfers:</strong> We may share or transfer
            your personal information in connection with, or during negotiations
            of, any merger, sale of company assets, financing, or acquisition of
            all or a portion of our business to another company.
          </li>
          <li>
            <strong>With Affiliates:</strong> We may share your information with
            our affiliates, in which case we will require those affiliates to
            honor this privacy notice. Affiliates include our parent company and
            any other subsidiaries, joint venture partners or other companies
            that we control or that are under common control with us.
          </li>
          <li>
            <strong>With Business Partners:</strong> We may share your
            information with our business partners to offer you certain
            products, services or promotions.
          </li>
          <li>
            <strong>With other users:</strong> when you share personal
            information or otherwise interact in the public areas with other
            users, such information may be viewed by all users and may be
            publicly distributed outside.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Your Rights",
    content: (
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
        You have rights under data protection laws in relation to your personal
        data. These include the right to access, correct, update, or request
        deletion of your personal data. You can also object to processing of
        your data, ask us to restrict processing of your data, or request
        portability of your data. Just contact us at the details provided above
        to exercise these rights.
      </p>
    ),
  },
  {
    title: "Data Retention",
    content: (
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
        We will retain your personal information only for as long as is
        necessary for the purposes set out in this privacy notice, unless a
        longer retention period is required or permitted by law (such as tax,
        accounting, or other legal requirements). No purpose in this notice will
        require us keeping your personal information for longer than the period
        of time in which users have an account with us.
      </p>
    ),
  },
  {
    title: "Contact Us",
    content: (
      <>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          If you have any questions or concerns about our use of your personal
          information, please contact us using the contact details provided
          below:
        </p>
        <ul className="list-disc pl-5">
          <li>Email: contact@yourcompany.com</li>
          <li>Phone: (555) 555-5555</li>
          <li>Mail: [Street Address], [City, State, Postal Code]</li>
        </ul>
      </>
    ),
  },
];

const PrivacySection = ({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) => (
  <div className="rounded-xl bg-white p-8 shadow-xl transition-shadow duration-300 hover:shadow-2xl dark:bg-gray-700">
    <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white">
      {title}
    </h2>
    {content}
  </div>
);

export default PrivacyNotice;

import React from "react";

const LearnMore: React.FC = () => {
  return (
    <div className="animate-fade-in-up flex min-h-screen items-center justify-center bg-blue-100 p-4">
      <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-white via-white to-blue-50 shadow-xl">
        <div className="space-y-8 p-10 lg:p-20">
          <h1 className="text-center text-6xl font-extrabold text-gray-900">
            Discover More About TrophyTracker
          </h1>

          <section className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-500 p-2 shadow-xl">
            <div className="rounded-xl bg-white p-10 shadow-lg">
              <h2 className="text-4xl font-bold text-gray-800">
                Join Our Community Chatroom
              </h2>
              <p className="text-lg text-gray-700">
                Connect with a vibrant community of TrophyTracker enthusiasts.
                Share tips, seek advice, and discuss your achievements in a
                dynamic and supportive environment.
              </p>
              <iframe
                title="Community Chatroom"
                src="https://chitchatter.im/public/1c33be8b-ce8d-4138-9909-54e66bf208ce?embed=1"
                allow="camera; microphone; display-capture; fullscreen"
                className="mt-4 w-full rounded-xl shadow-lg"
                style={{ height: "500px" }}
              ></iframe>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-center text-4xl font-bold text-gray-800">
              Chatroom Rules and Etiquette
            </h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {[
                {
                  title: "Be Respectful",
                  content:
                    "Respect everyone's opinion. Personal attacks, insults, or bullying of any kind will not be tolerated.",
                },
                {
                  title: "Stay On Topic",
                  content:
                    "Keep discussions relevant to TrophyTracker and personal achievement tracking. Off-topic posts may be removed.",
                },
                {
                  title: "No Spam",
                  content:
                    "Avoid spamming the chat. Repeated posts or irrelevant content detracts from meaningful conversation.",
                },
                {
                  title: "Privacy Matters",
                  content:
                    "Do not share personal information within the chatroom. Protect your privacy and that of others.",
                },
                {
                  title: "Follow Guidelines",
                  content:
                    "Adhere to all moderator guidelines and instructions. Non-compliance may result in ejection from the chat.",
                },
                {
                  title: "Encourage Others",
                  content:
                    "Support and encourage your fellow trackers. Positive reinforcement goes a long way in building a strong community.",
                },
              ].map((rule, index) => (
                <div key={index} className="space-y-4">
                  <div className="rounded-lg bg-white p-6 shadow transition duration-500 hover:scale-105">
                    <h3 className="font-bold text-gray-800">{rule.title}</h3>
                    <p className="text-gray-600">{rule.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-center text-4xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <details className="rounded-lg bg-white p-6 shadow">
                <summary className="text-xl font-medium text-gray-800">
                  How do I join the TrophyTracker chatroom?
                </summary>
                <p className="mt-2 text-gray-600">
                  Click on the chat window above to be redirected to our
                  platform. Ensure your internet connection is stable for the
                  best experience.
                </p>
              </details>
              <details className="rounded-lg bg-white p-6 shadow">
                <summary className="text-xl font-medium text-gray-800">
                  Is there a cost to using TrophyTracker?
                </summary>
                <p className="mt-2 text-gray-600">
                  No, TrophyTracker is completely free, including full access to
                  the chatroom. We aim to foster a strong, inclusive community.
                </p>
              </details>
              <details className="rounded-lg bg-white p-6 shadow">
                <summary className="text-xl font-medium text-gray-800">
                  Can I use TrophyTracker on mobile?
                </summary>
                <p className="mt-2 text-gray-600">
                  Absolutely! Our platform is optimized for mobile devices,
                  ensuring you can track achievements and interact in chats
                  wherever you are.
                </p>
              </details>
            </div>
          </section>

          <section className="flex justify-center pt-6">
            <div className="w-full max-w-xl">
              <h2 className="text-center text-4xl font-bold text-gray-800">
                Report a User
              </h2>
              <form className="mt-6 rounded-xl bg-white p-8 shadow-lg">
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-bold text-gray-700"
                      htmlFor="username"
                    >
                      Username to Report
                    </label>
                    <input
                      className="mt-1 w-full rounded border px-4 py-2 text-gray-700 focus:ring-blue-500"
                      id="username"
                      type="text"
                      placeholder="Enter Username"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-bold text-gray-700"
                      htmlFor="reason"
                    >
                      Reason for Report
                    </label>
                    <textarea
                      className="mt-1 w-full rounded border px-4 py-2 text-gray-700 focus:ring-blue-500"
                      id="reason"
                      rows={4}
                      placeholder="Describe the issue"
                    ></textarea>
                  </div>
                  <button
                    className="mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring"
                    type="submit"
                  >
                    Submit Report
                  </button>
                </div>
              </form>
            </div>
          </section>

          <div className="mt-6 text-center">
            <p className="text-xl text-gray-600">
              Ready to explore more and enhance your experience? TrophyTracker
              awaits you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;

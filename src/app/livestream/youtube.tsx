/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useState } from "react";

const YouTubeEmbed = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    (async () => {
      const checkVideoAvailability = async () => {
        // This would be replaced with actual logic to determine if the video should be shown
        setShowVideo(true); // For demonstration, we're assuming the video is always available
      };

      await checkVideoAvailability();
    })();
  }, []);

  return (
    <section
      id="youtube-video"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px] text-center">
          <h2 className="text-3xl font-bold text-gray-800">Featured Video</h2>
          <p className="mt-4 text-lg text-gray-600">
            {showVideo
              ? "Watch our featured video below!"
              : "Video currently unavailable."}
          </p>
        </div>

        {showVideo && (
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%" /* 16:9 Aspect Ratio */,
              height: 0,
              clear: "both",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://www.youtube.com/embed/4xDzrJKXOOY?si=WLKLkbQnLceS6g9X"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default YouTubeEmbed;

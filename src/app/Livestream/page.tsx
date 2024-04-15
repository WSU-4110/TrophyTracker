/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useState } from "react";

interface VideoStatus {
  isLoading: boolean;
  isAvailable: boolean;
  error: string;
}

const YouTubeEmbed = () => {
  const [videoStatus, setVideoStatus] = useState<VideoStatus>({
    isLoading: true,
    isAvailable: false,
    error: "",
  });

  useEffect(() => {
    const checkVideoAvailability = async (): Promise<boolean> => {
      return new Promise((resolve) => setTimeout(() => resolve(true), 2000)); // Simulates a network request
    };

    checkVideoAvailability()
      .then((isAvailable) => {
        setVideoStatus({
          isLoading: false,
          isAvailable,
          error: "",
        });
      })
      .catch(() => {
        setVideoStatus({
          isLoading: false,
          isAvailable: false,
          error: "Failed to load the video.",
        });
      });
  }, []);

  return (
    <section
      id="youtube-video"
      className="relative z-20 overflow-hidden bg-gray-800 pb-12 pt-20 text-white dark:bg-black lg:pb-20 lg:pt-28"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Featured Livestream
          </h2>
          <p className="mt-4 text-xl">
            {videoStatus.isLoading
              ? "Loading..."
              : videoStatus.isAvailable
                ? "Dive into the action below!"
                : "Video currently unavailable."}
          </p>
        </div>

        {videoStatus.isAvailable ? (
          <div className="flex justify-center">
            <div className="aspect-w-16 aspect-h-9 w-full max-w-screen-lg">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/zD15w2465p4?si=fAKuhu2CAEm855rt"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ) : videoStatus.isLoading ? (
          <div className="flex items-center justify-center">
            <div
              className="spinner-border text-lightBlue-500 inline-block h-8 w-8 animate-spin rounded-full border-4"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="text-center text-xl text-red-500">
            {videoStatus.error}
          </div>
        )}
      </div>
    </section>
  );
};

export default YouTubeEmbed;

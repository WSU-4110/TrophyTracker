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
      className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-800 via-purple-900 to-blue-900 bg-fixed text-white"
      style={{
        backgroundImage:
          'url("https://www.example.com/path-to-your-background-image.jpg")',
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="rounded-xl border border-gray-200/10 bg-white/10 p-4 text-center shadow-xl shadow-blue-500/50 backdrop-blur-sm md:p-8">
        <h2 className="mb-2 bg-gradient-to-r from-teal-300 to-cyan-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:mb-4 md:text-5xl">
          Featured Livestream
        </h2>
        <p className="mb-4 text-lg md:mb-8 md:text-xl">
          {videoStatus.isLoading
            ? "Loading..."
            : videoStatus.isAvailable
              ? "Dive into the action below!"
              : "Video currently unavailable."}
        </p>

        {videoStatus.isAvailable ? (
          <div className="aspect-w-16 aspect-h-9 mx-auto w-full max-w-screen-lg overflow-hidden rounded-lg shadow-2xl shadow-cyan-500/50">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zD15w2465p4?autoplay=1&mute=1&enablejsapi=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        ) : videoStatus.isLoading ? (
          <div className="flex items-center justify-center">
            <div
              className="spinner-border inline-block h-8 w-8 animate-spin rounded-full border-4 text-cyan-600"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="text-xl text-red-500 md:text-2xl">
            {videoStatus.error}
          </div>
        )}
      </div>
    </section>
  );
};

export default YouTubeEmbed;

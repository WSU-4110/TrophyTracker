/* eslint-disable @next/next/no-page-custom-font */
import Nav from "@/comps/Nav";
import "@/styles/globals.css";
import "@/styles/fonts.css";
import "react-quill/dist/quill.snow.css";
import { Inter } from "next/font/google";
import SessionProvider from "@/comps/SessionProvider";
import { getServerAuthSession } from "@/server/auth";
import { Suspense } from "react";
import { Spinner } from "flowbite-react";
import ToastComp from "@/comps/Toast";
import Footer from "@/components/Footer";
import { ToastContextProvider } from "@/comps/ToastProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Trophy Tracker",
  description:
    "Trophy Tracker is a web app for tracking achievements and trophies in your favorite games.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // without this, the session somehow becomes available to the client initially, but later
  const session = await getServerAuthSession();
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans ${inter.variable}`}>
        <Suspense fallback={<Spinner />}>
          <SessionProvider session={session}>
            <Nav />
            <ToastContextProvider>
              <ToastComp />
              <main>{children}</main>
              <Footer />
            </ToastContextProvider>
          </SessionProvider>
        </Suspense>
      </body>
    </html>
  );
}

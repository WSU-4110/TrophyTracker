/* eslint-disable @next/next/no-sync-scripts */
import Breadcrumbs from "@/comps/Breadcrumbs";
import connect from "@/db/connect";
import Link from "next/link";

export default function Livestream() {
  return (
    <div className="tt-page-layout">
      <h1 className="tt-heading mb-2">Live Stream</h1>
      <Breadcrumbs
        className="mb-6"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Live Stream", href: "/livestream" },
        ]}
      />
      <div className="tt-layout">
        <div id="twitch-embed"></div>
      </div>

      {/* Load the Twitch embed script */}
      <script src="https://player.twitch.tv/js/embed/v1.js"></script>

      {/* Create a Twitch.Player object. This will render within the placeholder div */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            new Twitch.Player("twitch-embed", {
              width: "100%",
              height: "100%",
              channel: "twitchpresents",
              layout: "video",
              theme: "dark"
            });
          `,
        }}
      ></script>
    </div>
  );
}

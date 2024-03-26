"use client";

import { Button } from "flowbite-react";
import { BsFillShareFill } from "react-icons/bs";

interface ShareProps {
  url?: string;
  title?: string;
  text?: string;
}

export default function Share(props: ShareProps) {
  return (
    <Button
      className="w-full bg-pink-500 p-2 font-bold text-white transition-all hover:bg-teal-600 hover:text-black"
      color="teal"
      onClick={async () => {
        if (navigator.share) {
          await navigator.share({
            title: props.title ?? document.title,
            text: props.text ?? document.title,
            url: props.url ?? window.location.href,
          });
        } else {
          alert && alert("Web sharing is not supported in your browser.");
        }
      }}
    >
      <BsFillShareFill size={20} className="mr-2" /> Share
    </Button>
  );
}

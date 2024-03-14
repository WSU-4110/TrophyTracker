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
      className="w-full bg-teal-400 font-bold transition-all hover:bg-teal-500"
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

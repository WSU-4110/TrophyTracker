"use client";

import React, { type ReactNode } from "react";

import { Breadcrumb } from "flowbite-react";

function Contact() {
  return (
    <div className="flex-col items-center justify-center rounded-lg bg-slate-800 p-8 text-white">
      <h1 className="mb-4 text-center text-3xl font-bold">Contact</h1>
      <p className="text-center">
        You can contact us at{" "}
        <a href="mailto:test@gmail.com" className="text-primary"></a>
      </p>
    </div>
  );
}

export default function More() {
  const subPages = React.useCallback((str: string) => {
    const pages = { Contact: <Contact />, about: <h1>About page</h1> };
    return pages[str as keyof typeof pages];
  }, []);
  const [page, setPage] = React.useState<string>("Home");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (
    <div className="w-full flex-col items-center justify-center rounded-lg bg-slate-800 p-8 text-white">
      <h1 className="mb-4 text-center text-3xl font-bold">{page}</h1>
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item onClick={() => setPage("Home")}>
          Projects
        </Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => setPage("Contact")}>
          Contact
        </Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => setPage("About")}>
          About
        </Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => setPage("Pricing")}>
          Pricing
        </Breadcrumb.Item>
      </Breadcrumb>
      <hr className="my-4" />
      {subPages(page as keyof typeof subPages)}
    </div>
  );
}

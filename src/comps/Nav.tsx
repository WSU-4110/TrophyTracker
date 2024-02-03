"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Navbar } from "flowbite-react";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Nav() {
  const { data: session } = useSession();

  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          className="mr-3"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Trophy Tracker
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {!session ? (
          <Button color="info" onClick={() => signIn()}>
            Sign in
          </Button>
        ) : (
          <Button color="dark" onClick={() => signOut()}>
            Sign out
          </Button>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Navbar, Dropdown } from "flowbite-react";
import { signIn, signOut, useSession } from "next-auth/react";
import ProfilePic from "./ProfilePic";
import { HiLogout, HiCog, HiOutlineUserCircle } from "react-icons/hi";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Nav() {
  const { data: session } = useSession();
  const Profile = React.useMemo(
    () =>
      session && (
        <ProfilePic
          img={session.user.image}
          name={session.user.name}
          rounded
          color="info"
        />
      ),
    [session],
  );

  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          className="mr-3"
          alt="Trophy Tracker Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold tracking-tighter dark:text-white">
          <span className={poppins.className}>Trophy Tracker</span>
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {session ? (
          <>
            <Dropdown arrowIcon={false} inline label={Profile}>
              <Dropdown.Header>
                <span className="block text-sm">{session?.user.name}</span>
                <span className="block truncate text-sm font-medium">
                  {session?.user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item icon={HiOutlineUserCircle}>
                Edit Profile
              </Dropdown.Item>
              <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item icon={HiLogout} onClick={() => signOut()}>
                Sign out
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </>
        ) : (
          <Button color="info" onClick={() => signIn()}>
            Sign in
          </Button>
        )}
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          Contact
        </Navbar.Link>
        <Navbar.Link as={Link} href="/about">
          About Us
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

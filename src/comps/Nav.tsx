"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Navbar, Dropdown, Spinner } from "flowbite-react";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import ProfilePic from "./ProfilePic";
import { HiLogout, HiCog, HiOutlineUserCircle } from "react-icons/hi";
import React from "react";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Nav() {
  const { data: staleSession, status: previousStatus } = useSession({
    required: false,
  });
  const [session, setSession] = React.useState(staleSession);
  const [status, setStatus] =
    React.useState<typeof previousStatus>(previousStatus);
  React.useEffect(() => {
    setStatus("loading");
    if (!staleSession) {
      getSession()
        .then((newSession) => {
          setSession(newSession ?? null);
          setStatus(newSession ? "authenticated" : "unauthenticated");
        })
        .catch(() => {
          setStatus("unauthenticated");
        });
    } else {
      setStatus("unauthenticated");
    }
  }, [staleSession]);
  const pathname = usePathname();
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
              <Dropdown.Item
                icon={HiLogout}
                onClick={async () => {
                  await signOut();
                }}
              >
                Sign out
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </>
        ) : status === "loading" ? (
          <Spinner />
        ) : (
          <>
            <Button
              color="info"
              onClick={async () => {
                await signIn();
              }}
            >
              Sign in
            </Button>
            <Navbar.Toggle />
          </>
        )}
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="/" active={pathname == "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/achievements"
          active={pathname.startsWith("/achievement")}
        >
          Achievements
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/about"
          active={pathname.startsWith("/about")}
        >
          About Us
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/library"
          active={pathname.startsWith("/library")}
        >
          Library
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/users"
          active={pathname.startsWith("/users")}
        >
          Users
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

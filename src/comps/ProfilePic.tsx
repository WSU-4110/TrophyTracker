import { Avatar, type AvatarProps, type FlowbiteColors } from "flowbite-react";

interface ProfilePicProps {
  img: string | null | undefined;
  name: string | null | undefined;
  rounded: boolean;
  color: keyof FlowbiteColors;
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}
const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0]?.toUpperCase())
    .join("");

export default function ProfilePic(props: ProfilePicProps) {
  // use the image if it exists, otherwise use the initials, if no initials from the name, use the default avatar
  const avatarProps: AvatarProps = {
    color: props.color || "light",
    rounded: props.rounded,
    className: props?.className,
    children: props?.children,
  };

  if (props.img) {
    avatarProps.img = props.img;
  } else if (props.name) {
    avatarProps.placeholderInitials = getInitials(props.name);
  }

  return (
    <>
      <Avatar {...avatarProps} />
    </>
  );
}

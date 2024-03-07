import { Breadcrumb } from "flowbite-react";
import Link from "next/link";
import { HiHome } from "react-icons/hi";

interface Crumb {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
  className?: string;
}

export default function Breadcrumbs({ crumbs, className }: BreadcrumbsProps) {
  return (
    <Breadcrumb className={className}>
      <Link href="/">
        <Breadcrumb.Item icon={HiHome} />
      </Link>
      {crumbs.map(({ name, href }) => (
        <Breadcrumb.Item key={href}>
          <Link
            className="transition-all hover:text-black hover:underline"
            href={href}
          >
            {name}
          </Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}

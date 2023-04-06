"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { clsx } from "clsx";

export default function ActiveLink({
  href,
  segmentName,
  children,
}: {
  href: string;
  segmentName: string;
  children: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();
  const currentSegment = segment === null ? "/" : segment;

  const isActive = currentSegment === segmentName;

  return (
    <Link
      href={href}
      className={clsx("flex items-center gap-1 border-t py-2", {
        "border-white": isActive,
        "border-transparent": !isActive,
      })}
    >
      {children}
    </Link>
  );
}

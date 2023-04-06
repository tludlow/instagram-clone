import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { BiVideoRecording } from "react-icons/bi";
import ActiveLink from "~/components/ActiveLink";
import { IoAppsSharp } from "react-icons/io5";

interface ProfilePageParamsProps {
  params: {
    profileSlug: string;
  };
  children: React.ReactNode;
}

export async function generateMetadata({
  params: { profileSlug },
}: ProfilePageParamsProps) {
  return { title: profileSlug };
}

export default function ProfileLayout({
  params: { profileSlug },
  children,
}: ProfilePageParamsProps) {
  return (
    <div className="px-72">
      <h2>{profileSlug}</h2>
      <div className="mt-8 flex justify-center border-t border-gray-600">
        <div className="flex gap-8">
          <ActiveLink href={`/${profileSlug}`} segmentName="/">
            <IoAppsSharp className="h-4 w-4" />
            <span className="text-xs uppercase">Posts</span>
          </ActiveLink>
          <ActiveLink href={`/${profileSlug}/reels`} segmentName="reels">
            <BiVideoRecording className="h-4 w-4" />
            <span className="text-xs uppercase">Reels</span>
          </ActiveLink>
          <ActiveLink href={`/${profileSlug}/tagged`} segmentName="tagged">
            <CgProfile className="h-4 w-4" />
            <span className="text-xs uppercase">Tagged</span>
          </ActiveLink>
        </div>
      </div>
      {children}
    </div>
  );
}

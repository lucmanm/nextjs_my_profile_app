import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const icons = [
  { url: "www.linkedin.com/in/lucmanm", name: <RiLinkedinBoxFill className="h-8 w-8 lg:h-12 lg:w-12 hover:text-blue-950" /> },
  { url: "https://github.com/lucmanm/", name: <RiGithubFill className="h-8 w-8 selection:lg:h-12 lg:w-12 hover:text-blue-950"/> },
  { url: "https://www.facebook.com/normadz22", name: <RiFacebookBoxFill className="h-8 w-8 lg:h-12 lg:w-12 hover:text-blue-950"/> },
];

type IconsProps = {
  url: string;
  name: ReactNode;
};

type SocialProps = {
  containerStyle: string;
  iconsStyles: string;
};

const Social: FC<SocialProps> = ({ containerStyle, iconsStyles }) => {
  return (
    <div className={cn(containerStyle)}>
      {icons.map(({ url, name }: IconsProps) => {
        return (
          <Link href={url} key={url}>
            <div className={cn(iconsStyles)}>{name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

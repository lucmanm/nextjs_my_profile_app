import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const icons = [
  {
    url: "http://linkedin.com/in/lucmanm",
    name: <RiLinkedinBoxFill className="h-8 w-8 lg:h-12 lg:w-12 " />,
  },
  {
    url: "https://github.com/lucmanm/",
    name: <RiGithubFill className="h-8 w-8 lg:h-12 lg:w-12" />,
  },
  {
    url: "https://www.facebook.com/normadz22",
    name: <RiFacebookBoxFill className="h-8 w-8 lg:h-12 lg:w-12" />,
  },
];

type IconsProps = {
  url: string;
  name: ReactNode;
};

type SocialProps = {
  className?: string;
  iconsStyles?: string;
};

export const Social: FC<SocialProps> = ({ className, iconsStyles }) => {
  return (
    <div className={cn("flex gap-x-6 mx-auto xl:mx-0 mb-4", className)}>
      {icons.map(({ url, name }: IconsProps) => {
        return (
          <Link href={url} key={url}>
            <div
              className={cn(
                "text-primary dark:text-white/70 text-[20px] hover:text-green-500 dark:hover:text-green-500 transition-all ",
                iconsStyles
              )}
            >
              {name}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

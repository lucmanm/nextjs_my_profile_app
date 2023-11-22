import Link from "next/link";
import React, { FC, ReactNode } from "react";
import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
} from "react-icons/ri";

const icons = [
  { url: "/youtube.com", name: <RiYoutubeFill /> },
  { url: "/LinkedIn", name: <RiLinkedinBoxFill /> },
  { url: "/Github", name: <RiGithubFill /> },
  { url: "/Facebook", name: <RiFacebookBoxFill /> },
  { url: "/Instagram", name: <RiInstagramFill /> },
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
    <div className={`${containerStyle}`}>
      {icons.map(({ url, name }: IconsProps) => {
        return (
          <Link href={url} key={url}>
            <div className={`${iconsStyles}`}>{name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

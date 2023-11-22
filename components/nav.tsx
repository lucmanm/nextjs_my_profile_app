"use client";
import React from "react";

import Link from "next/link";
import {motion} from "framer-motion";
import { usePathname } from "next/navigation";

interface NavProps {
  containerStyles: string;
  LinkStyles: string;
  underlineStyles: string;
}

const links = [
  { url: "/", name: "home" },
  { url: "/projects", name: "my projects" },
  { url: "/contact", name: "contact me" },
];

const Nav: React.FC<NavProps> = ({
  containerStyles,
  LinkStyles,
  underlineStyles,
}) => {
  const path = usePathname();

  return (
    <div className={`${containerStyles}`}>
      {links.map(({ url, name }) => (
        <Link href={url} key={name} className={`capitalize ${LinkStyles}`}>
          {url === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )}
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Nav;

"use client";
import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface NavProps {
  className?: string;
  LinkStyles?: string;
  underlineStyles?: string;
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const links = [
  { url: "/", name: "home" },
  { url: "/projects", name: "my projects" },
  { url: "/contact", name: "contact me" },
];

export const Navigation: React.FC<NavProps> = (props) => {
  const router = useRouter();
  const path = usePathname();

  const onClickLink = (url: string) => {
    props.isOpen && props.setIsOpen && props.setIsOpen(!props.isOpen);
    router.push(url);
  };

  return (
    <nav className={cn(props.className)}>
      {links.map(({ url, name }) => (
        <Button
          variant="ghost"
          onClick={() => onClickLink(url)}
          key={name}
          className={`capitalize hover:bg-inherit max-sm:text-left ${props.LinkStyles}`}
        >
          {url === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${props.underlineStyles}`}
            />
          )}
          {name}
        </Button>
      ))}
    </nav>
  );
};

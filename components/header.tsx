"use client";
import { useEffect, useState } from "react";
import Logo from "./logo";
import MobileNav from "./mobile-nav";
import Nav from "./nav";
import ThemeToggler from "./theme-toggler";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  // Error: Typescript any not sure what is the type
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Error: Navigation in dark mode not clear
  return (
    <header
      className={` dark:bg-accent ${
        header
          ? "py-4 bg-white shadow-lg "
          : "py-4 sticky top-0 z-30 transition-all"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="container flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 item-center "
              LinkStyles="relative hover:text-primary transition-all font-bold"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { Dispatch, SetStateAction, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify } from "lucide-react";
import Logo from "./logo";
import { Social } from "./social";
import { Navigation } from "./navigation";

export const MbNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="flex flex-1 flex-col">
        <div className="flex flex-col items-center gap-y-32">
          <Logo showname />
        </div>
        {/* Cutomize the props when it in mobile */}
        <Navigation
          className="flex flex-1 flex-col justify-start"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Social className="flex gap-x-4 " iconsStyles="text-2xl" />
      </SheetContent>
    </Sheet>
  );
};

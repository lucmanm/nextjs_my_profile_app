import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify } from "lucide-react";
import Logo from "./logo";
import Nav from "./nav";
import Social from "./social";

type Props = {};
// Need more costumization
const MobileNav = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              className="flex flex-col items-center gap-y-6"
              LinkStyles="text-2xl"
            />
          </div>
            <Social containerStyle="flex gap-x-4" iconsStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

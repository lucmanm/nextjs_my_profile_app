import Link from "next/link";
import React from "react";
import {
  RiBriefcase4Fill,
  RiProjectorFill,
  RiTeamFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import Social from "./social";
import DivImg from "./div-img";
import Badge from "./badge";
import CustomizedButton from "./ui/customized-button";

const Hero = () => {
  return (
    <section className="py-8">
      <div className="container max-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left dark:text-slate-100">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] dark:text-slate-100 pl-2">
              Graphic Design | Web Developer
            </div>
            <h1 className="h1 mb-4">Helo, My Name is Mahid, Lucman</h1>
            <p className="subtitle max-w-[490] mx-auto xl:mx-0">
              I am currently working as a IT Support in Computech Company in
              Saudi Arabia
            </p>
            {/* buttons */}
            <div className="flex  gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="https://wa.me/00966552449592">

                <CustomizedButton
                className="bg-green-500"
                  name="Contact Me"
                  icon={<RiWhatsappFill size={18} />}
                />
              </Link>
              <Link href="https://drive.google.com/file/d/17TueKt65XnUK3xh8i69redf74CneXp5J/view?usp=sharing">
                <CustomizedButton
                  name="Download CV"
                  icon={<Download size={18} />}
                />
              </Link>
            </div>
            <Social
              containerStyle="flex gap-x-6 mx-auto xl:mx-0 my-8"
              iconsStyles={
                "text-foreground text-[22px] hover:text-primary transition-all hover:text-blue-950 dark:text-slate-100 dark:hover:text-green-500"
              }
            />
          </div>
          {/* Image */}
          <div className="xl:flex relative">
            {/* Badge Experince */}
            <Badge
              containerStyles="absolute top-[24%] -left-[1rem] dark:text-slate-100 dark:bg-accent"
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              badgeText="Years of Experience"
            />
            {/* Badge  Projects*/}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]  dark:text-slate-100 dark:bg-accent"
              icon={<RiProjectorFill />}
              endCountNum={5}
              badgeText="Finished Projects"
            />
            {/* Badge  */}
            <Badge
              containerStyles="absolute top-[55%] -right-5 dark:text-slate-100 dark:bg-accent "
              icon={<RiTeamFill />}
              endCountNum={100}
              badgeText="Happy Clients"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] bg-no-repeat absolute -top-1 -right-2 h-[500px]" />
            <DivImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom "
              imgSrc="/hero/MySelftwo.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

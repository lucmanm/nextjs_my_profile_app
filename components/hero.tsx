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
import { personalData } from "@/lib/const-data";

const Hero = () => {
  const { socialMedia } = personalData[0];

  return (
    <section className="py-8">
      <div className="max-auto container">
        <div className="flex flex-col justify-between gap-x-8 lg:flex-row">
          <div className="mx-auto flex max-w-[600px] flex-col justify-center text-center dark:text-slate-100 xl:mx-0 xl:text-left">
            <div className="mb-4 pl-2 text-sm font-semibold uppercase tracking-[4px] text-primary dark:text-slate-100">
              Graphic Design | Web Developer
            </div>
            <h1 className="h1 mb-4">Helo, My Name is Mahid, Lucman</h1>
            <p className="subtitle mx-auto max-w-[490] xl:mx-0">
              Freelance, Software Engineer, Web & Mobile Developer, Graphic
              Designer, Technical Support
            </p>
            {/* buttons */}
            <div className="mx-auto  mb-12 flex gap-x-3 gap-y-3 md:flex-row xl:mx-0">
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
          <div className="relative xl:flex">
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
            <div className="absolute -right-2 -top-1 h-[500px] w-[500px] bg-hero_shape2_light bg-no-repeat dark:bg-hero_shape2_dark" />
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

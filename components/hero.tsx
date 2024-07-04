import Link from "next/link";
import React from "react";
import {
  RiBriefcase4Fill,
  RiProjectorFill,
  RiTeamFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { Download } from "lucide-react";
import Social from "./social";
import DivImg from "./div-img";
import Badge from "./badge";
import CustomizedButton from "./ui/customized-button";
const Hero = () => {
  return (
    <section className="py-8">
      <div className="max-auto md:container">
        <div className="flex flex-col justify-between gap-x-8 lg:flex-row">
          <div className="mx-auto flex max-w-[600px] flex-col justify-center text-center xl:mx-0 xl:text-left dark:text-slate-100">
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
          <div className="relative overflow-hidden md:overflow-visible xl:flex">
            {/* Badge Experince */}
            <Badge
              className="absolute left-3  top-[14%] md:top-[14%] md:left-[6rem] dark:text-slate-100 dark:bg-accent"
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              badgeText="Years of Experience"
            />
            {/* Badge  Projects*/}
            <Badge
              className="absolute left-14 top-[70%] md:top-[80%]  md:-left-[1rem]  dark:text-slate-100 dark:bg-accent"
              icon={<RiProjectorFill />}
              endCountNum={7}
              badgeText="Finished Projects"
            />
            {/* Badge  */}
            <Badge
              className="absolute  right-4 top-[45%] md:top-[55%] md:-right-5 dark:text-slate-100 dark:bg-accent "
              icon={<RiTeamFill />}
              endCountNum={100}
              badgeText="Happy Clients"
            />
            <div className="absolute -right-2 -top-1  h-[450px] w-[450px]  bg-hero_shape2_light bg-contain bg-no-repeat md:h-[500px] md:w-[500px] dark:bg-hero_shape2_dark" />
            <DivImg
              className="relative h-[438px] w-[475px] bg-hero_shape bg-contain bg-bottom bg-no-repeat md:h-[463px] md:w-[510px] "
              imgSrc="https://res.cloudinary.com/dzdcszrob/image/upload/v1719955881/playground-images/logo/gegixzr9l7gdotitpjfu.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

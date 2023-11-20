import Link from "next/link";
import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-cover dark:bg-none">
      <div className="container max-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Helo, My Name is Mahid, Lucman</h1>
            <p className="subtitle max-w-[490] mx-auto xl:mx-0">
              I am currently working as a IT Support in Computech Comapny here
              in Saudi Arab ia
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Link href="">
                <Button className="gap-x-2" variant="secondary">
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden xl:flex relative">Image</div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 ">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

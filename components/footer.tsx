import React from "react";
import Social from "./social";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-white dark:bg-slate-900 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Social/>
          <div className="text-muted-foreground">
            Copyright &copy; Mahid Lucman. All Right Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

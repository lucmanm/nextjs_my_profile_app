"use client";
import React, { FC, ReactNode } from "react";
import CountUp from "react-countup";

type BadgeProps = {
  containerStyles: string;
  icon: ReactNode;
  endCountNum: number;
  endCountText?: string;
  badgeText: string;
};

const Badge: FC<BadgeProps> = ({
  badgeText,
  containerStyles,
  endCountNum,
  endCountText,
  icon,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary ">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary ">
          <CountUp
            end={endCountNum}
            delay={1}
            duration={4}
            className="dark:text-slate-100 dark:bg-accent"
          />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;

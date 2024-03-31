import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
type TCustomizedButton = {
  icon?: React.ReactElement;
  name: string;
  className?: string;
  size?: "sm" | "lg";
};
const CustomizedButton: React.FC<TCustomizedButton> = ({
  name,
  icon,
  className,
  size,
}) => {
  return (
    <Button
      className={cn(
        "gap-x-2 bg-slate-300 hover:bg-green-500 hover:text-white dark:bg-slate-100 dark:text-accent dark:hover:bg-green-500 dark:hover:text-slate-100 rounded-full",
        className
      )}
      variant="ghost"
      size={size}
    >
      {name} {icon}
    </Button>
  );
};

export default CustomizedButton;

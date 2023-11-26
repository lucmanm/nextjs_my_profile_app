"use client";

import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input
          type="name"
          id="name"
          placeholder="Name"
          className="rounded-full px-8 h-[54px] text-base"
        />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input
          type="email"
          id="name"
          placeholder="Email"
          className="rounded-full px-8 h-[54px] text-base"
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea
          id="name"
          placeholder="Type your Message Here"
          className=" px-8 h-[100px] text-base"
        />
        <MessageSquare className="absolute top-4 right-6 " size={20} />
      </div>
      <Button className="flex items-center gap-x-4 max-w-[166px]">Send <ArrowRightIcon size={20}/></Button>
    </form>
  );
};

export default Form;

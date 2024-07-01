"use client";

import { MailIcon, MessageSquare, Send, User } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/lib/validation";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors,isLoading },
  } = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      subject: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof contactFormSchema>> = async (
    data,
  ) => {
    try {
      await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      toast({
        variant: "success",
        title: "Thank you",
        description: "I will contact you once i reach your message.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "ERROR",
        description: `Resole the Error: ${error}`,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input
          {...register("name")}
          type="name"
          id="name"
          placeholder="Name"
          className="h-[54px] rounded-full px-8 text-base"
        />
        <User className="absolute right-6" size={20} />
      </div>
      {errors?.name && (
        <p className="rounded-full border border-red-500 px-4 text-red-600">
          {errors?.name?.message}
        </p>
      )}
      <div className="relative flex items-center">
        <Input
          {...register("email")}
          type="email"
          id="name"
          placeholder="Email"
          className="h-[54px] rounded-full px-8 text-base"
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {errors?.email && (
        <p className="rounded-full border border-red-500 px-4 text-red-600">
          {errors?.email?.message}
        </p>
      )}
      <div className="relative flex items-center">
        <Input
          {...register("subject")}
          type="subject"
          id="subject"
          placeholder="subject"
          className="h-[54px] rounded-full px-8 text-base"
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {errors?.subject && (
        <p className="rounded-full border border-red-500 px-4 text-red-600">
          {errors?.subject?.message}
        </p>
      )}
      <div className="relative flex items-center">
        <Textarea
          {...register("message")}
          id="name"
          placeholder="Type your Message Here"
          className=" h-[100px] resize-none px-8 text-base"
        />
        <MessageSquare className="absolute right-6 top-4" size={20} />
      </div>
      {errors?.message && (
        <p className="rounded-full border border-red-500 px-4 text-red-600">
          {errors?.message?.message}
        </p>
      )}
      <Button
      type="submit"
      disabled= {isLoading}
      className="flex max-w-[166px] items-center gap-x-4">
        Send <Send size={20} />
      </Button>
    </form>
  );
};

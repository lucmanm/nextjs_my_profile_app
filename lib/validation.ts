import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(5, "minimum of 5 letters").max(50),
  email: z.string().email("Email is not valid").min(6).max(50),
  subject: z.string().min(1, "Please enter what is inquiry about").max(50),
  message: z
    .string()
    .min(1, "Please enter you message, blank message is not allowed.")
    .max(1000, "You reach maximum letters you can enter."),
});
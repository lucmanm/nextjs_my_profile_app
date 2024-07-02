"use server"
import EmailTemplate from '@/components/email-template';
import { contactFormSchema } from '@/lib/validation';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: z.infer<typeof contactFormSchema>) {
    try {
        const { name, email, message, subject } = contactFormSchema.parse(formData)

        const { error } = await resend.emails.send({
            from: `${name} <onboarding@resend.dev>`,
            to: [email],
            cc: ["lucmanm@icloud.com"],
            subject,
            react: EmailTemplate({ name, email, subject, message }),
        });

        if (error) {
            console.log(error);
        }

    } catch (error) {
            console.log(error);
    }
}

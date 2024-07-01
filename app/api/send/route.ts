import EmailTemplate from '@/components/email-template';
import { contactFormSchema } from '@/lib/validation';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message, subject } = contactFormSchema.parse(body)

    const { data, error } = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: [email],
      cc: ["lucmanm@icloud.com"],
      subject,
      react: EmailTemplate({ name, email, subject, message }),
    });
    console.log("Success");


    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

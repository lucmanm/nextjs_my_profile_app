import { contactFormSchema } from "@/lib/validation";
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { z } from "zod";

const name = contactFormSchema.pick({
  name: true,
});

type nameSchema = z.infer<typeof name>;

export const EmailTemplate = ({
  email,
  message,
  subject,
  name,
}: z.infer<typeof contactFormSchema>) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://res.cloudinary.com/dzdcszrob/image/upload/v1719872152/playground-images/logo/lb4vpkxpqsbbwi4prjtq.png"
          width="100"
          height="100"
          alt="Mahid Lucman Logo"
          style={logo}
        />
        <Text style={paragraph}>Hi {name},</Text>
        <Text style={paragraph}>
          Thank you for contacting me will reach you out..
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://lucman.vercel.app/projects">
            Visit
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          Lucman, Mahid C.
          <br />
          Mobile KSA: +966 55 244 9592
          <br />
          Mobile Ph: +966 915 347 1085
          <br />
          Email: lucmanm@icloud.com
          <br />
          Freelance, Software Engineer, Web & Mobile Developer, Graphic
          Designer, Technical Support
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Current Address: Jeddah 23216, Saudi Arabia</Text>
      </Container>
    </Body>
  </Html>
);

EmailTemplate.PreviewProps = {
  name: "dynamic name",
} as nameSchema;

export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#020617",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
  width: "50%",
  margin: "0 auto",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};

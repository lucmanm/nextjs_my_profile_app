import { Button, Html } from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export default function EmailTemplate({
  firstName,
}: Readonly<EmailTemplateProps>): JSX.Element {


  return (
    <Html>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me, {firstName}
      </Button>
    </Html>
  );
}

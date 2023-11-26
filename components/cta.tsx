import Link from "next/link";
import { Button } from "./ui/button";

const ContactUs = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Prepare you ideas into reality. I am Here
          </h2>
          <Link href={"/contact"}>
            <Button size="lg" className="rounded-full">Contact Me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

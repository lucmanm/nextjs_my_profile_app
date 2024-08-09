import Link from "next/link";
import { Button } from "@/components/ui/button";
import CustomizedButton from "@/components/ui/customized-button";
import { RiWhatsappFill } from "react-icons/ri";

const ContactUs = () => {
  return (
    <section className="mb-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8 dark:text-slate-100">
            Prepare you ideas into reality. <br />I am Here
          </h2>
          <Link href={"/contact"}>
            <CustomizedButton
              name="Contact Me"
              icon={<RiWhatsappFill size={18} />}
              size="lg"
              className="text-lg bg-green-500"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

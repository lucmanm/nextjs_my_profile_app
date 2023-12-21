import Form from "@/components/form";
import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";
import { RiWhatsappLine } from "react-icons/ri";

const ContactPage = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              <div>Say Hello</div>
            </div>
            <h1 className="h1 max-w-md mb-8">Hire Me</h1>
            <p className="subtitle max-w-[400px]">
              Hello, I am Mahid Lucman if you are interested to me.
              You can contact by email and whatsapp.
            </p>
          </div>
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat" />
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>lucmanm@icloud.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Philippines</div>
            </div>
            <div className="flex items-center gap-x-8">
              <RiWhatsappLine size={18} className="text-primary text-green-700" />
              <div>+966 55 244 9592</div>
            </div>
          </div>
          <Form/>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

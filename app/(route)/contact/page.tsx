import { ContactForm } from "@/components/contact-form";
import { HomeIcon, MailIcon } from "lucide-react";
import React from "react";
import { RiWhatsappLine } from "react-icons/ri";

const ContactPage = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto dark:text-slate-100 ">
        <div className="mb-6 grid pt-12 xl:mb-24 xl:h-[480px] xl:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-x-4 text-lg text-primary">
              <span className="h-[2px] w-[30px] bg-primary"></span>
              <div>Say Hello</div>
            </div>
            <h1 className="h1 mb-8 max-w-md">Hire Me</h1>
            <p className="subtitle max-w-[400px]">
              Hello, I am Mahid Lucman if you are interested to me. You can
              contact by email and whatsapp.
            </p>
          </div>
          <div className="dark:bg-contact_illustrpation_dark hidden w-full bg-contact_illustration_light bg-contain bg-top bg-no-repeat xl:flex" />
        </div>
        <div className="mb-24 grid xl:mb-32 xl:grid-cols-2">
          <div className="mb-12 flex flex-col gap-y-4 text-base xl:mb-24 xl:gap-y-14 xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>lucmanm@icloud.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Philippines</div>
            </div>
            <div className="flex items-center gap-x-8">
              <RiWhatsappLine
                size={18}
                className="text-green-700 text-primary"
              />
              <div>+966 55 244 9592</div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactPage;

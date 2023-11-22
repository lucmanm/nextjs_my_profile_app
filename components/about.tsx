import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Calendar, GraduationCap, HomeIcon, MailIcon, PhoneCall, User2 } from "lucide-react";

const infoData = [
    { 
        icon: <User2 size={20} />, 
        text: "Mahid Lucman" 
    },
    { 
        icon: <PhoneCall size={20} />, 
        text: "+966 55 244 9592" 
    },
    { 
        icon: <MailIcon size={20} />, 
        text: "Mahid Lucman" 
    },
    { 
        icon: <Calendar size={20} />, 
        text: "Born April 1992" 
    },
    { 
        icon: <GraduationCap size={20} />, 
        text: "IT College Graduate" 
    },
    { 
        icon: <HomeIcon size={20} />, 
        text: "Philippines" 
    },
];

type Props = {};

const AboutSection = (props: Props) => {
  return <div>AboutSection</div>;
};

export default AboutSection;

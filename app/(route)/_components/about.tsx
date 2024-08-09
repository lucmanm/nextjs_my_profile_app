import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Briefcase,
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
} from "lucide-react";
import Image from "next/image";
import { title } from "process";
import DivImg from "@/components/div-img";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Mahid Lucman",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+966 55 244 9592",
  },
  {
    icon: <MailIcon size={20} />,
    text: "lucmanm@icloud.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born April 1992",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "IT College Graduate",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Philippines",
  },
];

// Alternative option types

// type QualificaitonsProps = {
//   title: string;
//   data: Array<{
//     university?: string;
//     qualification?: string;
//     years?: string;
//     company?: string;
//     role?: string;
//   }>;
// };

type QualificaitonsType = {
  title: string | undefined;
  data: {
    company?: string | undefined;
    role?: string | undefined;
    university?: string | undefined;
    qualification?: string | undefined;
    years?: string | undefined;
  }[];
};

const qualificationData: QualificaitonsType[] = [
  {
    title: "education",
    data: [
      {
        university: "Cagayan de Oro College",
        qualification: "Bachelor Degree",
        years: "2009-2014",
      },
      {
        university: "Carmen National High School",
        qualification: "High School",
        years: "2006-2009",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Computech Company",
        role: "IT Executive Support",
        years: "2015 - Current",
      },
      {
        company: "IT Support",
        role: "Asia Pacific, Technical Skills Development Center Inc.",
        years: "2013-2014",
      },
    ],
  },
];
type StaticImport = /*unresolved*/ any;

type SkillsDataType = {
  title: string;
  data: {
    name?: string | undefined;
    imagePath?: string | StaticImport;
  }[];
};

const skillsData: SkillsDataType[] = [
  {
    title: "Advanced Skills",
    data: [
      {
        name: "NextJs",
      },
      {
        name: "React Query / TansTack",
      },
      {
        name: "Zod",
      },
      {
        name: "TypeScript",
      },
      {
        name: "Prisma",
      },
    ],
  },
  {
    title: "Tools",
    data: [
      {
        imagePath: "/about/vscode.svg",
      },
      {
        imagePath: "/about/figma.svg",
      },
      {
        imagePath: "/about/notion.svg",
      },
      {
        imagePath: "/about/wordpress.svg",
      },
    ],
  },
];

const AboutSection = () => {
  const getData = (arr: QualificaitonsType[], title: string) => {
    return arr.find((arr) => arr.title === title);
  };

  return (
    <section className="mt-60 pb-12 xl:mt-0 xl:h-[860px] xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title flip-ho mx-auto mb-8 text-center xl:mb-16">
          About Me{" "}
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Iamge */}
          {/*TODO: Chnage font Cover Image here */}
          <div className="relative hidden flex-1 xl:flex">
            <DivImg
              className="relative h-[505px] w-[505px] bg-about_shape_light bg-no-repeat dark:bg-about_shape_dark "
              imgSrc="/about/MySelftwo.png"
            />
          </div>

          {/* Tabs */}
          {/* TODO: Bug on My Journy data */}
          <div className="flex-1">
            <Tabs defaultValue="skills">
              <TabsList className=" h-[48px] w-full  rounded-[30px] p-1 xl:max-w-[520px] xl:grid-cols-3 xl:border xl:bg-white dark:border-none dark:md:bg-secondary">
                <TabsTrigger
                  className="h-[48px] w-full rounded-full text-base"
                  value="personal"
                >
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="h-[48px] w-full rounded-full text-base"
                  value="qualificaitons"
                >
                  Qualificaitons
                </TabsTrigger>
                <TabsTrigger
                  className="h-[48px] w-full rounded-full text-base"
                  value="skills"
                >
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="mt-12 text-lg xl:mt-8">
                <TabsContent value="personal">
                  <div className="left mb-12 grid gap-4 xl:grid-cols-2">
                    {infoData.map(({ icon, text }) => (
                      <div
                        key={text}
                        className="mx-auto flex items-center gap-x-4 xl:mx-0 "
                      >
                        <div className="text-primary">{icon}</div>
                        <div>{text}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <div className="text-primary">Language Skills</div>
                    <div className="border-b border-border" />
                    <div>English, Filipino, Arabic</div>
                  </div>
                </TabsContent>
                <TabsContent value="qualificaitons">
                  <div>
                    <h3 className="h3">My Journy</h3>
                  </div>
                  <div className="grid gap-y-8 md:grid-cols-2">
                    {/* Experience */}
                    <div className="flex flex-col gap-y-6">
                      <div className="text-[22px]text-primary flex items-center gap-x-4">
                        <Briefcase />
                        <h4 className="py-2 font-medium capitalize">
                          {getData(qualificationData, "experience")?.title}
                        </h4>
                      </div>
                      <div>
                        {getData(qualificationData, "experience")?.data.map(
                          (data, index) => {
                            return (
                              <div key={index} className="group flex gap-x-8 ">
                                <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                                  <div className="translate-all absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary duration-500 group-hover:translate-y-[84px]" />
                                </div>
                                <div>
                                  <div className="mb-2 text-xl font-semibold leading-none">
                                    {data.company}
                                  </div>
                                  <div className="mb-4 text-lg leading-none text-muted-foreground">
                                    {data.role}
                                  </div>
                                  <div className="text-base font-medium">
                                    {data.years}
                                  </div>
                                </div>
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-6">
                      <div className="text-[22px]text-primary flex items-center gap-x-4">
                        <Briefcase />
                        <h4 className="py-2 font-medium capitalize">
                          {getData(qualificationData, "education")?.title}
                        </h4>
                      </div>
                      <div>
                        {getData(qualificationData, "education")?.data.map(
                          (data, index) => {
                            return (
                              <div key={index} className="group flex gap-x-8 ">
                                <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                                  <div className="translate-all absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary duration-500 group-hover:translate-y-[84px]" />
                                </div>
                                <div>
                                  <div className="mb-2 text-xl font-semibold leading-none">
                                    {data.university}
                                  </div>
                                  <div className="mb-4 text-lg leading-none text-muted-foreground">
                                    {data.qualification}
                                  </div>
                                  <div className="text-base font-medium">
                                    {data.years}
                                  </div>
                                </div>
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools that i Know</h3>
                    <div>
                      <h4 className="mb-2 text-xl font-semibold">Skills</h4>
                      <div className="mb-4 border-b  border-border"></div>

                      {/* Skills  */}
                      <div>
                        {skillsData[0].data.map((skill, index) => {
                          return (
                            <div
                              key={index}
                              className="mx-auto w-2/4 text-center xl:mx-0 xl:text-left"
                            >
                              <div className="font-medium">{skill.name}</div>
                            </div>
                          );
                        })}
                      </div>
                      {/* Tools */}
                      <div className="flex justify-center gap-x-8 xl:justify-start">
                        {skillsData[1].data.map((data, index) => {
                          return (
                            <div key={index}>
                              <Image
                                src={data.imagePath}
                                width={48}
                                height={48}
                                alt="Logo"
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Briefcase,
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
} from "lucide-react";
import DivImg from "./div-img";
import Image from "next/image";

type InfoProps = {
  icon: React.ReactElement;
  text: string;
};

const infoData: InfoProps[] = [
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

type EducationProps = {
  university: string;
  qualification: string;
  years: string;
};
type ExperienceProps = {
  company: string;
  qualification: string;
  years: string;
};

type QualificationDataProps = {
  title: string;
  data: EducationProps[] | ExperienceProps[];
};

const qualificationData = [
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
        qualification: "IT Executive",
        years: "2015 - Current",
      },
      {
        company: "Carmen National High School",
        qualification: "High School",
        years: "2006-2009",
      },
    ],
  },
];
type SkillsProps = {
  title: string;
  data:
    | {
        name: string;
      }[]
    | {
        imagePath: string;
      }[];
};

const skillsData: SkillsProps[] = [
  {
    title: "Skills",
    data: [
      {
        name: "HTML",
      },
      {
        name: "Frontend Development",
      },
      {
        name: "Javscript",
      },
      {
        name: "PHP",
      },
      {
        name: "Backedn Development",
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
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto flip-ho">
          About Me{" "}
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Iamge */}
          {/*TODO: Chnage font Cover Image here */}
          <div className="hidden xl:flex flex-1 relative">
            <DivImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative relative "
              imgSrc="/about/MySelftwo.png"
            />
          </div>

          {/* Tabs */}
          {/* TODO: Bug on My Journy data */}
          <div className="flex-1">
            <Tabs>
              <TabsList
                defaultValue="personal"
                className=" xl:bg-white p-1  rounded-[30px] dark:md:bg-secondary w-full xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none h-[48px]"
              >
                <TabsTrigger
                  className="rounded-full text-base h-[48px] w-full"
                  value="personal"
                >
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="rounded-full text-base h-[48px] w-full"
                  value="qualificaitons"
                >
                  Qualificaitons
                </TabsTrigger>
                <TabsTrigger
                  className="rounded-full text-base h-[48px] w-full"
                  value="skills"
                >
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Amet vero tenetur ratione aperiam, officiis, .
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quas aspernatur ullam excepturi deserunt laborum,
                      similique officiis animi deleniti nostrum, ab minima iure
                      nisi qui vel accusamus hic ipsa sunt cumque.
                    </p>
                  </div>

                  <div className="grid xl:grid-cols-2 gap-4 mb-12 left">
                    {infoData.map(({ icon, text }: InfoProps) => (
                      <div
                        key={text}
                        className="flex items-center gap-x-4 mx-auto xl:mx-0 "
                      >
                        <div className="text-primary">{icon}</div>
                        <div>{text}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <div className="text-primary">Language Skills</div>
                    <div className="border-b border-border" />
                    <div>English, Filipino</div>
                  </div>
                </TabsContent>
                <TabsContent value="qualificaitons">
                  <div>
                    <h3 className="h3">My Journy</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-y-8">
                    {/* Experience */}
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px]text-primary">
                        <Briefcase />
                        <h4 className="capitalize font-medium">
                          {qualificationData[1].title}
                        </h4>
                      </div>
                      <div>
                        {qualificationData[1].data.map(
                          ({ company, qualification, years }: any) => {
                            return (
                              <div
                                key={company}
                                className="flex gap-x-8 group "
                              >
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] translate-all duration-500" />
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {company}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {qualification}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px]text-primary">
                        <Briefcase />
                        <h4 className="capitalize font-medium">
                          {qualificationData[0].title}
                        </h4>
                      </div>
                      <div>
                        {qualificationData[0].data.map(
                          ({ company, qualification, years }: any) => {
                            return (
                              <div
                                key={company}
                                className="flex gap-x-8 group "
                              >
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] translate-all duration-500" />
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {company}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {qualification}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools that i Know</h3>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border  mb-4"></div>

                      {/* Skills  */}

                      <div>
                        {skillsData[0].data.map(({ name }) => {
                          return (
                            <div
                              key={name}
                              className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                            >
                              <div className="font-medium">{name}</div>
                            </div>
                          );
                        })}
                      </div>
                      {/* Tools */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {skillsData[1].data.map(({ imagePath }) => {
                          return (
                            <div key={imagePath}>
                              <Image src={imagePath} alt="" width={48} height={48} alt="Logo" priority/>
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

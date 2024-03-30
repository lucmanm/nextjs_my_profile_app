import {
  GanttChartSquare,
  Blocks,
  Gem,
  Code,
  Code2,
  CodeIcon,
  Code2Icon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";

type DataProps = {
  icon: JSX.Element;
  title: string;
  skills:
    | {
        name: string;
        icon: string;
      }[]
    | undefined;
};

const Data: DataProps[] = [
  {
    icon: <Code2Icon size={52} strokeWidth={1.5} />,
    title: "Web Development",
    skills: [
      {
        name: "React",
        icon: "/skillsIcons/react-seeklogo-1.png",
      },
      {
        name: "TypeScript",
        icon: "/skillsIcons/typescript-logo.png",
      },
      {
        name: "React Hook Form",
        icon: "/skillsIcons/react-hook-form-logo.png",
      },
      {
        name: "Zod",
        icon: "/skillsIcons/zod-seeklogo 1.png",
      },
      {
        name: "ReactQuery",
        icon: "/skillsIcons/react-query-seeklogo-1.png",
      },
      {
        name: "Prisma ORM",
        icon: "/skillsIcons/prisma-seeklogo-1.png",
      },
      {
        name: "NextJS",
        icon: "/skillsIcons/Nextjs.png",
      },
    ],
  },
  {
    icon: <Blocks size={52} strokeWidth={1.5} />,
    title: "Graphic Design",
    skills: [
      {
        name: "Figma",
        icon: "/skillsIcons/figma.png",
      },
      {
        name: "Adobe InDesign",
        icon: "/skillsIcons/indesign.png",
      },
      {
        name: "Adobe Photoshop",
        icon: "/skillsIcons/photoshop.png",
      },
      {
        name: "Adobe Illustrator",
        icon: "/skillsIcons/illustrator.png",
      },
    ],
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Microsoft Office",
    skills: [
      {
        name: "Microsoft Office",
        icon: "/skillsIcons/word.png",
      },
      {
        name: "Microsoft Excel",
        icon: "/skillsIcons/excel.png",
      },
      {
        name: "Microsoft PowerPoint",
        icon: "/skillsIcons/powerpoint.png",
      },
      {
        name: "Microsoft Outlook",
        icon: "/skillsIcons/outlook.png",
      },
    ],
  },
];

const MySkills = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
          <RiArrowDownSLine className="text-3xl text-primary " />
        </div>
      <div className="container mx-auto">
        <h2 className="section-title ">
          My Skills
        </h2>

        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {Data.map((data, id) => {
            return (
              <Card
                key={id}
                className="w-full max-w-[424px] flex flex-col pt-16 pb-18 justify-center items-center relative dark:bg-slate-900"
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px]  flex justify-center items-center rounded-full border bg-background text-card-foreground">
                    {data.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center flex flex-col justify-items-start ">
                  <CardTitle className="mb-4 ">{data.title}</CardTitle>
                  <CardDescription className="text-lg flex flex-wrap gap-2 justify-center ">
                    {data.skills?.map((data, id) => {
                      return (
                        <Link
                          href=""
                          key={id}
                          className="rounded-lg flex border shadow-sm hover:shadow-inner"
                        >

                          <Image
                            src={data.icon}
                            alt=""
                            width={28}
                            height={28}
                            className=" rounded-l-lg p-1 overflow-hidden dark:bg-slate-100"
                            />
                          <span className="bg-slate-100 rounded-r-lg p-1 px-2 text-blue-950 text-sm lg:text-base font-semibold dark:bg-accent dark:text-slate-100">
                            {data.name}
                          </span>
                        </Link>
                      );
                    })}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MySkills;

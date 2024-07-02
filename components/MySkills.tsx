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
      {
        name: "Framer Motion",
        icon: "/skillsIcons/framer.png",
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
        <h2 className="section-title ">My Skills</h2>

        <div className="grid justify-center gap-y-12 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-24">
          {Data.map((data, id) => {
            return (
              <Card
                key={id}
                className="pb-18 relative flex w-full max-w-[424px] flex-col items-center justify-center bg-slate-100/30 pt-16 backdrop-blur-lg dark:bg-slate-900/60 dark:backdrop-blur-md"
              >
                <CardHeader className="absolute -top-[60px] text-primary ">
                  <div className="flex h-[80px] w-[140px] items-center justify-center rounded-full border bg-slate-100/30 text-card-foreground backdrop-blur-sm ">
                    {data.icon}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col">
                  <CardTitle className="mb-4 text-center">
                    {data.title}
                  </CardTitle>
                  <CardDescription className="flex flex-wrap justify-center gap-2 text-lg ">
                    {data.skills?.map((data, id) => {
                      return (
                        <Link
                          href=""
                          key={id}
                          className="flex rounded-lg border shadow-sm hover:shadow-inner "
                        >
                          <Image
                            src={data.icon}
                            alt=""
                            width={28}
                            height={28}
                            className=" overflow-hidden rounded-l-lg p-1 dark:bg-slate-100 object-contain"
                          />
                          <span className="rounded-r-lg bg-slate-100/30 backdrop-blur-sm p-1 px-2 text-sm font-semibold text-blue-950 dark:bg-accent dark:text-slate-100 lg:text-base">
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

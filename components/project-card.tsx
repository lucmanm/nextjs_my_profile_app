import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";
import { GithubIcon, Link2Icon } from "lucide-react";

type ProjectDataProps = {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
};

type ProjectProps = {
  project: ProjectDataProps;
};

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-accent xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            src={project.image}
            width={247}
            height={250}
            alt={project.name}
            priority
            className="absolute bottom-0 shadow-2xl"
          />

          <div className="flex gap-x-4">
            <Link
              href={project.link}
              className="bg-slate-900 w-[50px] h-[50px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200  dark:hover:bg-green-500"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={project.github}
              className="bg-slate-900 w-[50px] h-[50px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 dark:hover:bg-green-500"
            >
              <GithubIcon className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h2 className="h-4 mb-1 font-medium">{project.name}</h2>
        <h3 className="text-muted-foreground text-lg  leading-snug min-h-[50px] truncate line-clamp-2">
          {project.description}
        </h3>
      </div>
    </Card>
  );
};

export default ProjectCard;

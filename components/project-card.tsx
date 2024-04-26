import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";
import { GithubIcon, Link2Icon } from "lucide-react";

type ProjectDataProps = {
  image: string;
  category: string;
  name: string;
  teckStacks?: string[];
  description: string;
  link: string;
  github: string;
};

type ProjectProps = {
  project: ProjectDataProps;
};

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <Card className="group relative overflow-hidden bg-slate-100/30 backdrop-blur-2xl">
      <CardHeader className="p-0">
        <div className="bg-tertiary relative flex h-[300px] w-full items-center justify-center overflow-hidden dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:bg-no-repeat xl:dark:bg-accent">
          <Image
            src={project.image}
            width={247}
            height={250}
            alt={project.name}
            priority
            className="absolute top-10 rounded-t-lg shadow-2xl"
          />

          <div className="flex gap-x-4">
            <Link
              href={project.link}
              className="flex h-[50px] w-[50px] scale-0 items-center justify-center rounded-full bg-slate-900 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100  dark:hover:bg-green-500"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={project.github}
              className="flex h-[50px] w-[50px] scale-0 items-center justify-center rounded-full bg-slate-900 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 dark:hover:bg-green-500"
            >
              <GithubIcon className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full space-y-4 px-8 py-6">
        <Badge className="absolute left-5 top-4 mb-2 text-sm font-medium uppercase">
          {project.category}
        </Badge>

        <h2 className="mb-1 h-4 font-medium">{project.name}</h2>
        <h3 className="line-clamp-2 min-h-[50px]  truncate text-sm leading-snug font-semibold text-muted-foreground text-slate-900">
          {project.description}
        </h3>
      </div>
    </Card>
  );
};

export default ProjectCard;

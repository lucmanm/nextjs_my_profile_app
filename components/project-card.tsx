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
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
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
              className="bg-secondary w-[50px] h-[50px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-black" />
            </Link>
            <Link
              href={project.github}
              className="bg-secondary w-[50px] h-[50px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <GithubIcon className="text-black" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h-4 mb-1">{project.name}</h4>
        <h4 className="text-muted-foreground text-lg">{project.description}</h4>
      </div>
    </Card>
  );
};

export default ProjectCard;

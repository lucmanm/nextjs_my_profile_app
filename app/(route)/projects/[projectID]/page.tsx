import { personalData } from "@/lib/const-data";
import { Github, Link as DirectLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const Project = ({ params }: { params: { projectID: string } }) => {
  const { projectID } = params;
  const decodedProjectID = decodeURIComponent(projectID);
  const { projects } = personalData[0];

  const project = projects.find(
    (project) => project.description === decodedProjectID,
  );

  if (!project) {
    return notFound();
  }

  return (
    <main className="container space-y-2 py-2 md:py-8">
      <Image
        src={project.image}
        alt={project.description}
        height={500}
        width={500}
        className="h-[250px] w-full rounded-md bg-slate-100/30 object-none md:h-[500px] "
      />
      <div className="rounded-md bg-slate-100 p-4 py-2 md:p-8 md:py-8 space-y-2">
        <h1 className="h1">{project.name}</h1>
        <div className="flex gap-2 py-2" >
          {project.teckStacks.map((item, id) => (
            <span
              key={id}
              className="span rounded-full dark:bg-slate-100 bg-slate-950  "
            >
              {item}
            </span>
          ))}
        </div>
        <h2 className="h2">{project.description}</h2>
        <div className="flex items-center gap-2">
          <DirectLink className="icon" />
          <Link href={project.link} className="p">{project.link}</Link>
        </div>
        <div className="flex items-center gap-2">
          <Github className="icon" />
          <Link href={project.github} className="p">{project.github}</Link>
        </div>
      </div>
    </main>
  );
};

export default Project;

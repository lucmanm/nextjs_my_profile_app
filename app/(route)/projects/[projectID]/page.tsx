import { personalData } from "@/lib/const-data";
import { Link } from "lucide-react";
import Image from "next/image";
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
    <main className="container py-2 md:py-8 space-y-2">
      <Image
        src={project.image}
        alt={project.description}
        height={500}
        width={500}
        className="h-[250px] w-full rounded-md object-none md:h-[500px] bg-slate-100/30 "
      />
      <div className="rounded-md bg-slate-100/30 p-4 py-2 md:p-8 md:py-8">
        <h1 className="h1">{project.name}</h1>
        <h2 className="h2">{project.description}</h2>
        <div className="flex items-center gap-2">
          <Link className="h-3 w-4 md:h-4 md:w-4" />
          <h3 className="h3">{project.link}</h3>
        </div>
        <div className="flex gap-2 py-2">
          {project.teckStacks.map((item, id) => (
            <span
              key={id}
              className="rounded-full bg-slate-100 px-2 py-0.5 text-xs md:text-base"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Project;

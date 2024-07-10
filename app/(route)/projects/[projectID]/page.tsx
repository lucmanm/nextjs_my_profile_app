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
    <main className="space-y-2 py-2 lg:container md:py-8">
      <section className="flex gap-4 p-2 max-sm:flex-col">
        <Image
          src={project.image}
          alt={project.description}
          height={500}
          width={500}
          className="h-[250px] w-full rounded-md bg-slate-100/30 object-none md:h-[500px] md:w-7/12 "
        />

        <div className="space-y-2 rounded-md bg-slate-200 p-4 py-2 md:p-8 md:py-8">
          <h1 className="h1">{project.name}</h1>
          <div className="flex gap-2 py-2">
            {project.teckStacks.map((item, id) => (
              <span
                key={id}
                className="span rounded-full bg-slate-950 p-1 px-2 text-white"
              >
                {item}
              </span>
            ))}
          </div>
          {/*Summary description for the projects*/}
          <h2 className="h2">{project.description}</h2>
          {/* Redirect Links */}
          <div  className="flex flex-row items-center gap-2">
            <Link href={project.link} className="p">
            <DirectLink className="icon" />
            </Link>
            <Link href={project.github} className="p">
            <Github className="icon" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Project;

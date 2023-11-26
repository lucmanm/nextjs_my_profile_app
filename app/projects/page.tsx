"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/project-card";

const projectData = [
  {
    image: "/work/1.png",
    category: "React",
    name: "Nexa Website",
    description: "Loren Epsum dolores",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Next js",
    name: "Nexa Website",
    description: "Loren Epsum dolores",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "laravel",
    name: "Nexa Website",
    description: "Loren Epsum dolores",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Javascript",
    name: "Nexa Website",
    description: "Loren Epsum dolores",
    link: "/",
    github: "/",
  },
];
type FilteredProjectsProps = {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
};
const ProjectsPage = () => {
  const [category, setCategory] = useState("All Projects");

  const filteredProjects: FilteredProjectsProps[] = projectData.filter(
    (project) => {
      // If category is All preojcts
      return category === "All Projects"
        ? project
        : project.category === category;
    }
  );

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {projectData.map((project, index) => {
              return (
                <TabsTrigger
                onClick={() => setCategory(project.category)}
                  value={project.category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto h-10"
                >
                  {project.category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Tab list Contect */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsPage;

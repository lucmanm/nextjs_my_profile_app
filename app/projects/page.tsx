"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/project-card";

type FilteredProjectsProps = {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
};

export const projectData = [
  {
    image: "/work/1.png",
    category: "Next js",
    name: "Computech",
    description: "Electronics store",
    link: "https://www.compu-tech.com.sa",
    github: "https://github.com/lucmanm/nextjs_ecommerce_computech_app",
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

const categoryMenu: string[] = [
  "all projects ",
  ...Array.from(new Set<string>(projectData.map((item) => item.category))),
];

const ProjectsPage = () => {
  const [categoryData] = useState<string[]>(categoryMenu);
  const [category, setcategory] = useState<string>("all projects");

  const filteredProjects: FilteredProjectsProps[] = projectData.filter(
    (project) => {
      // If category is All preojcts
      return category === "all projects"
        ? project
        : // Display selected category
          project.category === category;
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
            {categoryData.map((data, index) => {
              return (
                <TabsTrigger
                  key={index}
                  onClick={() => setcategory(data)}
                  value={data}
                  className="capitalize w-[162px] md:w-auto h-10"
                >
                  {data}
                </TabsTrigger>
              );
            })}
          </TabsList>
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

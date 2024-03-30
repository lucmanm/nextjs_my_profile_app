"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/project-card";

type FilteredProjectsProps =
  | {
      image: string;
      category: string;
      name: string;
      teckStacks: string[];
      description: string;
      link: string;
      github: string;
    }
  | {
      image: string;
      category: string;
      name: string;
      description: string;
      link: string;
      github: string;
      teckStacks?: undefined;
    };

export const projectData = [
  {
    image: "/work/computech-front.png",
    category: "Next js",
    name: "Computech",
    teckStacks: ["React", "Prisma", "ReactQuery"],
    description: "Electronics store from Jeddah, Saudi Arabia",
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
    teckStacks: ["React", "Prisma", "ReactQuery"],
    description: "Loren Epsum dolores",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Javascript",
    name: "Nexa Website",
    teckStacks: ["React", "Prisma", "ReactQuery"],
    description: "Loren Epsum dolores",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Expo ",
    name: "Movie App",
    teckStacks: ["React", "Prisma", "ReactQuery"],
    description: "Movie Application with Create, Read, Update, Delete",
    link: "/",
    github: "/",
  },
];

const selectedCategory: string[] = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const ProjectsPage = () => {
  const [categoryData] = useState<string[]>(selectedCategory);
  const [category, setcategory] = useState<string>("all projects");

  const filteredProjects: FilteredProjectsProps[] = projectData.filter(
    (project) => {
      // If category is All preojcts
      return category === "all projects"
        ? project
        : project.category === category;
    }
  );
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title">Website & Mobile App </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48 lg:max-w-full">
          <TabsList className="w-full grid-cols-1 grid h-full md:grid-cols-5 lg:max-w-full mb-12 mx-auto md:border">
            {categoryData.map((data, index) => {
              return (
                <TabsTrigger
                  key={index}
                  onClick={() => setcategory(data)}
                  value={data}
                  className="capitalize h-10 data-[state=active]:bg-green-500"
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

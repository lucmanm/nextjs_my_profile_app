"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { personalData } from "@/lib/const-data";
import { ProjectCard } from "../_components/project-card";

const ProjectsPage = () => {
  const { projects } = personalData[0];

  const selectedCategory: string[] = [
    "all projects",
    ...new Set(projects.map((item) => item.category)),
  ];

  const [categoryData] = useState<string[]>(selectedCategory);
  const [category, setcategory] = useState<string>("all projects");

  const filteredProjects = projects.filter((project) => {
    // If category is All preojcts
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title">Website & Mobile App </h2>
        <Tabs defaultValue={category} className="mb-24 lg:max-w-full xl:mb-48">
          <TabsList className="flex h-full w-full max-w-full md:border">
            {categoryData.map((data, index) => {
              return (
                <TabsTrigger
                  key={index}
                  onClick={() => setcategory(data)}
                  value={data}
                  className="h-10 grow text-xs capitalize data-[state=active]:bg-green-500 md:text-sm"
                >
                  {data}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="grid grid-cols-1 gap-4 text-lg lg:grid-cols-3 xl:mt-8">
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

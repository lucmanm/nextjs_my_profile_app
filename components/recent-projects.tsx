"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "./project-card";
import { projectData } from "@/app/(route)/projects/page";


const RecentProjects = () => {
  return (
    <section className="relative">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <h2 className="section-title mb-4">Current and Latest Projects</h2>
          </div>
          <Link href="/projects">
            <Button
              size="lg"
              className="rounded-full bg-primary dark:bg-primary dark:text-accent"
            >
              All Projects
            </Button>
          </Link>
        </div>

        <div>
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 3 } }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* Slider Recent Projects */}
            {projectData.slice(0.4).map((project) => {
              return (
                <SwiperSlide key={project.name}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;

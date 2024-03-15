"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "./project-card";
import { projectData } from "@/app/projects/page";

type Props = {};



const Work = (props: Props) => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>

          <h2 className="section-title mb-4">Current and Latest Projects</h2>
          </div>
          <Link href="/projects">
            <Button size="sm" className="rounded-full text-xs lg:text-base">All Projects</Button>
          </Link>
        </div>

        <div className="">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 } }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only 4 projects */}
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

export default Work;

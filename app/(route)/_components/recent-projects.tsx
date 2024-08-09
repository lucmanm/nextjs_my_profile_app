"use client"
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import CustomizedButton from "../../../components/ui/customized-button";
import { ArrowRight } from "lucide-react";
import { personalData } from "@/lib/const-data";
import { ProjectCard } from "./project-card";

const RecentProjects = () => {
  const { projects } = personalData[0];
  return (
    <section className="relative">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <h2 className="section-title mb-4">Current and Latest Projects</h2>
          </div>
          <Link href="/projects">
            <CustomizedButton
              name="All Projects"
              icon={<ArrowRight size={18} />}
            />
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
            {projects.slice(0.4).map((project) => {
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

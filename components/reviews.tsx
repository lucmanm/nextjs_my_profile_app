"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Romy Sir",
    job: "Chef",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam aperiam facilis inventore! Deserunt tenetur nisi ut placeat nesciunt animi, enim, magnam labore blanditiis harum aspernatur aliquam voluptate officia, unde minima!",
  },
  {
    avatar: "/reviews/avatar-1.png",
    name: "Romy Sir",
    job: "Chef",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam aperiam facilis inventore! Deserunt tenetur nisi ut placeat nesciunt animi, enim, magnam labore blanditiis harum aspernatur aliquam voluptate officia, unde minima!",
  },
  {
    avatar: "/reviews/avatar-1.png",
    name: "Romy Sir",
    job: "Chef",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam aperiam facilis inventore! Deserunt tenetur nisi ut placeat nesciunt animi, enim, magnam labore blanditiis harum aspernatur aliquam voluptate officia, unde minima!",
  },
  {
    avatar: "/reviews/avatar-1.png",
    name: "Romy Sir",
    job: "Chef",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam aperiam facilis inventore! Deserunt tenetur nisi ut placeat nesciunt animi, enim, magnam labore blanditiis harum aspernatur aliquam voluptate officia, unde minima!",
  },
  {
    avatar: "/reviews/avatar-1.png",
    name: "Romy Sir",
    job: "Chef",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam aperiam facilis inventore! Deserunt tenetur nisi ut placeat nesciunt animi, enim, magnam labore blanditiis harum aspernatur aliquam voluptate officia, unde minima!",
  }
];
type Props = {};

const Reviews = (props: Props) => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((review, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={review.avatar}
                        width={70}
                        height={70}
                        alt={review.name}
                        priority
                      />
                      <div className="flex flex-col">
                        <CardTitle>{review.name}</CardTitle>
                        <p>{review.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {review.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;

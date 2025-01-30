"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";

const heroBanner = [
  {
    head: "Creative Solutions",
    title: "Empowering Your Business Vision",
    description:
      "We provide the expertise and innovative solutions to help you realize your business aspirations.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    head: "Innovative Agency",
    title: "Unlock Your Business Potential",
    description:
      "Our team is dedicated to turning your dreams into reality through cutting-edge solutions and expert guidance.",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    head: "Expert Team",
    title: "Achieve Your Business Goals",
    description:
      "Partner with us to leverage innovative strategies and expert knowledge to reach your business objectives.",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    head: "Future-Driven",
    title: "Transform Your Business",
    description:
      "We offer the innovative solutions and expertise needed to help you achieve your business dreams and goals.",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const SectionSlide = () => {
  return (
    <div className="h-[60vh] sm:h-[80vh]">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        className="h-full text-white"
      >
        {heroBanner.map((item, index) => (
          <SwiperSlide
            className="bg-black rounded-full relative text-white"
            key={index}
          >
            <div className="w-full h-full">
              <Image
                src={item.image || ""}
                alt={item.title}
                className="object-cover h-full w-full rounded-xl"
                width={1920}
                height={1080}
              />
            </div>
            <div className="absolute top-0 left-10 w-[80%] m-auto flex justify-start items-center h-full">
              <div className="w-full sm:w-[60%] md:w-[70%] lg:w-[60%] flex flex-col gap-4">
                <span className="px-4 py-2 bg-slate-100 bg-opacity-30 w-fit rounded-md text-sm md:text-base">
                  {item.head}
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl">
                  {item.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SectionSlide;

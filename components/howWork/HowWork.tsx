"use client";
import { sost } from "@/assets";
import Image from "next/image";
import React from "react";
import { useAppSelector } from "@/toolkit/hooks";

const HowWork = () => {
  const { data } = useAppSelector((state) => state.home);
  const howToWorks = data?.howToWorks ?? [];
  return (
    <section className="py-10 md:py-16 relative">
      {/* shape */}
      <div className=" absolute end-0 top-1/2 -translate-y-1/2">
        <div className="relative w-[474px] h-[726px]">
          <Image src={sost} alt="shape" fill loading="lazy" sizes="474px" />
        </div>
      </div>
      <div className="container">
        <span className="text-center block md:text-lg text-[#FF8F3F]">
          {"كيف نعمل"}
        </span>
        <h2 className="text-white text-center mt-2 md:mt-5 text-xl md:text-4xl">
          {"نعمل بإتقان من أجل اثمار مشروعك"}
        </h2>
        {/* Images */}
        <div className="mt-10 md:mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {howToWorks.map((item) => (
            <div className="relative h-[498px] group cursor-pointer" key={item.howToWorkId}>
              <div className="absolute top-7 start-4 text-xl text-white z-20 transition-all duration-300 group-hover:translate-x-2">
                {item.title}
              </div>
              <Image
                src={item.image}
                alt={item.title}
                fill
                loading="lazy"
                sizes="100%"
                className="object-cover rounded-[10px] transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
              />
              <div className="absolute inset-0 rounded-[10px] bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWork;

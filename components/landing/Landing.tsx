"use client";
import { mothmr, rocket_1, rocket_2 } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { whats } from "@/components/social/links";
import Title from "./Title";

const Landing = () => {
  return (
    <section className="relative min-h-[50vh] md:min-h-screen flex justify-center items-center">
      <div className="absolute top-0 start-0 h-screen w-full">
        <div className="relative h-[50vh] md:h-screen">
          <Image
            src={mothmr}
            alt="landing-image"
            fill
            loading="lazy"
            sizes="100vh"
            className=" "
          />
        </div>
      </div>
      <div className="container relative z-20">
        {/* rocket 1 */}
        <motion.div
          className="absolute top-1/4 -translate-y-1/2 start-16 hidden md:block"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-[79px] h-[79px] relative">
            <Image
              src={rocket_1}
              fill
              alt="rocket"
              loading="lazy"
              sizes="79px"
              className="object-cover"
            />
          </div>
        </motion.div>
        {/* rocket 2 */}
        <motion.div
          className="absolute bottom-0 translate-y-0.5 end-16 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-[50px] h-[50px] relative">
            <Image
              src={rocket_2}
              fill
              alt="rocket"
              loading="lazy"
              sizes="50px"
              className=" object-contain"
            />
          </div>
        </motion.div>
        <Title />
        <p className="max-w-[764px] text-center mx-auto mt-4 md:mt-4 text-sm md:text-xl text-white font-light leading-[30px]">
          {
            "نبدع في تصميم وبرمجة المواقع وتطبيقات الموبايل، مع حلول تسويق إلكتروني مبتكرة تساعدك على توسيع عملك على الإنترنت بكل احترافية."
          }
        </p>
        <div className="flex items-center justify-center gap-4 mt-4 md:mt-8">
          <Link
            href={whats}
            target="_blank"
            className="block btn-bg text-white py-3.5 px-7 rounded-4xl"
          >
            {"تواصل معنا"}
          </Link>
          <Link
            href={"/#works"}
            className="hidden bg-linear-to-r from-[#1C1C1C] via-[#1C1C1C] via-60% to-[#05050579] text-white py-3.5 px-7 rounded-4xl border border-[#2B2B2B] md:block"
          >
            {"شاهد الأعمال"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;

"use client";

import { whatsapp } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { whats } from "@/components/social/links";

const Icon = () => {
  return (
    <motion.div
      className="fixed bottom-10 start-5 md:start-10 z-100"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <a
        href={whats}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[60px] h-[60px] relative block"
      >
        <Image
          src={whatsapp}
          fill
          alt="whatsapp"
          loading="lazy"
          sizes="60px"
          className="object-cover cursor-pointer"
        />
      </a>
    </motion.div>
  );
};

export default Icon;

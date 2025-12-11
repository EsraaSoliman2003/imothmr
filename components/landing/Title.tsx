"use client";
import { motion } from "framer-motion";

export default function TypingWords() {
  const text = "فكر اجتماعياً و نفذ رقمياً";
  const words = text.split(" ");

  return (
    <h1 className="md:h-24 text-3xl md:text-2xl lg:text-7xl text-center font-medium bg-linear-to-b from-[#FFBF33] to-[#FF584E] bg-clip-text text-transparent">
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: idx * 0.3, // كل كلمة تظهر بعد التانية
            duration: 0.3,
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}

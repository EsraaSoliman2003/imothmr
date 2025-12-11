
import { product } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiComputerLine } from "react-icons/ri";

const Card = () => {
  const imgs = [product,product,product,product];
  return (
    <div className="border border-[#2B2B2B] rounded-[10px] p-2.5 group relative overflow-visible transition-all duration-500 hover:h-[calc(100%+40px)]">
      {/* image */}
      <div className="relative grid grid-cols-2 gap-1.5 rounded-xl overflow-hidden">
        {/* cercel */}
        <div className="absolute bg-linear-to-r from-[#1C1C1C] via-[#1C1C1C] via-60% to-[#05050593] top-1/2 left-1/2 w-[70px] h-[70px] rounded-full border-8 border-[#2B2B2B] flex items-center justify-center text-2xl text-[#FF8F3F] z-10 -translate-x-1/2 -translate-y-1/2">
          <RiComputerLine />
        </div>
        {imgs.map((img, idx) => (
          <div className="relative h-[110px]" key={idx}>
            {/* img */}
            <Image
              src={img}
              alt="product image"
              fill
              loading="lazy"
              sizes="100%"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* text */}
      <div className="mt-2.5">
        <h3 className="font-medium text-white">{"موقع Mothmr"}</h3>
        <p className="text-[#9DA2B3] text-xs mt-1">
          {"نوفر تصميمات واجهات مستخدم سهلة وجذابة لتعزيز تجربة المستخدم"}
        </p>
      </div>
      {/* order now */}
      <Link
        href={""}
        className="
      absolute left-1/2 bottom-0
      -translate-x-1/2 translate-y-[70%]
      w-[90%] btn-bg text-white py-3.5 px-7 rounded-4xl text-center
      opacity-0 group-hover:opacity-100
      group-hover:translate-y-1/2
      transition-all duration-500
    "
      >
        {"اطلب الان"}
      </Link>
    </div>
  );
};

export default Card;

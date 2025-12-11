import Image from "next/image";
import React from "react";
import { RiComputerLine } from "react-icons/ri";
import Link from "next/link";

type Work = {
  workId: number;
  image: string;
  title: string;
  description: string;
  link: string;
  categoryId: number;
};
interface Category {
  categoryId: number;
  icon: string;
  categoryName: string;
}

const Card = ({ work, category }: { work: Work; category?: Category }) => {
  return (
    <Link href={`/work/${work.workId}`} className="block h-full">
      <div className="border border-[#2B2B2B] rounded-[10px] cursor-pointer h-full">
        {/* image */}
        <div className="p-3">
          <div className="relative h-[324px]">
            <Image
              src={work.image}
              alt={work.title}
              fill
              loading="lazy"
              sizes="100%"
            />
          </div>
        </div>
        {/* Text */}
        <div className="p-6 flex gap-2.5">
          <div className="min-w-11 h-11 rounded-lg bg-white group-hover:bg-[#FE963D] flex justify-center items-center text-[#252432] group-hover:text-white text-2xl">
            {category?.icon ? (
              <div className="relative rounded-lg w-11 h-11">
                <Image
                  src={category.icon}
                  alt={category.categoryName}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            ) : (
              <RiComputerLine />
            )}
          </div>
          <div>
            <h3 className="font-medium text-white">{work.title}</h3>
            <p className="text-[#9DA2B3] text-xs mt-1">
              {work.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};


export default Card;

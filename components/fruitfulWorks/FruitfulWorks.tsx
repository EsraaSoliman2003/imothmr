"use client";
import Link from "next/link";
import React /*, { useState }*/ from "react"; // NOTE: useState commented out because filters are disabled for now
import Card from "./Card";
import { kand } from "@/assets";
import Image from "next/image";
import { useAppSelector } from "@/toolkit/hooks";
// import { cn } from "@/lib/utils"; // NOTE: cn is only needed for filter buttons styling

type Category = {
  categoryId: number;
  icon: string;
  categoryName: string;
};

type Work = {
  workId: number;
  image: string;
  title: string;
  description: string;
  link: string;
  categoryId: number;
};

const FruitfulWorks = () => {
  const { data } = useAppSelector((state) => state.home);

  const categories: Category[] = data?.categories ?? [];
  const works: Work[] = data?.works ?? [];

  // ======================================================
  // NOTE: Filters logic is disabled for now.
  // We simply return all works without any filtering.
  // To re-enable filters, uncomment the code block below.
  // ======================================================

  /*
  // State to track selected filter (all or specific category)
  const [type, setType] = useState<"all" | number>("all");

  // Filter buttons (static "all" + dynamic from API categories)
  const btns: { type: "all" | number; text: string }[] = [
    {
      type: "all",
      text: "الكل",
    },
    // Dynamic buttons from API categories
    ...categories.map((cat) => ({
      type: cat.categoryId,
      text: cat.categoryName,
    })),
  ];

  // Filter works based on selected type
  const filteredWorks =
    type === "all"
      ? works
      : works.filter((work) => work.categoryId === type);
  */

  // For now: show all works without filters
  const filteredWorks = works;

  return (
    <section className="py-10 md:py-16 relative">
      {/* shape */}
      <div className=" absolute start-0 bottom-0 z-9">
        <div className="relative w-[367px] h-[967px]">
          <Image src={kand} alt="shape" fill loading="lazy" sizes="367px" />
        </div>
      </div>

      <div className="container relative z-10">
        <span className="text-center block md:text-lg text-[#FF8F3F]">
          {"أعمال مثمرة"}
        </span>
        <h2 className="text-white text-center mt-2 md:mt-5 text-xl md:text-4xl">
          {"أعمال أنجزناها و أثمرت"}
        </h2>

        <div className="flex flex-col lg:flex-row items-start gap-8 mt-20">
          {/* ======================================================
              Filters sidebar (menu) - commented out for now
              To restore the filters UI, uncomment this whole block.
          ======================================================= */}

          {/*
          <div className="lg:min-w-[280px] min-w-full hidden lg:block">
            <div className="p-7 border border-[#2B2B2B] rounded-[10px] flex flex-col gap-10">
              {btns.map((btn, idx) => (
                <button
                  type="button"
                  key={idx}
                  className={cn(
                    "font-medium block text-start cursor-pointer",
                    type === btn.type
                      ? "text-[#FF8F3F] underline"
                      : "text-[#FFFFFF8A]"
                  )}
                  onClick={() => setType(btn.type)}
                >
                  {btn.text}
                </button>
              ))}
            </div>
            <Link
              href={""}
              className="block mt-6 text-center bg-linear-to-r from-[#1C1C1C] via-[#1C1C1C] via-60% to-[#05050579] text-white py-3.5 px-7 rounded-4xl border border-[#2B2B2B]"
            >
              {"شاهد الأعمال"}
            </Link>
          </div>
          */}

          {/* Cards */}
          {/* <div className="grow grid md:grid-cols-2 gap-7"> */}
          <div className="grow w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredWorks.map((work) => {
              const category = categories.find(
                (cat) => cat.categoryId === work.categoryId
              );

              return <Card key={work.workId} work={work} category={category} />;
            })}
          </div>



          {/* CTA button for mobile (unchanged design) */}
          <Link
            href={""}
            className="block mt-3 text-center bg-linear-to-r from-[#1C1C1C] via-[#1C1C1C] via-60% to-[#05050579] text-white py-3.5 px-7 rounded-4xl border border-[#2B2B2B] lg:hidden mx-auto"
          >
            {"شاهد الأعمال"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FruitfulWorks;

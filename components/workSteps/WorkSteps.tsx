import { arrow, h_1, h_2, h_3, h_4 } from "@/assets";
import Image from "next/image";
import React from "react";

const WorkSteps = () => {
  const data = [
    {
      icon: h_1,
      title: "تحديد الاحتياجات",
      description:
        "مثمر هي شركة رائدة في تقديم حلول برمجية متكاملة ومبتكرة تدعم مختلف القطاعات التجارية والخدمية. ",
    },
    {
      icon: h_2,
      title: "التخطيط و ترتيب المهام",
      description:
        "مثمر هي شركة رائدة في تقديم حلول برمجية متكاملة ومبتكرة تدعم مختلف القطاعات التجارية والخدمية. ",
    },
    {
      icon: h_3,
      title: "تصميم الواجهات ( UI/UX )",
      description:
        "مثمر هي شركة رائدة في تقديم حلول برمجية متكاملة ومبتكرة تدعم مختلف القطاعات التجارية والخدمية. ",
    },
    {
      icon: h_4,
      title: "البدء في التطوير و البرمجة",
      description:
        "مثمر هي شركة رائدة في تقديم حلول برمجية متكاملة ومبتكرة تدعم مختلف القطاعات التجارية والخدمية. ",
    },
  ];
  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <span className="text-center block md:text-lg text-[#FF8F3F]">
          {"كيف نعمل"}
        </span>
        <h2 className="text-white text-center mt-2 md:mt-5 text-xl md:text-4xl">
          {"نعمل بإتقان من أجل اثمار مشروعك"}
        </h2>
        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 md:gap-12 mt-20 md:mt-[150px]">
          {data.map((card, idx) => (
            <div className="relative" key={idx}>
              {/* Arrow */}
              {idx < data.length - 1 && (
                <div className="absolute -end-10 top-[30px] -translate-x-1/2 hidden lg:block">
                  <div className="relative w-[104px] h-5">
                    <Image
                      src={arrow}
                      alt="arrow"
                      fill
                      loading="lazy"
                      sizes="104px"
                    />
                  </div>
                </div>
              )}

              {/* Card */}
              <div className="w-[90px] h-[90px] relative mx-auto">
                <Image
                  src={card.icon}
                  alt="step"
                  fill
                  loading="lazy"
                  sizes="90px"
                  className=" object-contain"
                />
              </div>
              <h5 className="mt-4 md:mt-16 font-medium text-center text-white">
                {card.title}
              </h5>
              <p className="text-[#9DA2B3] font-light text-xs text-center mt-3 md:mt-5">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSteps;

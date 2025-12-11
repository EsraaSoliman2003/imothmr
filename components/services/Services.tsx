"use client";
import { logo_icon } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineCode } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaRegStar, FaBehance } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdWhatsapp } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import Icon from "./Icon";
import { useAppSelector } from "@/toolkit/hooks";
import ServiceSkeleton from "./ServiceSkeleton";
import OfferSkeleton from "./OfferSkeleton";
import { whats, facebook, linkedin, behance } from "@/components/social/links";

const Services = () => {
  const { data, loading } = useAppSelector((state) => state.home);
  console.log(data)

  const icons = [
    <RiComputerLine key="computer" />,
    <AiOutlineCode key="code" />,
    <FaRegStar key="star" />,
    <HiOutlineShoppingBag key="shopping" />,
  ];
  return (
    <section className="py-10 md:py-16 relative">
      {/* chat */}
      <Icon />
      <div className="container">
        {loading ? (
          <>
            <ServiceSkeleton />
            <OfferSkeleton />
          </>
        ) : (
          <>
            <span className="text-center block md:text-lg text-[#FF8F3F]">
              {"ما نسعي لتقديمه لك"}
            </span>
            <h2 className="text-white text-center mt-2 md:mt-5 text-xl md:text-4xl">
              {"تعرف على الخدمات التي نقدمها"}
            </h2>
            {/* services */}
            <div className="mt-5 md:mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {data?.services.map((service, idx) => (
                <div
                  className="group bg-linear-to-r from-[#1C1C1C] via-[#1C1C1C] via-50% to-[#05050525] border border-[#2B2B2B] rounded-[10px] px-6 pt-7.5 pb-12 cursor-pointer transition-all flex flex-col gap-3"
                  key={service.serviceId}
                >
                  <div className="w-11 h-11 rounded-lg bg-white group-hover:bg-[#FE963D] flex justify-center items-center text-[#252432] group-hover:text-white text-2xl">
                    {icons[idx]}
                  </div>
                  <h3 className="text-white group-hover:text-[#FE963D]">
                    {service.name}
                  </h3>
                  <p className="text-[#9DA2B3] group-hover:text-white">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
            {/* offer */}
            <div className="mt-4 md:mt-8 bg-linear-to-r from-[#1C1C1C] via-[#1C1C1C] via-50% to-[#05050510] border border-[#2B2B2B] py-8 md:py-12 px-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="relative w-[100px] lg:w-[168px] self-start hidden md:block">
                <div className="absolute -top-6 start-0">
                  <div className="relative w-[70px] lg:w-[168px] h-[150px] lg:h-[215px]">
                    <Image
                      src={logo_icon}
                      alt="logo"
                      loading="lazy"
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 168px, 70px"
                    />
                  </div>
                </div>
              </div>
              <div className="grow">
                <span className="font-medium text-white">
                  {"ما نسعي لتقديمه !"}
                </span>
                <p className="mt-4 text-[#9DA2B3] max-w-[800px]">
                  {
                    "مثمر هي شركة رائدة في تقديم حلول برمجية متكاملة ومبتكرة تدعم مختلف القطاعات التجارية والخدمية. نسعى من خلال خبراتنا وكفاءتنا إلى تطوير مشاريع تقنية عالية الجودة تشمل التجارة الإلكترونية، التعليم، الصحة والخدمات،مع ضمان تجربة مرنة، فعالة وسهلة الاستخدام تلبي تطلعات عملائنا وتواكب المعايير العالمية."
                  }
                </p>
              </div>
              <div className="flex md:flex-col gap-5">
                <Link
                  href={whats}
                  className="text-[#9DA2B3] text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdWhatsapp />
                </Link>

                {/* <Link
                  href={linkedin}
                  className="text-[#9DA2B3] text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </Link> */}
                <Link
                  href={behance}
                  className="text-[#9DA2B3] text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaBehance />
                </Link>


                <Link
                  href={facebook}
                  className="text-[#9DA2B3] text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </Link>

              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Services;

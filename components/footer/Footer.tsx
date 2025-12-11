import { call, footer, location, logo, mail } from "@/assets";
import { whats, facebook, linkedin, telegram, behance } from "@/components/social/links"

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane, FaBehance } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";

const Footer = () => {
  const data = [
    {
      icon: call,
      name: "اتصل بنا في أي وقت",
      info: "01002402064",
    },
    {
      icon: mail,
      name: "تواصل معنا عبر البريد الالكتروني",
      info: "Hello@Mothmr.net",
    },
    {
      icon: location,
      name: "العنوان الخاص بنا",
      info: "مصر - منوف - المنوفية",
    },
  ];
  const social = [
    { icon: <FaFacebookF />, href: facebook },
    // { icon: <FaLinkedinIn />, href: linkedin },
    { icon: <MdWhatsapp />, href: whats },
    // { icon: <FaTelegramPlane />, href: telegram },
    { icon: <FaBehance />, href: behance },
  ];


  const Website_links = [
    {
      name: "الرئيسية",
      href: "",
    },
    {
      name: "خدماتنا",
      href: "",
    },
    {
      name: "منتجاتنا",
      href: "",
    },
    {
      name: "عملاؤنا",
      href: "",
    },
    {
      name: "تواصل معنا",
      href: "",
    },
  ];
  const services = [
    {
      name: "برمجة المواقع",
      href: "",
    },
    {
      name: "برمجة التطبيقات",
      href: "",
    },
    {
      name: "UI&UX",
      href: "",
    },
    {
      name: "تطوير المشاريع",
      href: "",
    },
    {
      name: "إدارة السوشيال ميديا",
      href: "",
    },
  ];
  return (
    <>
      <section className="bg-[#050505] mt-60 pb-16 pt-32 lg:pt-[220px] relative">
        <div className="absolute -top-1/3 start-0 w-full">
          <div className="container">
            <div className="bg-linear-to-t from-[#FF694A] to-[#FE963D] rounded-[30px] overflow-hidden lg:flex items-center gap-2">
              {/* text */}
              <div className="lg:py-12 lg:px-10 p-6">
                <h4 className=" font-semibold text-2xl text-center lg:text-start lg:text-[30px] text-[#171718]">
                  {"يسعدنا ان شاركك اثمار مشروعك"}
                </h4>
                <p className="text-center lg:text-start text-sm lg:text-xl text-[#494949] mt-1">
                  {"نبدع في تصميم وبرمجة المواقع وتطبيقات الموبايل"}
                </p>
                <Link
                  href={""}
                  className="py-3.5 px-7 rounded-4xl border border-white/35 bg-white/10 text-white block text-center lg:w-fit mt-2.5"
                >
                  {"اطلب مشروعك الان"}
                </Link>
              </div>
              {/* Image */}
              <div className="grow h-[242px] relative hidden lg:block">
                <Image
                  src={footer}
                  alt="banner"
                  fill
                  loading="lazy"
                  sizes="100%"
                  className=" object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className=" flex items-center justify-between flex-wrap gap-5">
            {data.map((item, idx) => (
              <div className="flex items-center gap-3" key={idx}>
                <div className="w-[60px] h-[60px] rounded-lg bg-linear-to-r from-[#1C1C1C] via-[#1C1C1C] via-60% to-[#05050579] border border-[#2B2B2B] flex items-center justify-center">
                  <div className=" relative w-9 h-[37px]">
                    <Image
                      src={item.icon}
                      alt="icon"
                      fill
                      loading="lazy"
                      sizes="36px"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-white">{item.name}</span>
                  {idx === 0 ? (
                    <Link
                      href={`tel:${item.info}`}
                      className="text-[#6C7278]"
                    >
                      {item.info}
                    </Link>
                  ) : (
                    <span className="text-[#6C7278]">{item.info}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 border-t border-[#2B2B2B] bg-[#050505]">
        <div className="container">
          <div className="flex items-start justify-baseline gap-8 flex-wrap">
            <div className="grow">
              {/* logo */}
              <div className="w-[125px] h-10 relative">
                <Image
                  src={logo}
                  alt="logo"
                  loading="lazy"
                  fill
                  sizes="125px"
                />
              </div>
              <p className="mt-5 text-[#9DA2B3] max-w-[534px]">
                {
                  "نبدع في تصميم وبرمجة المواقع وتطبيقات الموبايل، مع حلول تسويق إلكتروني مبتكرة تساعدك على توسيع عملك على الإنترنت بكل احترافية."
                }
              </p>
              <span className="mt-5 text-white block">{"تابعنا"}</span>
              <div className="flex flex-wrap items-center gap-3 mt-5">
                {social.map((icon, idx) => (
                  <Link
                    href={icon.href}
                    key={idx}
                    className={cn(
                      "w-[50px] h-[50px] rounded-lg flex items-center justify-center border border-[#2B2B2B] hover:border-[#FF8F3F] text-white hover:text-[#FF8F3F] transition-all text-2xl bg-linear-to-r from-[#1C1C1C] via-[#1C1C1C] via-60% to-[#05050579]"
                    )}
                  >
                    {icon.icon}
                  </Link>
                ))}
              </div>
            </div>
            {/*  */}
            <div className="grow">
              <h3 className="text-lg text-white">{"روابط الموقع"}</h3>
              <div className="flex flex-col gap-3 mt-4">
                {Website_links.map((link, idx) => (
                  <Link
                    href={link.href}
                    key={idx}
                    className="text-[#9DA2B3] hover:text-[#FF8F3F]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            {/*  */}
            <div className="grow">
              <h3 className="text-lg text-white">{"خدماتنا"}</h3>
              <div className="flex flex-col gap-3 mt-4">
                {services.map((link, idx) => (
                  <Link
                    href={link.href}
                    key={idx}
                    className="text-[#9DA2B3] hover:text-[#FF8F3F]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

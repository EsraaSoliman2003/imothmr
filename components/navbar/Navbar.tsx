"use client";
import { RiMenu3Fill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { IoClose } from "react-icons/io5";
import Logo from "../logo/Logo";
import { whats } from "../social/links";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>();
  const links = [
    { name: "الرئيسية", link: "/#home" },
    { name: "كيف نعمل", link: "/#how-work" },
    { name: "خدماتنا", link: "/#services" },
    { name: "منتجاتنا", link: "/#works" },
    { name: "تعرف علينا", link: "/#contact" },
  ];
  return (
    <header className="py-6 md:py-9 absolute top-0 start-0 w-full z-100">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          {/* links */}
          <nav className="lg:bg-white/5 lg:p-5.5 lg:rounded-[40px] lg:border border-[#2B2B2B]">
            <ul
              className={cn(
                "flex flex-col lg:flex-row lg:items-center gap-8 xl:gap-12 absolute lg:relative top-0 start-0 w-full min-h-screen lg:min-h-fit bg-[#202020] lg:bg-transparent z-50 transition-all duration-500 pt-8 lg:pt-0 px-6 lg:px-0",
                open ? "open-nav" : "close-nav"
              )}
            >
              <div className="lg:hidden flex items-center justify-between ">
                <Logo />
                <button
                  type="button"
                  className="text-2xl lg:hidden text-white"
                  onClick={() => setOpen(!open)}
                >
                  <IoClose />
                </button>
              </div>
              {links.map((link, idx) => (
                <Link
                  href={link.link}
                  key={idx}
                  className="text-[#FFFFFF66] transition-all hover:text-[#FF8F3F] hover:font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            className="text-2xl lg:hidden text-white rotate-180"
            onClick={() => setOpen(!open)}
          >
            <RiMenu3Fill />
          </button>
          <Link
            href={whats}
            target="_blank"
            className="lg:block btn-bg text-white py-3.5 px-7 rounded-4xl hidden"
          >
            {"تواصل معنا"}
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Navbar;

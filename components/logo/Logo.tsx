import { logo } from "@/assets";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="w-24 md:w-[182px] h-10 md:h-[58px] relative">
      <Image src={logo} alt="logo" fill priority sizes="(min-width: 768px) 182px, 96px" />
    </div>
  );
};

export default Logo;

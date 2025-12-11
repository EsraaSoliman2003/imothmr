"use client";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/toolkit/hooks";
import React from "react";

const Sidebar = () => {
  const status = useAppSelector((state) => state.menu.value);
  return (
    <div
      className={cn(
        "w-full lg:min-w-[280px] lg:max-w-[280px] bg-[#050505] min-h-screen fixed top-16 lg:top-0 lg:sticky px-4 pt-5 transition-all duration-500 z-[100]",
        status ? "start-0" : "-start-full lg:start-0"
      )}
    >
      fdkgjn
    </div>
  );
};

export default Sidebar;

"use client";
import { useAppDispatch, useAppSelector } from "@/toolkit/hooks";
import { toggle } from "@/toolkit/slices/openMenu";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const BtnMenu = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.menu.value);
  const icon = status ? <FiMenu /> : <IoMdClose />;
  return (
    <>
      <button
        type="button"
        className="w-5 h-5 block relative lg:hidden text-white text-2xl"
        onClick={() => {
          dispatch(toggle());
        }}
      >
        {icon}
      </button>
    </>
  );
};

export default BtnMenu;

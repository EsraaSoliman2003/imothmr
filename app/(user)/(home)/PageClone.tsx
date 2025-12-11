"use client";
import { useAppDispatch } from "@/toolkit/hooks";
import { fetchHomeData } from "@/toolkit/slices/homeSlice";
import { useEffect } from "react";

const PageClone = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);
  return <>{children}</>;
};

export default PageClone;

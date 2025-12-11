"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import axios from "@/lib/axios";
import { isAxiosError } from "axios";
import { RiComputerLine } from "react-icons/ri";
import { FiArrowLeft } from "react-icons/fi";

type Work = {
  workId: number;
  image: string;
  title: string;
  description: string;
  link: string;
  categoryId: number;
};

type Category = {
  categoryId: number;
  icon: string;
  categoryName: string;
};

const WorkDetails = () => {
  const params = useParams<{ id: string }>();
  const workId = params?.id;

  const [work, setWork] = useState<Work | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchedRef = useRef(false);

  useEffect(() => {
    if (!workId || fetchedRef.current) return;

    fetchedRef.current = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [workRes, categoriesRes] = await Promise.all([
          axios.get<Work>(`work/${workId}`),
          axios.get<Category[]>("Category"),
        ]);

        setWork(workRes.data);
        setCategories(categoriesRes.data);
      } catch (err) {
        let msg = "فشل تحميل بيانات العمل";
        if (isAxiosError(err)) {
          msg = err.response?.data?.message ?? msg;
        }
        setError(msg);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [workId]);

  if (loading) {
    return (
      <section className="container py-16 flex items-center justify-center mt-20">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-white/20 border-t-white animate-spin" />
          <p className="text-center text-white text-sm">
            جاري تحميل بيانات العمل...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container py-16">
        <p className="text-center text-red-400">{error}</p>
      </section>
    );
  }

  if (!work) {
    return (
      <p className="text-center text-white py-20">
        العمل غير موجود
      </p>
    );
  }

  const category = categories.find(
    (cat) => cat.categoryId === work.categoryId
  );

  return (
    <section className="container py-43">
      <div className="px-6 py-5 mb-8 lg:rounded-lg lg:border border-[#2B2B2B] w-full border border-white/5 lg:bg-white/5 flex items-center gap-3">
        <div className="flex-shrink-0">
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
        </div>
        <div className="flex flex-col text-right gap-1 w-full">
          <h3 className="text-white text-sm md:text-base font-semibold">
            {work.title}
          </h3>
          <p className="text-[#9DA2B3] text-[11px] md:text-xs leading-relaxed w-[80%]">
            {work.description}
          </p>
        </div>
      </div>

      <div className="w-full rounded-lg overflow-hidden mb-6">
        <Image
          src={work.image}
          alt={work.title}
          width={1216}
          height={1721}
          className="w-full h-auto object-cover"
          sizes="100vw"
        />
      </div>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div></div>

        <Link
          href=""
          className="block btn-bg text-white py-3.5 px-7 rounded-4xl flex items-center gap-2"
        >
          <span>تواصل معنا</span>
          <FiArrowLeft className="text-xl" />
        </Link>
      </div>
    </section>
  );
};

export default WorkDetails;

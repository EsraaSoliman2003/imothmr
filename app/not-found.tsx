"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">الصفحة غير موجودة</h2>
      <p className="text-gray-400 mb-8">
        الصفحة اللي انت بتدور عليها مش موجودة أو تم حذفها
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
}

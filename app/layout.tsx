import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providerr from "@/toolkit/Providerr";

const Expo = localFont({
  src: [
    { path: "../fonts/ExpoArabic-Bold.woff", weight: "700" },
    { path: "../fonts/ExpoArabic-SemiBold.woff", weight: "600" },
    { path: "../fonts/ExpoArabic-Medium.woff", weight: "500" },
    { path: "../fonts/ExpoArabic-Book.woff", weight: "400" },
    { path: "../fonts/ExpoArabic-Light.woff", weight: "300" },
  ],
});

export const metadata: Metadata = {
  title: "mothmr",
  description:
    "Innovative software company delivering cutting-edge digital solutions, web and mobile applications, and technology consulting to empower your business.",
  keywords: ["mothmr", "web", "mobile", "mothmercom"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${Expo.className} antialiased bg-[#171718]!`}>
         <Providerr>{children}</Providerr>
      </body>
    </html>
  );
}

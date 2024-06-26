"use client";

import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";
import { DM_Sans } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "700" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: "400" });
// Add this style to your css file

export default function HeroSection() {
  return (
    <div className="mt-10">
      <div
        className="w-full md:w-4/5 mx-auto flex items-center justify-center heroSection text-white bg-cover bg-no-repeat 
       rounded-none md:rounded-md"
      >
        <div className="w-4/5 md:w-3/5 text-center text-wrap pt-7 pb-9">
          <h1
            className={`${poppins.className} text-xl md:text-4xl md:pt-11 pt-0`}
          >
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>
          <p
            className={`${dmSans.className} w-full text-center text-wrap text-base pt-7`}
          >
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
          <button className="px-2 text-center relative w-64 md:w-full  mb-1  py-2 text-white bg-green-400 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg md:mt-11 mt-9 xl:ml-2 lg:ml-3 ">
            Temukan Video Course
          </button>
        </div>
      </div>
    </div>
  );
}

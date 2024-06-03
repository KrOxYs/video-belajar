"use client";

// Add this style to your css file
import { Poppins } from "next/font/google";
import { DM_Sans } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "600" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: "500" });

export default function TittleContent() {
  return (
    <div className="w-4/5 justify-center mx-auto mt-10">
      <h2 className={`${poppins.className} text-3xl text-black`}>
        Koleksi Video Pembelajaran Unggulan
      </h2>
      <p className={`${dmSans.className} text-base text-slate-400`}>
        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
      </p>
    </div>
  );
}

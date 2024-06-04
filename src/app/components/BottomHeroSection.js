"use client";

// import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";
import { DM_Sans } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "700" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: "400" });
// Add this style to your css file

export default function BottomHeroSection() {
  return (
    <div className="mt-10">
      <div className="w-auto md:w-5/6 md:mx-auto ml:0 -ml-10 flex items-center justify-center  heroSectionBottom text-white bg-cover bg-no-repeat rounded-xl">
        <div className="w-3/5 text-center text-wrap pt-7 pb-9 ml-8 lg:ml-0">
          <p className=" text-gray-400 text-md mt-11 font-semibold">
            NEWSLATTER
          </p>
          <h1 className={`${poppins.className} text-xl md:text-4xl pt-0  `}>
            Mau Belajar Lebih Banyak?
          </h1>
          <p
            className={`${dmSans.className} m-auto w-full lg:w-2/3 text-center text-wrap text-base pt-5`}
          >
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik hariesok.id
          </p>

          <form className="max-w-md mx-auto h-auto mt-10">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative mb-5">
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 ps-5 text-sm text-gray-900 rounded-lg outline-none "
                placeholder="Masukkan Email Mu"
                required
              />
              <button
                type="submit"
                className="hidden md:block text-white absolute end-2.5 bottom-1 bg-yellow-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
            <button
              type="button"
              className=" mt-0 md:hidden w-full focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-10"
            >
              Search
            </button>
          </form>

          {/* <button className="px-2 mx-auto md:w-3/4 mb-10  py-2 text-white bg-green-400 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg md:mt-11 mt-9 md:-ml-0">
            Temukan Video Course
          </button> */}
        </div>
      </div>
    </div>
  );
}

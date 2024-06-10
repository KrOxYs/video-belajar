"use client";
import RatingStars from "./RatingStar";
import Image from "next/image";
import CardImage from "/public/g1.png";
import Link from "next/link";
import { useState } from "react";
// import { useStore } from "zustand";
// import { useStore } from "@/app/utils/Store";
export default function NormalCard({ data }) {
  // const [test,setTest] = useState<string>("");
  // console.l/og(data);

  // const productData = useStore((state) => state.Data);
  // console.log(productData);
  const { id, title, description, productImage, username, userTitle, price } =
    data;
  return (
    <div className="w-2/5 lg:w-96 ml-11 bg-white hidden md:block">
      <Link
        href="#"
        className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
      >
        <img
          alt=""
          src={productImage}
          className="h-56 w-full rounded-md object-cover"
        />
        {/* <Image
          src={productImage}
          width={500}
          height={500}
          alt="Picture of the author"
          priority
        /> */}

        {/* <Image src={'../'}/> */}

        <div className="mt-2">
          <dl>
            <div>
              {/* <dt className="sr-only">Address</dt> */}

              <dd className="font-medium">{title}</dd>
            </div>

            <div>
              <dd className="text-sm text-gray-500">{description}</dd>
            </div>
            <div>
              <div className="flex items-center gap-4 mt-5">
                <img
                  className="w-10 h-10 rounded-md"
                  src="https://www.youngontop.com/wp-content/uploads/2022/09/portrait-pretty-korean-girl-receive-surprising-news-looking-amazed-happy-camera-standing-blue-background_1258-76005.jpg"
                  alt=""
                />
                <div className="font-medium text-black text-sm">
                  <div>{username}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {userTitle}
                  </div>
                </div>
              </div>
            </div>
          </dl>

          <div className="mt-6 flex items-center gap-8">
            <RatingStars />
            <h1 className="lg:text-2xl text-md font-bold text-green-500 ml-auto">
              Rp {price}k
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

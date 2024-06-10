"use client";
import NormalCard from "./micro/NormalCard";
import { productData } from "../utils/data";
import { useState } from "react";
import MobileCard from "./micro/MobileCard";
import { useStore } from "../utils/Store";
// import Nor
export default function CardSection() {
  // console.log(productData());
  // const [data, setData] = useState(productData());
  const { Data } = useStore();
  // console.log(Data);
  return (
    <div className="w-full flex flex-wrap flex-row gap-4">
      {Data.map((item, key) => (
        <NormalCard key={key} data={item} />
      ))}
      {Data.map((item, key) => (
        <MobileCard key={key} data={item} />
      ))}
      {/* <NavAccordion /> */}
    </div>
  );
}

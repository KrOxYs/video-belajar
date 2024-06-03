"use client";
import NormalCard from "./micro/NormalCard";
import { productData } from "../utils/data";
import { useState } from "react";
import MobileCard from "./micro/MobileCard";
export default function CardSection() {
  // console.log(productData());
  const [data, setData] = useState(productData());
  // console.log(data);
  return (
    <div className="w-full flex flex-wrap flex-row gap-4">
      {data.map((item, key) => (
        <NormalCard key={key} data={item} />
      ))}
      {data.map((item, key) => (
        <MobileCard key={key} data={item} />
      ))}
      {/* <NavAccordion /> */}
    </div>
  );
}

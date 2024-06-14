"use client";
import NormalCard from "./micro/NormalCard";
import MobileCard from "./micro/MobileCard";
import { useStore } from "../service/api/Store";
import { useEffect } from "react";
export default function CardSection() {
  const { Data, getDataFromApi } = useStore();
  useEffect(() => {
    getDataFromApi();
  }, []);
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

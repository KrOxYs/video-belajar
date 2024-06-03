"use client";
import * as Tabs from "@radix-ui/react-tabs";

import CardSection from "./CardSection";
import { useState } from "react";

export default function MainSection() {
  const [showBottom, setBottom] = useState(0);
  // console.log(Image);
  const tabItems = [
    "Semua Kelas",
    "Pemasaran",
    "Desain",
    "Pengembangan Diri",
    "Bisnis",
  ];
  return (
    <div className="mt-10 mx-8 lg:mx-20">
      <Tabs.Root
        className="w-full ml-0 md:px-8 md:ml-10"
        defaultValue={tabItems[0]}
      >
        <Tabs.List
          className="w-full flex items-center gap-x-3 overflow-x-auto text-sm no-scrollbar"
          aria-label="Manage your account"
        >
          {tabItems.map((item, idx) => (
            <Tabs.Trigger
              key={idx}
              onClick={() => setBottom(idx)}
              className="group outline-none py-4 border-transparent text-gray-500 data-[state=active]:border-orange-600 data-[state=active]:text-orange-600 text-nowrap  "
              value={item}
            >
              <div className="py-1.5 px-4 rounded-lg duration-150 group-hover:text-orange-600 group-hover:bg-gray-50 group-active:bg-gray-100 mb-4">
                {item}
              </div>
              {showBottom === idx && (
                <div className=" w-12 relative md:absolute  h-2 rounded-md bg-orange-600"></div>
              )}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabItems.map((item, idx) => (
          <Tabs.Content key={idx} className="py-6 text-sm" value={item}>
            {/* <p className="text-xs leading-normal">
              This is <b>{item}</b> Tab
            </p> */}
          </Tabs.Content>
        ))}
      </Tabs.Root>
      {/* <div className="w-full flex flex-wrap flex-row gap-4"> */}
      <CardSection />
      {/* </div> */}
    </div>
  );
}

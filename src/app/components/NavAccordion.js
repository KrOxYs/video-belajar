"use client";
import React from "react";
import { useState } from "react";
// import { FooterAccordionItems } from "../utils/data";
import { footerNavs } from "../utils/data";
const NavAccordion = () => {
  const frequentlyAskQuestions = footerNavs;
  const [activeId, setActiveId] = useState(null);

  const togglerFunction = (index) => {
    if (activeId === index) {
      setActiveId(null);
    } else {
      setActiveId(index);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[600px] h-max  rounded-lg overflow-hidden">
        {frequentlyAskQuestions.map((item, i) => (
          <div key={i} className="border-b last:border-b-0">
            <div
              className={`px-5 py-4 flex items-center justify-between ${
                activeId === i ? "bg-gray-100" : ""
              }`}
              onClick={() => togglerFunction(i)}
            >
              <p className="flex-1">{item.label}</p>
              <span>
                {activeId === i ? (
                  <i className="fa-solid fa-angle-up"></i>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
                      fill="#3A3541"
                      fillOpacity="0.54"
                    />
                  </svg>
                )}
              </span>
            </div>
            {activeId === i && (
              <div className="px-5 py-4 flex flex-col gap-4 justify-between">
                {item.items.map((el, idx) => (
                  <a
                    key={idx}
                    href={el.href}
                    className="hover:underline hover:text-indigo-600"
                  >
                    {el.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavAccordion;

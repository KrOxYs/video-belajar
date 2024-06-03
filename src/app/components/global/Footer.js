"use client";

import Logo from "../Logo";
import NavAccordion from "../NavAccordion";
import { FooterAccordionItems } from "../../utils/data";
import FooterLogo from "../micro/FooterLogo";
export default function Footer() {
  const footerNavs = FooterAccordionItems();
  // console.log(footerNavs);
  return (
    <footer className="w-full text-gray-500 bg-white px-8 py-5 mx-auto md:px-8 mt-11">
      <div className="gap-4 justify-between md:flex pt-10">
        <div className="flex-1 md:mx-20 mx-0">
          <div className="w-full md:w-3/4">
            <Logo />
            <p className="leading-relaxed mt-2 text-black font-bold text-md ml-4">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </p>
            <p className="text-black ml-4 mt-2 ">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang
            </p>
            <p className="text-black ml-4 mt-2">+62-877-7123-1234</p>
          </div>
        </div>
        <div className="flex-1 mt-10 space-y-6 gap-4 justify-evenly sm:flex md:space-y-0 md:mt-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4 hidden md:block" key={idx}>
              <h4 className="text-gray-800 font-medium">{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a
                    href={el.href}
                    className="hover:underline hover:text-indigo-600"
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="flex-1 md:hidden">
          <NavAccordion />
        </div>
      </div>
      <div className="mt-8 py-6 border-t flex flex-col-reverse items-start flex-wrap justify-between md:flex-row">
        <div className="mt-4 sm:mt-0 md:mx-20 mx-0">
          @2023 Gerobak Sayur All Rights Reserved.
        </div>
        <FooterLogo />
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
}

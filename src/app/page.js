import Image from "next/image";
import HeroSection from "./components/HeroSection";
import TittleContent from "./components/tittleContent";
import NavbarComponent from "./components/global/Navbar";
import MainSection from "./components/MainSection";
import BottomHeroSection from "./components/BottomHeroSection";
import Footer from "./components/global/Footer";
// import { usePathname } from "next/navigation";
// import { usePath } from "next/router";

export default function Home() {
  return (
    <div>
      {/* <NavbarComponent showItems={true} /> */}
      <HeroSection />
      <TittleContent />
      <MainSection />
      {/* <HeroSection /> */}
      <BottomHeroSection />
      {/* <Footer /> */}
    </div>
  );
}

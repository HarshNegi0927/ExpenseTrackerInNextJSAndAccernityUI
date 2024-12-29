
import Image from "next/image";
import {HeroParallaxDemo} from "@/app/components/HeroSection"
import { AboutPage } from "./components/aboutPage";
import { Features } from "./components/Features";

export default function Home() {
  return (
   <main className="h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroParallaxDemo/>
      <AboutPage/>
      <Features/>
   </main>
  );
}

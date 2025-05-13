import Image from "next/image";
import Navbar from "@/components/Navbar";
import Ex from "@/components/AboutMe"
import AboutMe from "@/components/AboutMe";
import MyWorks from "@/components/MyWorks";

export default function Home() {
  return (
  <div className="w-full h-full px-2 bg-[var(--color-a)] ">
<AboutMe></AboutMe>
<MyWorks></MyWorks>
</div>
  );
}

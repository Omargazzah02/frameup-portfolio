import Image from "next/image";
import Navbar from "@/components/Navbar";
import Ex from "@/components/AboutMe"
import AboutMe from "@/components/AboutMe";
import MyWorks from "@/components/MyWorks";
import MyServices from "@/components/MyServices";
import MyExhibitons from "@/components/MyExhibitons";
import Contact from "@/components/Contact";

export default function Home() {
  return (
  <div className="w-full h-full px-2 bg-[var(--color-a)] ">
<AboutMe></AboutMe>
<MyWorks></MyWorks>
<MyServices></MyServices>
<MyExhibitons></MyExhibitons>
<Contact></Contact>
</div>

  );
}

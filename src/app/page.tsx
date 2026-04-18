import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import Tech from "@/components/TechSection";

export default function Home() {
  return (
    <div className="bg-[#dfe7f5] min-h-screen">
      <Navbar />

      <Hero />
      <Tech />
      <Experience />
      <About />
      <Contact />
    </div>
  );
}
import ConstructionHeader from "@/components/construction/ConstructionHeader";
import ConstructionFooter from "@/components/construction/ConstructionFooter";
import Hero from "@/components/construction/Hero";
import About from "@/components/construction/About";
import Services from "@/components/construction/Services";
import Process from "@/components/construction/Process";
import Projects from "@/components/construction/Projects";
import QuoteForm from "@/components/construction/QuoteForm";
import BeforeAfter from "@/components/construction/BeforeAfter";
import SectionRail from "@/components/construction/SectionRail";
import { ProgressBar } from "@/components/construction/animations";

export default function Construction() {
  return (
    <div id="top" className="bg-[#0C0E12] text-white min-h-screen overflow-x-clip">
      <ProgressBar />
      <SectionRail />
      <ConstructionHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Projects />
        <BeforeAfter />
        <QuoteForm />
      </main>
      <ConstructionFooter />
    </div>
  );
}
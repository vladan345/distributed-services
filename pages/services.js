import Hero from "@/page-sections/services/Hero";
import AccordionSection from "@/page-sections/services/Accordion";
import ServicesMobile from "@/page-sections/services/ServicesMobile";
import Provide from "@/page-sections/services/Provide";
import Projects from "@/page-sections/services/Projects";
import GetInTouch from "@/components/GetInTouch";
import { ReactLenis } from "@studio-freight/react-lenis";
function services() {
  return (
    <div>
      <ReactLenis root options={{ duration: 1.2 }}>
        <Hero />
        <AccordionSection />
        <ServicesMobile />
        <Provide />
        <Projects />
        <GetInTouch darkMode={true} />
      </ReactLenis>
    </div>
  );
}

export default services;

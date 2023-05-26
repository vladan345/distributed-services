import Hero from "@/page-sections/services/Hero";
import Accordion from "@/page-sections/services/Accordion";
import { ReactLenis } from "@studio-freight/react-lenis";
function services() {
  return (
    <div>
      <ReactLenis root options={{ duration: 1.2 }}>
        <Hero />
        <Accordion />
      </ReactLenis>
    </div>
  );
}

export default services;

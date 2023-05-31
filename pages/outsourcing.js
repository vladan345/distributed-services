import { ReactLenis } from "@studio-freight/react-lenis";
import Hero from "@/page-sections/outsourcing/Hero";
import Nodes from "@/page-sections/outsourcing/Nodes";
import Phases from "@/page-sections/outsourcing/Phases";
import GetInTouch from "@/components/GetInTouch";
function outsourcing() {
  return (
    <div>
      <ReactLenis root options={{ duration: 1.2 }}>
        <Hero />
        <Nodes />
        <Phases />
        <GetInTouch darkMode={true} />
      </ReactLenis>
    </div>
  );
}

export default outsourcing;

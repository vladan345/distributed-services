import { ReactLenis } from "@studio-freight/react-lenis";
import Hero from "@/page-sections/outsourcing/Hero";
import Nodes from "@/page-sections/outsourcing/Nodes";
function outsourcing() {
  return (
    <div>
      <ReactLenis root options={{ duration: 1.2 }}>
        <Hero />
        <Nodes />
      </ReactLenis>
    </div>
  );
}

export default outsourcing;

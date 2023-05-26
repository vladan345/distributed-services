import { projects } from "@/lib/projects";
import Slug from "@/page-sections/projects/Slug";
import List from "../../page-sections/projects/List";
import GetInTouch from "@/components/GetInTouch";
import { ReactLenis } from "@studio-freight/react-lenis";
function Projects() {
  return (
    <div className="Projects">
      <ReactLenis root options={{ duration: 1.2 }}>
        <Slug />
        <p>
          Egestas neque eu rhoncus et. Et amet scelerisque et dui massa nibh
          montes. Donec tincidunt nunc sit vel at nisl elit dis eget sed.
        </p>
        <List projects={projects} />
        <GetInTouch darkMode={true} />
      </ReactLenis>
    </div>
  );
}

export default Projects;

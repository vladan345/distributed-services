import { projects } from "@/lib/projects";
import Slug from "@/page-sections/projects/Slug";
import List from "../../page-sections/projects/List";
import GetInTouch from "@/components/GetInTouch";

function Projects() {
  return (
    <div className="Projects">
      <Slug />
      <p>
        Egestas neque eu rhoncus et. Et amet scelerisque et dui massa nibh
        montes. Donec tincidunt nunc sit vel at nisl elit dis eget sed.
      </p>
      <List projects={projects} />
      <GetInTouch darkMode={true} />
    </div>
  );
}

export default Projects;

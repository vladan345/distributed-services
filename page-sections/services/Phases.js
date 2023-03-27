import Tabs from "@/components/Tabs";
import { phases } from "@/lib/servicesServices";

function Phases() {
  return (
    <div style={{ margin: "200px 0" }}>
      <div className="container">
        <h2>The Distributed Approach to the Project Lifecycle</h2>
        <p style={{ marginBottom: "80px", marginTop: "200px" }}>PHASES</p>
        <Tabs type="phases" content={phases} />
      </div>
    </div>
  );
}

export default Phases;

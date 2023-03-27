import Tabs from "@/components/Tabs";
import { serviceList } from "@/lib/servicesServices";

function Services() {
  return (
    <div className="container">
      <p style={{ marginBottom: "80px", marginTop: "200px" }}>SERVICES</p>
      <Tabs type="service" content={serviceList} />
    </div>
  );
}

export default Services;

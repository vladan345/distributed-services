import React from "react";
import ProjectHero from "@/components/ProjectHero";
import Restaurants from "@/page-sections/rikas/Restaurants";

function Rikas() {
  const projectInfo = {
    banner: "/images/single-project/rikas/rikas-hero.webp",
    services: [
      "Web design",
      "Online marketing",
      "Web development",
      "Google Analytics",
      "Web maintenance",
    ],
    description:
      "Commodo lectus turpis ridiculus id auctor eget enim sapien tellus. Fermentum cursus pellentesque purus faucibus feugiat egestas vel diam. Purus pellentesque rhoncus vel lectus a. Vulputate volutpat quisque id tristique arcu consequat. <br /><br /> Congue pellentesque mollis pellentesque mauris eget amet. Ornare volutpat vestibulum massa molestie metus nisi purus nec. Rhoncus eget nisi amet id tellus mollis id. Purus ut donec molestie laoreet id feugiat bibendum gravida. Placerat elementum et libero amet neque vitae lacinia pellentesque sed.",
  };
  return (
    <div>
      <ProjectHero content={projectInfo} />
      <Restaurants />
    </div>
  );
}

export default Rikas;

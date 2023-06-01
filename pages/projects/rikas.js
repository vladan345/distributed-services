import React from "react";
import ProjectHero from "@/components/ProjectHero";
import { restaurants1, restaurants2, dual } from "@/lib/rikasRestaurants";
import RestaurantRows from "@/page-sections/rikas/RestaurantRows";
import RestaurantRowsMobile from "@/page-sections/rikas/RestaurantRowsMobile";
import Dual from "@/page-sections/rikas/Dual";
import DualMobile from "@/page-sections/rikas/DualMobile";
import Circle from "@/page-sections/rikas/Circle";
import Results from "@/components/Results";
import { ReactLenis } from "@studio-freight/react-lenis";

function Rikas() {
  const projectInfo = {
    title: "Rikas Hospitality Group",
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
    projectLink: "https://rikasgroup.com",
    logo: {
      src: "/images/home/rikas-logo.svg",
      width: 195,
      height: 295,
    },
    results: [
      "Nibh sit sed sem risus eget at nisl. Morbi massa interdum odio dis consequat. Non turpis eget dolor consequat donec tellus.",
      "Sit tincidunt porttitor porttitor convallis ut purus pellentesque. Ipsum est dolor phasellus sit amet ultrices nisi.",
    ],
  };
  return (
    <div>
      <ReactLenis root options={{ duration: 1.2 }}>
        <ProjectHero content={projectInfo} />
        <RestaurantRows content={restaurants1} />
        <RestaurantRowsMobile content={restaurants1} />
        <Dual />
        <DualMobile content={dual} />
        <RestaurantRows content={restaurants2} />
        <RestaurantRowsMobile content={restaurants2} />
        <Circle />
        <Results content={projectInfo} />
      </ReactLenis>
    </div>
  );
}

export default Rikas;

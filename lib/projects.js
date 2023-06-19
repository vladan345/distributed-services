export const projects = [
  {
    id: "rikas-group",
    title: "Rikas Group",
    services: ["web-design", "web-development", "digital-marketing"],
    projectImage: "/images/single-project/rikas/rikas-hero.webp",
    link: "/projects/rikas",
  },
  {
    id: "la-cantine",
    title: "La Cantine du Faubourg",
    services: ["web-design", "web-development"],
    projectImage: "/images/single-project/rikas/lacantine.webp",
    link: "/projects/rikas",
  },
  {
    id: "tagomago",
    title: "Tagomago",
    services: ["web-development"],
    projectImage: "/images/single-project/rikas/tagomago.png",
    link: "/projects/rikas",
  },
  {
    id: "chez-wam",
    title: "Chez Wam",
    services: ["web-design", "web-development"],
    projectImage: "/images/single-project/rikas/chez-wam.png",
    link: "/projects/rikas",
  },
];

export function collectServices() {
  let tempArr = [];
  projects.forEach((project) => {
    project.services.forEach((service) => {
      if (!tempArr.includes(service)) {
        tempArr.push(service);
      }
    });
  });
  return tempArr;
}

export function getProjects(query) {
  let tempArr = [];
  if (query !== "") {
    projects.forEach((project) => {
      project.services.includes(query) ? tempArr.push(project) : null;
    });
  }
  return tempArr;
}

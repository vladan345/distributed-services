export const projects = [
  {
    id: "klei",
    title: "Klei Works",
    services: ["web-design", "web-development", "branding"],
    projectImage: "/images/single-project/klei/klei-hero.webp",
    link: "/projects/klei",
  },
  {
    id: "jove",
    title: "Jove Truffle Products",
    services: ["web-design", "web-development", "branding"],
    projectImage: "/images/single-project/jove/jove-hero.webp",
    link: "/projects/jove",
  },
  {
    id: "eugene-eugene",
    title: "Eugene Eugene",
    services: ["web-design", "web-development", "digital-marketing"],
    projectImage: "/images/single-project/rikas/eugene-eugene.webp",
    link: "/projects/rikas#eugene-eugene",
  },
  {
    id: "twiggy-family",
    title: "Twiggy Family",
    services: ["web-design", "web-development", "digital-marketing"],
    projectImage: "/images/single-project/rikas/twiggy-family.webp",
    link: "/projects/rikas#twiggy-family",
  },
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
    link: "/projects/rikas#la-cantine",
  },
  {
    id: "tagomago",
    title: "Tagomago",
    services: ["web-development"],
    projectImage: "/images/single-project/rikas/tagomago.png",
    link: "/projects/rikas#tagomago",
  },
  {
    id: "chez-wam",
    title: "Chez Wam",
    services: ["web-design", "web-development", "branding"],
    projectImage: "/images/single-project/rikas/chez-wam.png",
    link: "/projects/rikas#chez-wam",
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

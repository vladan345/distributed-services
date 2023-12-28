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
    id: "la-cantine-mykonos",
    title: "La Cantine du Faubourg Mykonos",
    services: ["web-design", "web-development", "digital-marketing"],
    projectImage: "/images/single-project/rikas/lacantinemykonos.png",
    link: "/projects/rikas#la-cantine-mykonos",
  },
  {
    id: "lana-lusa",
    title: "Lana Lusa",
    services: ["web-design", "web-development", "digital-marketing"],
    projectImage: "/images/single-project/rikas/lanalusa.webp",
    link: "/projects/rikas#lana-lusa",
  },
  {
    id: "gohan",
    title: "Gohan",
    services: ["web-design", "web-development", "digital-marketing"],
    projectImage: "/images/single-project/rikas/gohan.webp",
    link: "/projects/rikas#gohan",
  },
  {
    id: "twiggy",
    title: "Twiggy",
    services: ["web-design", "web-development", "digital-marketing"],
    projectImage: "/images/single-project/rikas/twiggy.webp",
    link: "/projects/rikas#twiggy",
  },
  {
    id: "ninive",
    title: "Ninive",
    services: ["web-design", "web-development", "digital-marketing"],
    projectImage: "/images/single-project/rikas/ninive.webp",
    link: "/projects/rikas#ninive",
  },
  {
    id: "mimi-kakushi",
    title: "Mimi Kakushi",
    services: ["web-design", "web-development", "digital-marketing"],
    projectImage: "/images/single-project/rikas/mimikakushi.webp",
    link: "/projects/rikas#mimi-kakushi",
  },
  {
    id: "kyma-beach",
    title: "Kyma Beach",
    services: ["web-design", "web-development", "digital-marketing"],
    projectImage: "/images/single-project/rikas/kimabeach.webp",
    link: "/projects/rikas#kyma-beach",
  },
  {
    id: "ninive-babal",
    title: "Ninive Bab Al Shams",
    services: ["web-design", "web-development", "digital-marketing"],
    projectImage: "/images/single-project/rikas/ninivebabalshams.jpeg",
    link: "/projects/rikas#ninive-babal",
  },
  {
    id: "xu",
    title: "XU",
    services: ["web-design", "web-development", "digital-marketing"],
    projectImage: "/images/single-project/rikas/xu.png",
    link: "/projects/rikas#xu",
  },
  {
    id: "blue-box",
    title: "Blue Box",
    services: ["web-design", "web-development", "digital-marketing"],
    projectImage: "/images/single-project/rikas/bluebox.jpg",
    link: "/projects/rikas#blue-box",
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

export const projects = [
  {
    id: "project-name1",
    title: "Project Name1",
    services: ["web-design", "web-development"],
    projectImage: "/images/home/project1.webp",
    link: "/projects/rikas",
  },
  {
    id: "project-name2",
    title: "Project Name2",
    services: ["branding", "visual-identity", "logo-design"],
    projectImage: "/images/home/project2.webp",
    link: "/projects/rikas",
  },
  {
    id: "project-name3",
    title: "Project Name3",
    services: ["web-design", "web-development"],
    projectImage: "/images/home/project3.webp",
    link: "/projects/rikas",
  },
  {
    id: "project-name4",
    title: "Project Name4",
    services: ["web-design", "web-development"],
    projectImage: "/images/home/project4.webp",
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

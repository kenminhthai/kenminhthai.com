const linkItems = [
  {
    name: "home",
    exact: true,
    link: "/"
  },
  {
    name: "works",
    exact: false,
    link: "/works"
  },
  {
    name: "about",
    exact: false,
    link: "/about"
  }
];

export const ProjectList = [
  {
    name: "Campsyte Site",
    slug: "campsyteSite",
    color: "#7ed321",
    role: "UI/UX Developer",
    company: "Campsyte",
    year: "ongoing",
    desc:
      "Designed and developed Campsyte brochure site from sketches to the production of 40 inner pages and blog posts.",
    mediaSrc: "/assets/imgs/campsyte/campsyte-preview.png",
    link: "/works/campsyte",
    content: [
      {
        id: 0,
        type: "img",
        src: "https://picsum.photos/200/300"
      }
    ]
  },
  {
    name: "Campsyte App",
    slug: "campsyteApp",
    color: "#7ed321",
    role: "UI/UX Developer",
    company: "Campsyte",
    year: "ongoing",
    desc: "Designed and developed Campsyte web app from the ground up",
    mediaSrc: "/assets/imgs/campsyte/campsyte-preview.png",
    link: "/works/campsyte-app",
    content: [
      {
        id: 0,
        type: "img",
        src: "https://picsum.photos/200/300"
      }
    ]
  },
  {
    name: "Ags",
    slug: "ags",
    color: "#67b815",
    role: "Web Developer",
    company: "Ags Inc.",
    year: "2016",
    desc:
      "Renovated AGS website and performed SEO to list on top-10 Google rankings for competitive keywords.",
    mediaSrc: "/assets/imgs/ags/ags-preview.png",
    link: "/works/ags",
    content: [
      {
        id: 0,
        type: "img",
        src: "https://picsum.photos/200/300"
      }
    ]
  },
  {
    name: "Aetypic",
    slug: "aetypic",
    color: "#fc414c",
    role: "Web Developer",
    company: "Aetypic Inc.",
    year: "2016",
    desc:
      "Renovated Aetypic website and performed SEO to list on top-10 Google rankings for competitive keywords.",
    mediaSrc: "/assets/imgs/aetypic/aetypic-preview.png",
    link: "/works/aetypic",
    content: [
      {
        id: 0,
        type: "img",
        src: "https://picsum.photos/200/300"
      }
    ]
  }
];

export function getLinks() {
  return linkItems;
}

export const selfIntro = `I’m Ken Thai, a creative Front-End developer with 4+ years of experience designing and building pixel perfect websites and web applications. Switching my career path from being a UI/UX designer to a Front-End developer, I build products with UI/UX attention in mind.`;

export const resumeIntro = `I am Ken Thai, a creative frontend developer specialized in digital experiences and creative interactions. 

With a background in marketing communications, I aim to combine emotional storytelling along with technology to create next level digital experiences through the meaningful power of design.`;

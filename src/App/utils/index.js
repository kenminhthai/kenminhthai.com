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
    year: "Ongoing",
    desc:
      "Designed and developed Campsyte brochure site from sketches to the production of 40 inner pages and blog posts.",
    mediaSrc: "/assets/imgs/campsyte/campsyte-preview.png",
    link: "/works/campsyte",
    content: [
      {
        id: 1,
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
    year: "Ongoing",
    desc: "Designed and developed Campsyte web app from the ground up",
    mediaSrc: "/assets/imgs/campsyte/campsyte-preview.png",
    link: "/works/campsyte-app",
    content: [
      {
        id: 1,
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
        id: 1,
        type: "img",
        src: "/assets/imgs/ags/ags-pic-1.jpg"
      },
      {
        id: 2,
        type: "img",
        src: "/assets/imgs/ags/ags-pic-2.jpg"
      },
      {
        id: 3,
        type: "img",
        src: "/assets/imgs/ags/ags-pic-3.jpg"
      },
      {
        id: 4,
        type: "img",
        src: "/assets/imgs/ags/ags-pic-4.jpg"
      },
      {
        id: 5,
        type: "img",
        src: "/assets/imgs/ags/ags-pic-5.jpg"
      },
      {
        id: 6,
        type: "img",
        src: "/assets/imgs/ags/ags-pic-6.jpg"
      },
      {
        id: 7,
        type: "img",
        src: "/assets/imgs/ags/ags-pic-7.jpg"
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
        id: 1,
        type: "screen-viewer",
        collection: [
          {
            id: 1,
            name: "abc",
            src: "/assets/imgs/aetypic/aetypic-pic-1.jpg"
          },
          {
            id: 2,
            name: "bcd",
            src: "/assets/imgs/aetypic/aetypic-pic-2.jpg"
          },
          {
            id: 3,
            name: "efg",
            src: "/assets/imgs/aetypic/aetypic-pic-3.jpg"
          },
          {
            id: 4,
            name: "mnl",
            src: "/assets/imgs/aetypic/aetypic-pic-4.jpg"
          }
        ]
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

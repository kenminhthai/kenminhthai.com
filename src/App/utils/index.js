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

export function getLinks() {
  return linkItems;
}

export const selfIntro =
  "I’m Ken Thai, a creative Front-End developer with 4+ years of experience designing and building pixel perfect websites and web applications. Switching my career path from being a UI/UX designer to a Front-End developer, I build products with UI/UX attention in mind.";

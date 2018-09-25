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

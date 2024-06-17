import type { SocialsObject } from "./types";

export const SITE = {
  website: "https://rahim.dev",
  author: "Rahim Chunara",
  desc: "Software Engineer Living in the San Francisco Bay Area, Particularly Interested in DevOps and Cloud Computing.",
  title: "Rahim Chunara",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialsObject = [
  {
    name: "Github",
    href: "https://github.com/RahimChunara",
    active: true,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/rahim-chunara/",
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:smuley@scu.edu",
    active: true,
  }
];

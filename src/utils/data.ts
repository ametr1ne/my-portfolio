import { StaticImageData } from "next/image";
import alpaImage from "/public/projects/alpa.webp";
import yodizImage from "/public/projects/dkdm.webp";
import yodizlkImage from "/public/projects/lk.webp";
import yakovlevImage from "/public/projects/yakovlev.webp";

export type TStackItem = {
  name: string;
  link: string;
};

export type TProject = {
  name: string;
  description: string;
  image: {
    src: StaticImageData;
    path: string;
  };
  link?: string;
  code_link?: string;
  stack: TStackItem[];
  year: number;
};

export const projects: TProject[] = [
  {
    name: "Alpa Studio",
    description:
      "The studio's personal website for obtaining potential clients and demonstrating the services offered. The site has various animations implemented " +
      "using third-party plugins and CSS",
    image: {
      src: alpaImage,
      path: "/projects/alpa.webp",
    },
    link: "https://alpa.studio",
    stack: [
      {
        name: "NextJS",
        link: "https://nextjs.org/",
      },
      {
        name: "SCSS",
        link: "https://sass-lang.com/",
      },
      {
        name: "Framer Motion",
        link: "https://www.framer.com/motion/",
      },
    ],
    year: 2023,
  },
  {
    name: "Yodiz School Personal Account",
    description:
      "User's personal account with web design courses. A course system with schedule and student progress statistics have been developed from scratch. Integrated with Wordpress",
    image: {
      src: yodizlkImage,
      path: "/projects/lk.webp",
    },
    stack: [
      {
        name: "WordPress",
        link: "https://wordpress.com/",
      },
      {
        name: "Vimeo",
        link: "https://vimeo.com/",
      },
    ],
    year: 2022,
  },
  {
    name: "Yodiz School Landing",
    description:
      "A landing page presenting a web design course. It is also possible to pay for the course directly from the website page through the payment system",
    image: {
      src: yodizImage,
      path: "/projects/dkdm.webp",
    },
    link: "https://yodizschool.ru/dkdm",
    stack: [
      {
        name: "SCSS",
        link: "https://sass-lang.com/",
      },
      {
        name: "Tiny Slider",
        link: "https://ganlanyuan.github.io/tiny-slider/",
      },
    ],
    year: 2022,
  },
];

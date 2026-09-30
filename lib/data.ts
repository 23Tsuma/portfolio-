import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiSupabase,
  SiFirebase,
  SiRedux,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiMui,
  SiPrisma,
  SiFlutter,
  SiHeroku,
  SiTailwindcss,
  SiDjango,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const skills = [

  {
    icon: SiJavascript,
    text: "JavaScript",
  },

  {
    icon: SiDjango,
    text: "Django",
  },
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiNextdotjs,
    text: "Next",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
  },

  
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  {
    icon: SiNodedotjs,
    text: "Node",
  },

  {
    icon: SiPython,
    text: "Python",
  },
  {
    icon: BiLogoPostgresql,
    text: "PostgreSQL",
  },
 
  {
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiDocker,
    text: "Docker",
  },


];

export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "ChemiChemi ya Ufanisi Website",
    description: "A youth empowerment Website",
    link: "https://github.com/",
  },
  {
    title: "Hospital Management Website",
    description: "Website for managing activities of a hospital",
    link: "https://github.com/",
  },
  {
    title: "My Blog",
    description: "An application about Leonard Tsuma ",
    link: "https://github.com/",
  },
 
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Swahilipot Hub",
    logo: "/company-logo.png",
    position: "Intern",
    description: "Internship as Tech student.",
    years: "May, 2024 - June, 2024",
  },
  {
    company: "Taita Taveta University",
    logo: "/company-logo.png",
    position: "Intern",
    description: "Intern as a Networking student.",
    years: "May, 2023 - June, 2024",
  },

  {
    company: "Taita Taveta University",
    logo: "/company-logo.png",
    position: "Student",
    description:
      "Currently pursuing Bachelor Of Science In Information Technology.",
    years: "Sep, 2021 - April, 2025",
  },
];

export const aboutYou = {
  name: "Leonard Tsuma",
  description:
    "👋 Hi, I'm Leonard Tsuma. Developer. I'm passionate about Web3,Artificial Intelligence,Django,React.",
  yearsOfExperience: "3 years",
  location: "Momabasa",
  email: "festusleonard996@gmail.com",
};

export const logoText = "@yourname";

export const marketingHeadlines = {
  mainHeadline: "Reach me out to hire me.",
  subHeadline: "Available anytime.",
};

export const websiteMetadata = {
  title: "Leonard Tsuma | MyBlog",
  description: "👋 Hey, There Welcome to my portflio/blog.",
};

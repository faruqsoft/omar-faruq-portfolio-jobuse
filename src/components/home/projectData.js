// src/data/projectData.js (or wherever you're importing from)
import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

const projectData = [
  {
    id: 1,
    title: "Newspaper Website – Fullstack",
    description:
      "A professional newspaper site with user/admin roles, article stats, premium access, and trending news.",
    images: [
      "/src/assets/newspaper/dashboard-overview.png",
      "/src/assets/newspaper/dashboard-page.png",
      "/src/assets/newspaper/subscribe.png",
    ],
    features: [
      "Dynamic articles with view count logic",
      "Admin dashboard (charts + control)",
      "Trending slider + publishers grid",
      "Premium article access control",
    ],
    link: "#",
    github: "https://github.com/yourgithub/newspaper",
    stack: [
      { name: "React", icon: FaReact },
      { name: "NodeJS", icon: FaNodeJs },
      { name: "ExpressJS", icon: SiExpress },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    id: 2,
    title: "Library Management System",
    description:
      "Manage book categories, borrow/return flow, search/filter, and track borrowed books securely.",
    images: [
      "/src/assets/library/Screenshot 2025-07-26 153031.png",
      "/src/assets/library/alluser.png",
      "/src/assets/library/Screenshot 2025-07-26 153155.png",
    ],
    features: [
      "Real-time book availability updates",
      "Borrow/return logic with quantity control",
      "Admin panel for book management",
      "JWT auth and protected routes",
    ],
    link: "https://library-ms.vercel.app",
    github: "https://github.com/yourgithub/library-management",
    stack: [
      { name: "React", icon: FaReact },
      { name: "NodeJS", icon: FaNodeJs },
      { name: "ExpressJS", icon: SiExpress },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    id: 3,
    title: "HobbyHub – MERN Stack Group Platform",
    description:
      "A full-stack app to create, join, and manage hobby-based communities with authentication and animations.",
    images: [
      "/src/assets/hobby/create group.png",
      "/src/assets/hobby/card.png",
      "/src/assets/hobby/dashboard-page.png",
    ],
    features: [
      "User authentication (JWT + Firebase)",
      "Group creation, joining, update, and deletion",
      "Animated UI with Framer Motion",
      "Dark/light mode toggle",
    ],
    link: "https://hobbyhub.vercel.app",
    github: "https://github.com/yourgithub/hobbyhub",
    stack: [
      { name: "React", icon: FaReact },
      { name: "NodeJS", icon: FaNodeJs },
      { name: "ExpressJS", icon: SiExpress },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
];

export default projectData;

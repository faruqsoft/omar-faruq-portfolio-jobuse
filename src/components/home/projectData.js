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
      "https://i.ibb.co/W4fTj4TP/dashboard-overview.png",
      "https://i.ibb.co/HDbnvRx6/subscribe.png",
      "https://i.ibb.co/Xf2bmH00/dashboard-page.png",
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
      "https://i.ibb.co/ynptMKCJ/alluser.png",
      "https://i.ibb.co/zTVN6z2R/Screenshot-2025-07-26-153031.png",
      "https://i.ibb.co/YBsCkP0c/Screenshot-2025-07-26-153155.png",
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
      "https://i.ibb.co/Xf2bmH00/dashboard-page.png",
      "https://i.ibb.co/zWGYkLxc/Screenshot-2025-07-28-180001.png",
      "https://i.ibb.co/0zBLrrd/create-group.png",
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

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import chocoImage from "@/public/choco.png";
import ExpenseImg from "@/public/expense tracker.png";
import AiPdfNoteTaker from "@/public/Screenshot 2025-01-23 175529.png";
import AiCodeReviewer from "@/public/aicodereviewer.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Rajkot, India",
    description:
      "During my college years, I learned HTML, CSS, and JavaScript to build a career in Web Development.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "React Developer",
    location: "Rajkot, India",
    description:
      "I worked with CLOUDGATE LLP to build a web application for their clients.I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
  },
  {
    title: "Full-Stack Developer",
    location: "Gujarat, India",
    description:
      "I worked as a freelancer for upskilling my skills and building my portfolio. I also upskilled to the full stack. ",
    icon: React.createElement(FaReact),
    date: "2025 - present",
  },
] as const;

export const projectsData = [
  {
    id: 1,
    title: "AI PDF Note Taker ",
    description: [
      "A web application for taking notes using AI.",
      "User can upload a PDF file and AI will generate notes for them.",
      "User can Ask questions to AI and get answers.",
      "Using langchain and Google Gemini API.",

    ],
    tags: ["Next.js", "Convex", "Tailwind", "Langchain", "Google Generative AI"],
    imageUrl: AiPdfNoteTaker,
    Github: "https://github.com/Narendra-Rajput003/ai-pdf-note-taker",
    Demo: "#",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description: [
      "A web application for managing personal expenses.",
      "Graph visualizations to track spending patterns.",
      "There are multiple expense categories like food, travel, entertainment, and more.",
      "There are multiple payment methods like cash, credit card, and debit card.",
      "User can add, edit, and delete expenses.",

    ],
    tags: ["React", "MongoDB", "Tailwind", "Node.js", "Express", "Apollo GraphQL"],
    imageUrl: ExpenseImg,
    Github: "https://github.com/Narendra-Rajput003/Expense-Tracker-App",
    Demo: "https://expense-tracker-app-egry.onrender.com",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Choco E-Commerce",
    description: [
      "An e-commerce platform for chocolate products.",
      "Admin Dashboard to manage products and orders.",
      "There are lots chocolate varieties.",
      "Crypto Payment Gateway for secure transactions.",

    ],
    tags: ["Next.js", "Drizzle ORM", "Tailwind", "Zustand","Next-Auth","Cryptomus"],
    imageUrl: chocoImage,
    Github: "https://github.com/Narendra-Rajput003/choco-quick-commerce",
    Demo: "#",
    category: "Full Stack",
  },
  {
    id:4,
    title:"AI CODE REVIEWER",
    description:[
      "A web application for reviewing code.",
      "User can paste a code file and AI will analyze it and give feedback.",
      "AI will give to suggestions to improve the code.",
    ],
    tags:["Next.js","Tailwind","GEMINI API","react-simple-code-editor","Prism"],
    imageUrl:AiCodeReviewer,
    Github:"https://github.com/Narendra-Rajput003/AI-Code-Reviewer-",
    Demo:"https://ai-code-reviewer-peach.vercel.app/",
    category:"Full Stack",
  }
] as const;
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
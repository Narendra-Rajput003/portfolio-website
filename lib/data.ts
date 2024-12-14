import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import freelancerImg from "@/public/freelancer.png";
import ExpenseImg from "@/public/expense tracker.png";
import StudyNotionImg from "@/public/studynotion.png";

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
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Front-End Developer",
    location: "Rajkot, India",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2026",
  },
  {
    title: "Full-Stack Developer",
    location: "Ahmedabad, India",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2026 - present",
  },
] as const;

export const projectsData = [
  {
    title: "StudyNotion",
    description:
      "StudyNotion is a platform for students buy courses and study materials.Instructors can create courses, upload study materials, and share them with students.",
    tags: ["React","MongoDB", "Tailwind", "Node.js", "Express"],
    imageUrl: StudyNotionImg,
  },
  {
    title: "Expense Tracker",
    description:
      "Expense Tracker is a public web app for tracking expenses . It has features like add expense , edit expense and delete expense.",
    tags: ["React","MongoDB", "Tailwind", "Node.js", "Express", "Apollo GraphQL"],
    imageUrl: ExpenseImg,
  },
  {
    title: "Eloquent Solutions",
    description:
      "At Eloquent Solutions, it specialize in transforming ideas into seamless digital experiences.",
    tags: ["React","MongoDB", "Tailwind", "Node.js", "Express" ,"Framer Motion"],
    imageUrl: freelancerImg,
  },
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
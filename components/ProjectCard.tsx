"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";

type ProjectCardProps = (typeof projectsData)[number];

export default function ProjectCard({
  id,
  title,
  imageUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-white/10 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <Image
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <Link
          href={`/projects/${id}`}
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
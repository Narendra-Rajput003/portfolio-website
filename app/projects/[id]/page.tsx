import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectDetails({ params }: { params: { id: string } }):Promise<any> {
  const { id } = params;
  const project = projectsData.find((project) => project.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/" // Redirect to the home page
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Project Image */}
        <div className="w-full h-auto rounded-lg overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={1200} // Set a large width to ensure high-quality display
            height={600} // Set a proportional height
            className="w-full h-auto object-contain" // Use object-contain to fit the image fully
          />
        </div>

        {/* Project Title */}
        <h1 className="text-3xl font-bold mt-6">{project.title}</h1>

        {/* Project Description */}
        <ul className="mt-4 list-disc list-inside">
          {project.description.map((point, index) => (
            <li key={index} className="mb-2">
              {point}
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Tech Stack</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 dark:bg-white/10 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub and Live Demo Buttons */}
        <div className="mt-6 flex gap-4">
          <Link
            href={project.Github}
            target="_blank"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            GitHub
          </Link>
          <Link
            href={project.Demo}
            target="_blank"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
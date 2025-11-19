import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string; // URL for the project
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Developed a full-stack e-commerce solution with user authentication, product catalog, and secure payment gateway integration.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    link: "https://example.com/ecommerce",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application enabling teams to organize, track, and complete projects efficiently.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    link: "https://example.com/tasks",
  },
  {
    id: 3,
    title: "AI-Powered Chatbot",
    description: "Built an intelligent chatbot using natural language processing (NLP) to provide customer support and answer queries.",
    tags: ["Python", "Flask", "OpenAI API", "React"],
    link: "https://example.com/chatbot",
  },
  {
    id: 4,
    title: "Portfolio Website (This one!)",
    description: "A responsive personal portfolio website showcasing various projects and technical skills, built with modern React practices.",
    tags: ["React", "Vite", "Tailwind CSS", "Lightswind UI"],
    link: "#", // Link to itself or live demo if separate
  },
  {
    id: 5,
    title: "Real-time Dashboard",
    description: "Interactive dashboard displaying real-time data visualizations from various sources, powered by WebSockets.",
    tags: ["Vue.js", "WebSockets", "D3.js", "Firebase"],
    link: "https://example.com/dashboard",
  },
  {
    id: 6,
    title: "Mobile Game Companion App",
    description: "A mobile-first web application designed to enhance the experience of a popular online game with stats and guides.",
    tags: ["React Native Web", "GraphQL", "Apollo Client"],
    link: "https://example.com/game-app",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">My Creative Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="px-3 py-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow text-gray-700 dark:text-gray-300">
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;

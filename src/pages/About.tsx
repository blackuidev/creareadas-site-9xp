import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">About Me</h1>
      <Card className="p-8 shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          Hi there! I'm John Doe, a dedicated full-stack developer with 5 years of experience in building
          robust and scalable web applications. My journey in web development began with a fascination
          for creating intuitive user interfaces and has evolved into a passion for architecting efficient
          backend systems. I thrive on challenges and constantly seek to learn new technologies to deliver
          high-quality solutions.
        </p>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          I specialize in crafting engaging user experiences and developing powerful backend APIs.
          When I'm not coding, you can find me exploring new hiking trails, diving into a good book,
          or contributing to open-source projects.
        </p>
        <Separator className="my-8 bg-gray-300 dark:bg-gray-600" />
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-3">
          <Badge variant="secondary" className="px-4 py-1 text-base">React.js</Badge>
          <Badge variant="secondary" className="px-4 py-1 text-base">TypeScript</Badge>
          <Badge variant="secondary" className="px-4 py-1 text-base">Node.js</Badge>
          <Badge variant="secondary" className="px-4 py-1 text-base">Express.js</Badge>
          <Badge variant="secondary" className="px-4 py-1 text-base">Python</Badge>
          <Badge variant="secondary" className="px-4 py-1 text-base">Django</Badge>
          <Badge variant="secondary" className="px-4 py-1 text-base">PostgreSQL</Badge>
          <Badge variant="secondary" className="px-4 py-1 text-base">MongoDB</Badge>
          <Badge variant="secondary" className="px-4 py-1 text-base">AWS</Badge>
          <Badge variant="secondary" className="px-4 py-1 text-base">Docker</Badge>
          <Badge variant="secondary" className="px-4 py-1 text-base">Tailwind CSS</Badge>
          <Badge variant="secondary" className="px-4 py-1 text-base">Git</Badge>
        </div>
      </Card>
    </div>
  );
};

export default About;

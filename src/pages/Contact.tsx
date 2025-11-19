import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">Get In Touch</h1>
      <Card className="max-w-xl mx-auto p-8 shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold text-gray-900 dark:text-white">Contact Me</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-lg text-gray-700 dark:text-gray-300">Name</Label>
              <Input id="name" type="text" placeholder="Your Full Name" className="mt-2 p-3 text-base" />
            </div>
            <div>
              <Label htmlFor="email" className="text-lg text-gray-700 dark:text-gray-300">Email</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" className="mt-2 p-3 text-base" />
            </div>
            <div>
              <Label htmlFor="subject" className="text-lg text-gray-700 dark:text-gray-300">Subject</Label>
              <Input id="subject" type="text" placeholder="Subject of your message" className="mt-2 p-3 text-base" />
            </div>
            <div>
              <Label htmlFor="message" className="text-lg text-gray-700 dark:text-gray-300">Message</Label>
              <Textarea id="message" placeholder="Type your message here..." rows={6} className="mt-2 p-3 text-base resize-y" />
            </div>
            <Button type="submit" className="w-full py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
              Send Message
            </Button>
          </form>
        </CardContent>
        <CardFooter className="pt-6 text-center text-gray-600 dark:text-gray-400">
              <p>I look forward to hearing from you!</p>
            </CardFooter>
      </Card>
    </div>
  );
};

export default Contact;

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Login = () => (
  <Card className="p-8 space-y-6 max-w-md mx-auto mt-10">
    <h1 className="text-3xl font-bold text-center">Login</h1>
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="email@example.com" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="********" />
    </div>
    <Button className="w-full">Sign In</Button>
  </Card>
);

export default Login;

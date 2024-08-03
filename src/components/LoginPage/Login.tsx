import { FC } from "react";
import { Card, CardContent, CardHeader } from "../ui/Card";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  return (
    <Card>
      <CardHeader>Log In</CardHeader>
      <CardContent>
        <form>
          <Label htmlFor="username">Username</Label>
          <Input id="username" />
          <Label htmlFor="password">Password</Label>
          <Input id="password" />
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;

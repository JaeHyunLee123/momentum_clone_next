import { FC } from "react";
import { Card, CardContent, CardHeader } from "../ui/Card";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";

interface SignupProps {}

const Signup: FC<SignupProps> = ({}) => {
  return (
    <Card>
      <CardHeader>Sign Up</CardHeader>
      <CardContent>
        <form>
          <Label htmlFor="username">Username</Label>
          <Input id="username" />
          <Label htmlFor="password">Password</Label>
          <Input id="password" />
          <Label htmlFor="passwordConfirmation">Password Confirmation</Label>
          <Input id="passwordConfirmation" />
        </form>
      </CardContent>
    </Card>
  );
};

export default Signup;

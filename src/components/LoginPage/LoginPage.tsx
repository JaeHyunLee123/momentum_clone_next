import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import Login from "./Login";
import Signup from "./Signup";

const login = "login";
const signup = "signup";

interface LoginPageProps {
  loginOrSignup?: typeof login | typeof signup;
}

const LoginPage: FC<LoginPageProps> = ({ loginOrSignup = login }) => {
  return (
    <Tabs defaultValue={loginOrSignup} className="w-[500px]">
      <TabsList>
        <TabsTrigger value={login}>Log In</TabsTrigger>
        <TabsTrigger value={signup}>Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value={login}>
        <Login />
      </TabsContent>
      <TabsContent value={signup}>
        <Signup />
      </TabsContent>
    </Tabs>
  );
};

export default LoginPage;

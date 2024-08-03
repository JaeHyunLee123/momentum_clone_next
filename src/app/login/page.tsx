import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sign } from "crypto";

const login = "login";
const signup = "signup";

interface LoginPageProps {
  loginOrSignup: typeof login | typeof signup;
}

export default function Login({ loginOrSignup = login }: LoginPageProps) {
  return (
    <div>
      <Tabs defaultValue="loginOrSignUp">
        <TabsList>
          <TabsTrigger value={login}>Log In</TabsTrigger>
          <TabsTrigger value={signup}>Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value={login}>Login</TabsContent>
        <TabsContent value={signup}>Singup</TabsContent>
      </Tabs>
    </div>
  );
}

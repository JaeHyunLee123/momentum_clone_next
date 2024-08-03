import Login from "@/components/Login";
import Signup from "@/components/Signup";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

const login = "login";
const signup = "signup";

interface LoginPageProps {
  loginOrSignup: typeof login | typeof signup;
}

export default function LoginPage({ loginOrSignup = login }: LoginPageProps) {
  return (
    <div>
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
    </div>
  );
}

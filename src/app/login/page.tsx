import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

const login = "login";
const signup = "signup";

interface LoginPageProps {
  loginOrSignup: typeof login | typeof signup;
}

export default function Login({ loginOrSignup = login }: LoginPageProps) {
  return (
    <div>
      <Tabs defaultValue={loginOrSignup} className="w-[500px]">
        <TabsList>
          <TabsTrigger value={login}>Log In</TabsTrigger>
          <TabsTrigger value={signup}>Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value={login}>
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
        </TabsContent>
        <TabsContent value={signup}>
          <Card>
            <CardHeader>Sign Up</CardHeader>
            <CardContent>
              <form>
                <Label htmlFor="username">Username</Label>
                <Input id="username" />
                <Label htmlFor="password">Password</Label>
                <Input id="password" />
                <Label htmlFor="passwordConfirmation">
                  Password Confirmation
                </Label>
                <Input id="passwordConfirmation" />
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

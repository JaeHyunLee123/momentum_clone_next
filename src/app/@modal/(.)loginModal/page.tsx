import { Modal } from "../modal";
import LoginPage from "@/components/LoginPage/LoginPage";

const login = "login";
const signup = "signup";

interface LoginPageProps {
  loginOrSignup: typeof login | typeof signup;
}

export default function Page({ loginOrSignup = login }: LoginPageProps) {
  return (
    <Modal>
      <LoginPage loginOrSignup={loginOrSignup} />
    </Modal>
  );
}

import Link from "next/link";
import { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="flex space-x-7">
      <Link href="/">home</Link>
      <Link href="/login">log in</Link>
    </header>
  );
};

export default Header;

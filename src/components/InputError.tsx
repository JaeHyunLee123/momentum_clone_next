import { FC } from "react";

interface InputErrorProps {
  children: React.ReactNode;
}

const InputError: FC<InputErrorProps> = ({ children }) => {
  return <span className="text-red-500 text-xs">{children}</span>;
};

export default InputError;

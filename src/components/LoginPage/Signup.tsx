"use client";

import { FC } from "react";
import { Card, CardContent, CardHeader } from "../ui/Card";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/Button";
import InputError from "../InputError";
import { useMutation } from "@tanstack/react-query";
import { postSignUp } from "@/app/action/signup";

interface SignupProps {}

interface SignupForm {
  username: string;
  password: string;
  passwordConfirmation: string;
}

const Signup: FC<SignupProps> = ({}) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignupForm>({ mode: "onBlur" });

  const {
    data,
    isPending,
    mutate: server_postSignup,
  } = useMutation({ mutationFn: postSignUp });

  const onSubmit: SubmitHandler<SignupForm> = (form) => {
    const { username, password } = form;
    server_postSignup({ username, password });
  };

  return (
    <Card>
      <CardHeader>Sign Up</CardHeader>
      <CardContent>
        <form
          className="flex flex-col space-y-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            {...register("username", {
              required: "Should submit username",
              maxLength: {
                value: 20,
                message: "Maximum username legnth is 20",
              },
            })}
          />
          <InputError>{errors.username?.message}</InputError>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            {...register("password", {
              required: "Should submit password",
              minLength: {
                value: 10,
                message: "Minimum password length is 10",
              },
            })}
          />
          <InputError>{errors.password?.message}</InputError>
          <Label htmlFor="passwordConfirmation">Password Confirmation</Label>
          <Input
            id="passwordConfirmation"
            type="password"
            {...register("passwordConfirmation", {
              validate: (value) => {
                const { password } = getValues();
                return value === password || "Passwords should match";
              },
            })}
          />
          <InputError>{errors.passwordConfirmation?.message}</InputError>
          <div className="flex justify-center">
            <Button type="submit" className="w-[40%]">
              Submit
            </Button>
          </div>
        </form>
        {isPending ? <span>Submiting...</span> : ""}
      </CardContent>
    </Card>
  );
};

export default Signup;

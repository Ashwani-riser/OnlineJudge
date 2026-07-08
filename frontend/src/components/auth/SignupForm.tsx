"use client";
import axios from "axios";
import { toast } from "sonner";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

import { signupSchema, type SignupFormValues } from "@/lib/validations/signup.schema";
import { authService } from "@/services/auth.service";

import AuthCard from "./AuthCard";
import AuthHeader from "./AuthHeader";
import PasswordInput from "./PasswordInput";
import SignupSuccess from "./SignupSuccess";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignupForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: SignupFormValues) => {
  try {
    setLoading(true);

    const response = await authService.signup({
      username: values.username,
      email: values.email,
      password: values.password,
    });

    toast.success(response.message);

    setSuccess(true);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(
        error.response?.data?.message ?? "Something went wrong"
      );
    } else {
      toast.error("Something went wrong");
    }
  } finally {
    setLoading(false);
  }
};

  if (success) {
    return <SignupSuccess />;
  }

  return (
    <AuthCard>
      <AuthHeader
        title="Create your account"
        subtitle="Start your competitive programming journey."
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-5"
      >
        {/* Username */}
        <div className="space-y-2">
          <Label htmlFor="username">
            Username
          </Label>

          <Input
            id="username"
            placeholder="ashwani"
            {...register("username")}
          />

          {errors.username && (
            <p className="text-sm text-red-500">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">
            Email
          </Label>

          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
          />

          {errors.email && (
            <p className="text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password">
            Password
          </Label>

          <PasswordInput
            id="password"
            placeholder="Enter password"
            {...register("password")}
          />

          {errors.password && (
            <p className="text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">
            Confirm Password
          </Label>

          <PasswordInput
            id="confirmPassword"
            placeholder="Confirm password"
            {...register("confirmPassword")}
          />

          {errors.confirmPassword && (
            <p className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating Account...
            </>
          ) : (
            "Create Account"
          )}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-primary hover:underline"
          >
            Sign In
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthCard from "./AuthCard";
import AuthHeader from "./AuthHeader";
import PasswordInput from "./PasswordInput";

import {
  loginSchema,
  type LoginFormValues,
} from "@/lib/validations/auth";

import { authService } from "@/services/auth.service";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);

    try {
      const response = await authService.login(data);

      toast.success(response.message);

      router.push("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message ??
            "Login failed. Please try again."
        );
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard>
      <AuthHeader
        title="Welcome Back"
        subtitle="Login to continue your coding journey."
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            {...register("email")}
            className="h-11 w-full rounded-xl border border-border bg-background/60 px-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />

          {errors.email && (
            <p className="text-sm text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium"
          >
            Password
          </label>

          <PasswordInput
            id="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            {...register("password")}
            error={errors.password?.message}
          />
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-border"
            />
            Remember me
          </label>

          <Link
            href="/forgot-password"
            className="text-sm text-primary hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <Button
          type="submit"
          className="h-11 w-full"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </Button>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-primary hover:underline"
          >
            Create one
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
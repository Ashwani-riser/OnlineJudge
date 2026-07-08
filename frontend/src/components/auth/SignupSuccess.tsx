"use client";

import Link from "next/link";
import { MailCheck } from "lucide-react";

import AuthCard from "./AuthCard";
import { Button } from "@/components/ui/button";

export default function SignupSuccess() {
  return (
    <AuthCard>
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <MailCheck className="h-10 w-10 text-primary" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold">
            Check your email
          </h1>

          <p className="text-sm text-muted-foreground">
            We've sent a verification link to your email address.
            Please verify your account before logging in.
          </p>
        </div>

        <Button  className="w-full">
          <Link href="/login">
            Open Login
          </Link>
        </Button>

        <p className="text-xs text-muted-foreground">
          Didn't receive the email? You can resend the verification
          email from the login page.
        </p>
      </div>
    </AuthCard>
  );
}
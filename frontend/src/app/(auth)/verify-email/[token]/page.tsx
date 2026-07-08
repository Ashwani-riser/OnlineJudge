"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Loader2, MailCheck, CircleX } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

import { authService } from "@/services/auth.service";
import { AuthCard } from "@/components/auth";
import { Button } from "@/components/ui/button";

export default function VerifyEmailPage() {
  const router = useRouter();
  const params = useParams();

  const token = params.token as string;

  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await authService.verifyEmail(token);

        toast.success(response.message);

        setVerified(true);

        setTimeout(() => {
          router.replace("/login");
        }, 2000);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(
            error.response?.data?.message ??
              "Verification failed"
          );
        } else {
          toast.error("Verification failed");
        }
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      verifyEmail();
    }
  }, [router, token]);

  return (
    <AuthCard>
      <div className="flex flex-col items-center text-center space-y-6">
        {loading ? (
          <>
            <Loader2 className="h-12 w-12 animate-spin text-primary" />

            <div>
              <h2 className="text-2xl font-bold">
                Verifying your email
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Please wait while we verify your account...
              </p>
            </div>
          </>
        ) : verified ? (
          <>
            <MailCheck className="h-12 w-12 text-green-500" />

            <div>
              <h2 className="text-2xl font-bold">
                Email Verified
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Your account has been verified successfully.
                Redirecting to login...
              </p>
            </div>
          </>
        ) : (
          <>
            <CircleX className="h-12 w-12 text-red-500" />

            <div>
              <h2 className="text-2xl font-bold">
                Verification Failed
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Your verification link is invalid or has expired.
              </p>
            </div>

            <Button onClick={() => router.push("/login")}>
              Back to Login
            </Button>
          </>
        )}
      </div>
    </AuthCard>
  );
}
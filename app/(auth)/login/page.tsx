import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-9rem)] flex items-center justify-center px-4">
      {/* CARD */}
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl border bg-card shadow-lg md:grid md:grid-cols-2">
        {/* IMAGE SIDE */}
        <div className="relative hidden md:block">
          <Image
            src="/loginBg.png"
            alt="Login background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h2 className="text-2xl font-bold">Welcome back 👋</h2>
            <p className="text-sm opacity-90">
              Log in to continue your delicious journey.
            </p>
          </div>
        </div>

        {/* FORM SIDE */}
        <div className="flex flex-col justify-center p-8 sm:p-10 md:p-12">
          <h1 className="mb-2 text-2xl font-bold xl:text-3xl">Sign in</h1>
          <p className="mb-8 text-sm text-muted-foreground">
            Log into your account or continue with a social provider.
          </p>

          <div className="flex flex-col gap-3">
            <Button
              variant="outline"
              className="flex items-center gap-3 justify-center"
            >
              <Image
                src="/google.png"
                alt="Google"
                width={18}
                height={18}
                className="object-contain"
              />
              Continue with Google
            </Button>

            <Button
              variant="outline"
              className="flex items-center gap-3 justify-center"
            >
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={18}
                height={18}
                className="object-contain"
              />
              Continue with Facebook
            </Button>
          </div>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px w-full bg-border" />
            OR
            <div className="h-px w-full bg-border" />
          </div>

          <p className="text-sm text-muted-foreground">
            Having trouble?{" "}
            <Link href="/" className="font-medium underline underline-offset-4">
              Contact support
            </Link>
          </p>

          <p className="mt-6 text-xs text-muted-foreground">
            By continuing, you agree to our{" "}
            <span className="underline underline-offset-4 cursor-pointer">
              Terms
            </span>{" "}
            and{" "}
            <span className="underline underline-offset-4 cursor-pointer">
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

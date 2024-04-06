"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Login() {
  const [authState, setAuthStata] = useState<AuthStateType>({
    email: "",
    password: "",
  });

  const submit = () => {
    console.log("The auth state is ", authState);
  };

  return (
    <div className="bg-background">
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-full md:w-1/3 mx-2 bg-muted p-6 rounded-lg">
          <div className="flex justify-center ">
            <Image src="/Images/logo.svg" width={50} height={50} alt="Logo" />
          </div>
          <h1 className="text-2xl font-bold"> Login</h1>
          <p> Welcome Back</p>
          <form onSubmit={submit}>
            <div className="mt-5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                onChange={(e) =>
                  setAuthStata({ ...authState, email: e.target.value })
                }
              />
            </div>

            <div className="mt-5">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                onChange={(e) =>
                  setAuthStata({ ...authState, password: e.target.value })
                }
              />
            </div>
            <div className="mt-5">
              <button
                className="w-full bg-primary text-primary-foreground p-3 rounded-lg"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-5">
            <span> Don't have an account?</span>
            <Link href="/register" className="text-orange-400 font-bold">
              {" "}
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

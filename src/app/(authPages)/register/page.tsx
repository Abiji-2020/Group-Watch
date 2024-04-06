"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Register() {
  const [authState, setAuthStata] = useState<AuthStateType>({
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const submit = (event : React.FormEvent) => {
    console.log("The auth state is ", authState);
    event.preventDefault();
  };

  return (
    <div className="bg-background">
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-full md:w-1/3 mx-2 bg-muted p-6 rounded-lg">
          <div className="flex justify-center ">
            <Image src="/Images/logo.svg" width={50} height={50} alt="Logo" />
          </div>
          <h1 className="text-2xl font-bold"> Register</h1>
          <p> Welcome To Threads</p>
          <form onSubmit={submit}>
            <div className="mt-5">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="Enter your name"
                onChange={(e) =>
                  setAuthStata({ ...authState, name: e.target.value })
                }
              />
            </div>
            <div className="mt-5">
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                placeholder="Enter your username"
                onChange={(e) =>
                  setAuthStata({ ...authState, username: e.target.value })
                }
              />
            </div>
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
              <Label htmlFor="cpassword">Confirm Password</Label>
              <Input
                type="password"
                id="cpassword"
                placeholder="Enter your confirm password"
                onChange={(e) =>
                  setAuthStata({ ...authState, password_confirmation: e.target.value })
                }
              />
            </div>


            <div className="mt-5">
              <button
                className="w-full bg-primary text-primary-foreground p-3 rounded-lg"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-5">
            <span> Already Have an account?</span>
            <Link href="/login" className="text-orange-400 font-bold">
              {" "}
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

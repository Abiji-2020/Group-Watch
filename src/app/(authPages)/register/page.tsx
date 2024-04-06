import React from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Register() {
  return (
    <div className="bg-background">
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-full md:w-1/3 mx-2 bg-muted p-6 rounded-lg">
          <div className="flex justify-center ">
            <Image src="/Images/logo.svg" width={50} height={50} alt="Logo" />
          </div>
          <h1 className="text-2xl font-bold"> Register</h1>
          <p> Welcome To Threads</p>

          <div className="mt-5">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Enter your Name" />
          </div>

          <div className="mt-5">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mt-5">
            <button className="w-full bg-primary text-primary-foreground p-3 rounded-lg">
              Login
            </button>
          </div>
          <div className="mt-5">
            <span> Don't have an account?</span>
            <Link href='/register' className="text-orange-400 font-bold"> Register</Link>
            </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import axios from "axios";
import {useRouter} from 'next/navigation'

export default function Register() {



  const router = useRouter();


  const [authState, setAuthStata] = useState<AuthStateType>({
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState<AuthErrorType>({});
  const [loading, setLoading] = useState<boolean>(false);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);
    axios
      .post("/api/auth/register", authState)
      .then((res) => {
        setLoading(false);
        const response = res.data;

        if (response.status === 200) {

          router.push('/login?message=${response.message}')

        } else if (response.status === 400) {
          setErrors(response.errors);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("The error is ", err);
      });
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
              <span className="text-red-400">{errors?.name}</span>
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
              <span className="text-red-400">{errors?.username}</span>
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
              <span className="text-red-400">{errors?.email}</span>
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
              <span className="text-red-400">{errors?.password}</span>  
            </div>

            <div className="mt-5">
              <Label htmlFor="cpassword">Confirm Password</Label>
              <Input
                type="password"
                id="cpassword"
                placeholder="Enter your confirm password"
                onChange={(e) =>
                  setAuthStata({
                    ...authState,
                    password_confirmation: e.target.value,
                  })
                }
              />
              <span className="text-red-400">{errors?.password_confirmation}</span>
            </div>

            <div className="mt-5">
              <button className="w-full bg-primary text-primary-foreground p-3 rounded-lg"
              disabled={loading}>
                {loading ? "Processing..." : "Register"}
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

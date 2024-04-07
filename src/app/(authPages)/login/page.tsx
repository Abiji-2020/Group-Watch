"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
export default function Login() {
  const params = useSearchParams();
  const router = useRouter();
  const { status } = useSession();

  const [authState, setAuthStata] = useState<AuthStateType>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<AuthErrorType>({});
  const [loading, setLoading] = useState<boolean>(false);


  useEffect(()=>{
    if (status === "authenticated") {
    router.push("/");
    }
  },[status])
  const submit = (event: React.FormEvent) => {
    axios
      .post("/api/auth/login", authState)
      .then((res) => {
        setLoading(false);
        const response = res.data;
        if (response.status === 200) {
          signIn("credentials", {
            email: authState.email,
            password: authState.password,
            callbackUrl: "/",
            redirect: true,
          });
        } else if (response.status === 400) {
          setErrors(response.errors);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("The error is ", err);
      });
    event.preventDefault();
  };

  return (
    <div className="bg-background">
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-full md:w-1/3 mx-2 bg-muted p-6 rounded-lg">
          <div className="flex justify-center ">
            <Image src="/Images/logo.svg" width={50} height={50} alt="Logo" />
          </div>

          {params.get("message") ? (
            <div className="bg-green-500 p-3 round-lg my-4">
              <strong>Success!</strong>
              {params.get("message")}
            </div>
          ) : (
            <></>
          )}

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
              <span className="text-red-500">{errors?.email}</span>
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
              <span className="text-red-500">{errors?.password}</span>
            </div>
            <div className="mt-5">
              <button
                className="w-full bg-primary text-primary-foreground p-3 rounded-lg"
                disabled={loading}
              >
                {loading ? "Processing..." : "Login"}
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

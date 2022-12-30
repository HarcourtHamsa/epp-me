import Link from "next/link";
import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { InputTypeStrings } from "../types";
import Head from "next/head";

const radialBg = {
  image: require("../assets/images/circular-pattern.png"),
};

function login() {
  return (
    <>
      <Head>
        <title>Login | Epp-me</title>
      </Head>

      <div className="grid grid-cols-1 xl:grid-cols-2 xl:h-screen gap-4">
        <div className="flex-1 bg-purple-700 relative overflow-hidden">
          <Image
            src={radialBg.image}
            alt=""
            className="absolute -bottom-2/4 -left-2/4 opacity-25"
          />
        </div>

        <div className="w-5/6 m-auto mt-10 md:w-3/5 sm:w-2/5">
          <p className="text-sm mb-12 flex justify-end">
            Don&apos;t have an account?
            <Link href={"/account"} className="text-purple-700 pl-1">
              {"  "}
              Get Started
            </Link>
          </p>
          <h2 className="text-xl md:text-3xl font-medium">Welcome back</h2>
          <p className="text-xs mt-2 text-gray-500">
            Sign into your account to continue
          </p>

          <form className="mt-8 flex flex-col gap-6">
            <Input
              placeholder="Enter email address"
              type={InputTypeStrings.email}
              label="Email address"
            />

            <div className=" flex-1">
              <Link
                href={"/"}
                className="text-xs text-purple-700 flex justify-end -mb-5"
              >
                Fogort Password?
              </Link>
              <Input
                placeholder="Enter your password"
                type={InputTypeStrings.password}
                label="Password"
              />
            </div>
            <Button label="Log in to your account" />
            <Link
              href={"/"}
              className="px-4 h-12 flex items-center justify-center rounded-md text-sm w-full shadow-sm border"
            >
              Continue with Google
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default login;

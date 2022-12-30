import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { InputTypeStrings } from "../types";

const radialBg = {
  image: require("../assets/images/circular-pattern.png"),
};

function CreateAccount() {
  return (
    <>
      <Head>
        <title>Create Account | Epp-me</title>
      </Head>

      <div className="grid grid-cols-1 xl:grid-cols-2 xl:h-screen gap-4">
        <div className="flex-1 bg-purple-700 relative overflow-hidden">
          <Image
            src={radialBg.image}
            alt=""
            className="absolute -bottom-2/4 -left-2/4 opacity-25"
          />
        </div>

        <div className="w-5/6 m-auto mt-10 md:w-3/5 sm:w-2/5 pb-24">
          <p className="text-sm mb-12 flex justify-end">
            Already have an account?
            <Link href={"/"} className="text-purple-600">
              {" "}
              Sign in
            </Link>
          </p>
          <h2 className="text-xl md:text-3xl font-medium">
            Create a new account
          </h2>
          <p className="text-xs mt-2 text-gray-500">
            Enter your details to get started
          </p>

          <form className="mt-8 flex flex-col gap-6">
            <Input
              placeholder="Enter your given name"
              type={InputTypeStrings.text}
              label="First name"
            />
            <Input
              placeholder="Enter your surname"
              type={InputTypeStrings.text}
              label="Last Name"
            />
            <Input
              placeholder="Enter email address"
              type={InputTypeStrings.email}
              label="Email address"
            />

            <div className=" flex-1">
              <Input
                placeholder="Enter your password"
                type={InputTypeStrings.password}
                label="Password"
              />
            </div>
            <Button label="Create account" />
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;

import React from "react";
import { Link } from "react-router-dom";
import { GiDrippingHoney } from "react-icons/gi";
import { Button, Label, TextInput } from "flowbite-react";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-xl mx-auto flex-col gap-8">
        <div className="flex flex-col justify-center gap-1">
          <Link
            to="/"
            className="self-center whitespace-nowrap text-4xl font-semibold"
          >
            BLOG
            <span className="px-3 py-1 rounded-lg bg-gradient-to-tr  from-yellow-300  to-orange-400   text-white ">
              Hive
              <GiDrippingHoney className=" inline mx-1" />
            </span>
          </Link>
          <p className="text-sm text-center mt-5">
            Welcome to my blog website. You can proceed by signing up with your
            email & password or by using Google accounts.
          </p>
        </div>
        {/* Lower div */}
        <div className="">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Enter username"
                id="username"
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="abc@company.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Enter password"
                id="password"
              />
            </div>
            <Button gradientDuoTone="pinkToOrange" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-3">
            <span>Already have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

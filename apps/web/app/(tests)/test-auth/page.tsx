"use client";

import React from "react";
import { authClient } from "../../../lib/auth-client";

const TestAuth = () => {
  const signIn = async () => {
    await authClient.signUp.email({
      email: "mgmg@gmail.com",
      password: "123123123",
      name: "mgmg",
      callbackURL: "/",
      fetchOptions: {
        onSuccess: () => {
          alert("register success");
        },
      },
    });
  };
  return (
    <React.Fragment>
      <main className="">
        <button type="button" onClick={signIn}>
          Sign Up
        </button>
      </main>
    </React.Fragment>
  );
};

export default TestAuth;

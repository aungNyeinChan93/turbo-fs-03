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

  const { data: session } = authClient.useSession();
  return (
    <React.Fragment>
      <main className="">
        <button type="button" onClick={signIn}>
          Sign Up
        </button>
        <pre>{JSON.stringify(session?.user)}</pre>
      </main>
    </React.Fragment>
  );
};

export default TestAuth;

"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md text-center w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Sign in to your account
        </h2>
        <button
          className="mb-2 w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => signIn("google")}
        >
          Sign in with Google
        </button>
        <button
          className="mb-2 w-full py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-900"
          onClick={() => signIn("github")}
        >
          Sign in with GitHub
        </button>
        <button
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => signIn("facebook")}
        >
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
}

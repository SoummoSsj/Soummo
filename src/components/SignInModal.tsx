"use client";

import { signIn } from "next-auth/react";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SignInModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-80 text-center relative">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 dark:hover:text-white"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-semibold mb-6 text-gray-800 dark:text-white">
          Sign in to continue
        </h2>

        {/* Google Sign In */}
        <button
          onClick={() => signIn("google")}
          className="flex items-center justify-center gap-3 w-full px-4 py-2 mb-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
        >
         <img
  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
  alt="Google logo"
  className="w-5 h-5"
/>

          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Sign in with Google
          </span>
        </button>

        {/* GitHub Sign In */}
        <button
          onClick={() => signIn("github")}
          className="flex items-center justify-center gap-3 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-900 hover:bg-gray-800 transition"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub logo"
            className="w-5 h-5 bg-white rounded-full"
          />
          <span className="text-sm font-medium text-white">
            Sign in with GitHub
          </span>
        </button>
      </div>
    </div>
  );
}

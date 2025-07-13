// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const toggleTheme = () => setTheme(currentTheme === "dark" ? "light" : "dark");

  return (
    <nav className="flex items-center justify-between max-w-9xl mx-auto px-4 py-4 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white shadow-md">
      <div className="text-2xl font-MyFont tracking-tight">Soummo</div>

      <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700 dark:text-gray-200 text-sm">
        <li><Link href="#home" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
        <li><Link href="#cv" className="hover:text-blue-600 dark:hover:text-blue-400">CV</Link></li>
        <li><Link href="#message" className="hover:text-blue-600 dark:hover:text-blue-400">Message</Link></li>
        <li><Link href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
      </ul>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle Theme"
        >
          {currentTheme === "dark" ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
        </button>

        {session ? (
          <div className="relative">
            <img
              src={session.user?.image ?? "/default-avatar.png"}
              alt="profile"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded shadow-lg z-50">
                <div className="px-4 py-2 text-sm border-b border-gray-200 dark:border-gray-600">
                  Signed in as <br />
                  <strong>{session.user?.email}</strong>
                </div>
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    signOut();
                  }}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Sign out
                </button>
                <button
                  onClick={() => alert("Delete account functionality coming soon.")}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-red-100 dark:hover:bg-red-700 text-red-500"
                >
                  Delete Account
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => signIn()}
            className="p-2 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            Sign In
          </button>
        )}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 md:hidden shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4 font-medium text-gray-700 dark:text-gray-200">
            <li><Link href="#home" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="#cv" onClick={() => setMenuOpen(false)}>CV</Link></li>
            <li><Link href="#message" onClick={() => setMenuOpen(false)}>Message</Link></li>
            <li><Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

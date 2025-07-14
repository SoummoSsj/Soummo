"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import SignInModal from "./SignInModal"; // ⬅️ import modal

export default function Navbar() {
  const { data: session } = useSession();
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false); // ⬅️ modal state

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const toggleTheme = () =>
    setTheme(currentTheme === "dark" ? "light" : "dark");

  return (
    <>
      <nav className="flex items-center justify-between max-w-9xl mx-auto px-4 py-4 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white shadow-md">
        <div className="text-2xl font-MyFont text-gray-900 dark:text-white tracking-tight">Soummo</div>

        <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700 dark:text-gray-200 text-sm">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#cv">CV</Link></li>
          <li><Link href="#message">Message</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>

        <div className="flex items-center gap-3 md:gap-4">
          <button onClick={toggleTheme} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition" aria-label="Toggle Dark Mode">
            {currentTheme === "dark" ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
          </button>

          {session ? (
            <button onClick={() => signOut()} className="p-2 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">Sign Out</button>
          ) : (
            <button onClick={() => setShowSignIn(true)} className="p-2 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">Sign In</button>
          )}

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition" aria-label="Toggle Menu">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

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

      <SignInModal open={showSignIn} onClose={() => setShowSignIn(false)} />
    </>
  );
}

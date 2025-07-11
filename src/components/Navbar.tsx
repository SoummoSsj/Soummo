// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const toggleTheme = () =>
    setTheme(currentTheme === "dark" ? "light" : "dark");

  return (
    <nav className="flex items-center justify-between max-w-5xl mx-auto px-4 py-4">
      <div className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
        MyPortfolio
      </div>

      <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700 dark:text-gray-200 text-sm">
        <li><Link href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link></li>
        <li><Link href="#cv" className="hover:text-blue-600 dark:hover:text-blue-400 transition">CV</Link></li>
        <li><Link href="#message" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Message</Link></li>
        <li><Link href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</Link></li>
      </ul>

      <div className="flex items-center gap-3 md:gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle Dark Mode"
        >
          {currentTheme === "dark" ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-800" />
          )}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle Menu"
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

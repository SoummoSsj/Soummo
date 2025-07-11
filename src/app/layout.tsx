// src/app/layout.tsx
import "./globals.css";
import { MyThemeProvider } from "../theme/theme-provider";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "My Portfolio",
  description: "Modern portfolio built with Next.js and Tailwind",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} font-sans bg-gradient-to-br from-gray-50 to-gray-100 dark:from-oklch-dark dark:to-black text-gray-900 dark:text-gray-100 transition-colors duration-300 scroll-smooth`}
      >
        <MyThemeProvider>
          <header className="sticky top-0 z-50 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700">
            {/* Navbar will be inserted dynamically */}
          </header>

          <main className="relative z-10">
            <div className="mx-auto max-w-5xl px-4 py-12">
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 shadow-lg backdrop-blur-md">
                {children}
              </div>
            </div>
          </main>

          <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </footer>
        </MyThemeProvider>
      </body>
    </html>
  );
}
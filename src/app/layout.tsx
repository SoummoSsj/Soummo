// src/app/layout.tsx
import "./globals.css";
import { MyThemeProvider } from "../theme/theme-provider";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Providers } from "./providers";

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
       <Providers>
            {/* Navbar will be inserted dynamically */}

          <main className="relative z-10">
              <div className="xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 shadow-lg backdrop-blur-md">
                {children}
              </div>
          </main>

          <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </footer>
       </Providers>
      </body>
    </html>
  );
}
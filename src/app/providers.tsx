// src/components/Providers.tsx
"use client";

import { SessionProvider } from "next-auth/react";
import { MyThemeProvider } from "../theme/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <MyThemeProvider>{children}</MyThemeProvider>
    </SessionProvider>
  );
}

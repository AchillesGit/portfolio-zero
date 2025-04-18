"use client";

import { SessionProvider } from "next-auth/react";
import { type ReactNode } from "react";

/**
 * Provides the authentication session context to client components.
 * Must wrap only client-side parts of the app.
 */
export default function AuthProvider({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

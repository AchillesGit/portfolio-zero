// src/server/auth/[...nextauth].ts
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Anmelden mit Zugangsdaten",
      credentials: {
        email: { label: "E-Mail", type: "text" },
        password: { label: "Passwort", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials!;
        if (email === "test@example.com" && password === "password123") {
          console.log("Anmeldung erfolgreich:", email);

          return { id: "1", name: "Testbenutzer", email };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signIn",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

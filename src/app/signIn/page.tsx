"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

/**
 * Benutzerdefinierte Anmeldeseite mit Zugangsdaten (E-Mail & Passwort) im Dark Mode.
 */
export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const searchParams = useSearchParams();
  const error = searchParams?.get("error") ?? null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex grow items-center justify-center px-4 text-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl bg-gray-800 p-6 shadow-xl"
      >
        <h1 className="mb-6 text-center text-2xl font-bold">Anmeldung</h1>

        {error && (
          <p className="mb-4 text-sm text-red-400">
            Anmeldung fehlgeschlagen. Bitte überprüfe deine Zugangsdaten.
          </p>
        )}

        <label className="mb-2 block text-sm font-medium text-gray-300">
          E-Mail
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </label>

        <label className="mb-4 block text-sm font-medium text-gray-300">
          Passwort
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700"
        >
          Anmelden
        </button>
      </form>
    </div>
  );
}

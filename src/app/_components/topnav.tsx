"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function TopNav() {
  const { data: session } = useSession();

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div>
        {session ? (
          <button type="button" onClick={() => signOut()}>
            Abmelden
          </button>
        ) : (
          <Link href="/signIn">Anmelden</Link>
        )}
      </div>
    </nav>
  );
}

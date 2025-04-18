import { getServerSession } from "next-auth";
import Images from "./_components/images";
import { authOptions } from "~/server/db/auth/[...nextauth]";

/**
 * Homepage for logged-in users only.
 */
export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      {!session && (
        <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">Bitte anmelden</h1>
          <p className="mt-4">
            Sie sind nicht angemeldet. Bitte melden Sie sich an.
          </p>
        </div>
      )}
      {session && <Images />}
    </main>
  );
}

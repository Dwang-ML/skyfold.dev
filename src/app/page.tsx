// app/page.tsx

// Imports
import Head from "next/head";
import Link from "next/link";
import prisma from "../lib/prisma";

// Home Page Component
export default async function HomePage() {
  const data = await prisma.user_infos.findMany();
  return (
    <>
      <Head>
        <title>Skyfold</title>
        <meta
          name="description"
          content="Skyfold is a game developed by DwangML."
        />
      </Head>

      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Skyfold</h1>

        <ul>
          notes
        </ul>

        <pre>
          {JSON.stringify(
            data,
            (key, value) => (typeof value === "bigint" ? value.toString() : value),
            2
          )}
        </pre>

        <Link href="/account">
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
            Go to Account
          </button>
        </Link>
      </main>
    </>
  );
}

import Image from "next/image";
import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-discord-dark text-white flex flex-col items-center justify-center">
      <header className="w-full p-4 bg-discord-dark-light flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold text-discord-blurple">Michibot</h1>
        {session ? (
          <div className="flex items-center gap-4">
            {session.user?.image && (
              <Image
                src={session.user.image}
                alt="User avatar"
                width={38}
                height={38}
                className="rounded-full"
              />
            )}
            <button
              className="bg-discord-red text-white px-4 py-2 rounded-md hover:bg-opacity-90"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            className="bg-discord-green text-white px-4 py-2 rounded-md hover:bg-opacity-90"
            onClick={() => signIn("discord")}
          >
            Sign In
          </button>
        )}
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center">
        {session ? (
          <>
            <h2 className="text-2xl font-semibold">Welcome, {session.user?.name}!</h2>
            <p className="text-discord-gray mt-2">Glad to see you here. Explore and enjoy!</p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold">Not signed in</h2>
            <p className="text-discord-gray mt-2">Sign in to access exclusive features.</p>
          </>
        )}
      </main>

      <footer className="w-full p-4 bg-discord-dark-light text-center text-sm text-discord-gray">
        © 2024 Michibot. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
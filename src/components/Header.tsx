import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
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
  );
};

export default Header;

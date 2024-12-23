import React from 'react';
import Image from 'next/image';

const DiscordInvite = () => {
  const inviteLink =
    'https://discord.com/oauth2/authorize?client_id=1303130781580918954&permissions=8&integration_type=0&scope=bot';

  return (
    <div className="bg-discord-dark-light text-foreground max-w-md mx-auto my-10 p-6 rounded-lg shadow-lg">
      <div className="flex justify-center pb-5">
        <Image
          src={'/thebiter.png'}
          alt="User avatar"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <h2 className="text-2xl font-bold text-white flex items-center justify-center">
        Michibot
        <span className="ml-2 bg-discord-blurple text-white text-xs font-semibold px-2 py-1 rounded">
          APP
        </span>
      </h2>
      <p className="text-discord-gray mt-2 text-center">
        Añade a Michibot a tu servidor de Discord y accede a todas sus
        funcionalidades.
      </p>

      {/* Lista de permisos */}
      <ul className="mt-4 space-y-2 text-sm text-foreground">
        <li className="flex items-center">
          ✅ <span className="ml-2">Añadir un bot a un servidor</span>
        </li>
        <li className="flex items-center">
          ✅ <span className="ml-2">Crear comandos</span>
        </li>
        <li className="flex items-center">
          ❌{' '}
          <span className="ml-2 text-discord-gray">
            Tener una crisis existencial
          </span>
        </li>
      </ul>

      <div className="mt-6 text-center">
        <a
          href={inviteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-discord-blurple hover:bg-discord-blurple/90 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300"
        >
          Invitar al servidor
        </a>
      </div>
    </div>
  );
};

export default DiscordInvite;

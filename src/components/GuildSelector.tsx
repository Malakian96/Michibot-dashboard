import { Channel, Guild } from "./Main";

interface GuildSelectorProps {
  guilds: Guild[];
  selectedGuild: string;
  setSelectedGuild: (guild: string) => void;
  setChannels: (channels: Channel[]) => void;
}

const GuildSelector = ({ guilds, selectedGuild, setSelectedGuild, setChannels }: GuildSelectorProps) => {

  const handleGuildChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const guildId = e.target.value;
    setSelectedGuild(guildId);
    const selectedGuild = guilds.find(
      (guild: Guild) => guild.guildId === guildId
    );
    setChannels(selectedGuild ? selectedGuild.voiceChannels : []);
  };

  return (
    <select
      value={selectedGuild}
      onChange={handleGuildChange}
      className="bg-discord-dark-light text-white px-4 py-2 rounded-md mb-4"
    >
      <option value="">Select a server</option>
      {guilds.map((guild: Guild) => (
        <option key={guild.guildId} value={guild.guildId}>
          {guild.guildName}
        </option>
      ))}
    </select>
  );
};

export default GuildSelector;

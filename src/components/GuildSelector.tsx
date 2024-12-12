/* eslint-disable @typescript-eslint/no-explicit-any */
const GuildSelector = ({
  guilds,
  selectedGuild,
  setSelectedGuild,
  setChannels,
}: any) => {
  const handleGuildChange = (e: any) => {
    const guildId = e.target.value;
    setSelectedGuild(guildId);
    const selectedGuild = guilds.find(
      (guild: any) => guild.guildId === guildId
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
      {guilds.map((guild: any) => (
        <option key={guild.guildId} value={guild.guildId}>
          {guild.guildName}
        </option>
      ))}
    </select>
  );
};

export default GuildSelector;

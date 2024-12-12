/* eslint-disable @typescript-eslint/no-explicit-any */
import GuildSelector from "./GuildSelector";
import ChannelSelector from "./ChannelSelector";
import SoundBoard from "./Soundboard";

const Main = ({
  guilds,
  selectedGuild,
  setSelectedGuild,
  channels,
  setChannels,
  selectedChannel,
  setSelectedChannel,
  handlePlaySound,
  isButtonDisabled,
  audios,
}: any) => {
  return (
    <div className="mt-6">
      <div className="flex justify-around flex-wrap gap-5">
        <GuildSelector
          guilds={guilds}
          selectedGuild={selectedGuild}
          setSelectedGuild={setSelectedGuild}
          setChannels={setChannels}
        />
        <ChannelSelector
          channels={channels}
          selectedChannel={selectedChannel}
          setSelectedChannel={setSelectedChannel}
        />
      </div>
      <SoundBoard
        audios={audios}
        handlePlaySound={handlePlaySound}
        isButtonDisabled={isButtonDisabled}
      />
    </div>
  );
};

export default Main;

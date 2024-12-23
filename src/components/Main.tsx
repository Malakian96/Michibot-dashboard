import GuildSelector from '@components/GuildSelector';
import ChannelSelector from '@components/ChannelSelector';
import SoundBoard from '@components/Soundboard';
export interface Guild {
  guildId: string;
  guildName: string;
  voiceChannels: Channel[];
}

export interface Channel {
  id: string;
  name: string;
}

interface MainProps {
  guilds: Guild[];
  selectedGuild: string;
  setSelectedGuild: (guild: string) => void;
  channels: Channel[];
  setChannels: (channels: Channel[]) => void;
  selectedChannel: string | null;
  setSelectedChannel: (channel: string) => void;
  handlePlaySound: (audio: string) => void;
  isButtonDisabled: boolean;
  audios: string[];
}
const Main = ({
  guilds,
  selectedGuild,
  setSelectedGuild,
  channels,
  setChannels,
  selectedChannel = '',
  setSelectedChannel,
  handlePlaySound,
  isButtonDisabled,
  audios,
}: MainProps) => {
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
          selectedChannel={selectedChannel ?? ''}
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

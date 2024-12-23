interface PlayButtonProps {
  selectedGuild: string | null;
  selectedChannel: string | null;
  handlePlaySound: () => void;
  disabled: boolean;
}
const PlayButton = ({
  selectedGuild,
  selectedChannel,
  handlePlaySound,
  disabled,
}: PlayButtonProps) => {
  return (
    <button
      onClick={handlePlaySound}
      disabled={!selectedGuild || !selectedChannel || disabled}
      className={`px-4 py-2 rounded-md ${
        selectedGuild && selectedChannel && !disabled
          ? 'bg-discord-blurple text-white hover:bg-opacity-90'
          : 'bg-discord-gray text-opacity-50 cursor-not-allowed'
      }`}
    >
      Play Sound
    </button>
  );
};

export default PlayButton;

/* eslint-disable @typescript-eslint/no-explicit-any */
const PlayButton = ({ selectedGuild, selectedChannel, handlePlaySound, disabled }: any) => {
    return (
      <button
        onClick={handlePlaySound}
        disabled={!selectedGuild || !selectedChannel || disabled}
        className={`px-4 py-2 rounded-md ${
          selectedGuild && selectedChannel && !disabled
            ? "bg-discord-blurple text-white hover:bg-opacity-90"
            : "bg-discord-gray text-opacity-50 cursor-not-allowed"
        }`}
      >
        Play Sound
      </button>
    );
  };
  
  export default PlayButton;
  
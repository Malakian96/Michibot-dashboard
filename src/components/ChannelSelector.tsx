/* eslint-disable @typescript-eslint/no-explicit-any */
const ChannelSelector = ({ channels, selectedChannel, setSelectedChannel }: any) => {
    return (
      <select
        value={selectedChannel}
        onChange={(e) => setSelectedChannel(e.target.value)}
        disabled={!channels.length}
        className="bg-discord-dark-light text-white px-4 py-2 rounded-md mb-4"
      >
        <option value="">Select a voice channel</option>
        {channels.map((channel: any) => (
          <option key={channel.id} value={channel.id}>
            {channel.name}
          </option>
        ))}
      </select>
    );
  };
  
  export default ChannelSelector;
  
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Main from '../src/components/Main';

const mockGuilds = [
  {
    guildId: '1',
    guildName: 'Guild 1',
    voiceChannels: [
      { id: '1', name: 'Channel 1' },
      { id: '2', name: 'Channel 2' },
    ],
  },
  {
    guildId: '2',
    guildName: 'Guild 2',
    voiceChannels: [
      { id: '3', name: 'Channel 3' },
      { id: '4', name: 'Channel 4' },
    ],
  },
];

const mockAudios = ['Audio 1', 'Audio 2'];

describe('Main', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Main
        guilds={mockGuilds}
        selectedGuild=""
        setSelectedGuild={() => {}}
        channels={[]}
        setChannels={() => {}}
        selectedChannel=""
        setSelectedChannel={() => {}}
        handlePlaySound={() => {}}
        isButtonDisabled={false}
        audios={mockAudios}
      />,
    );
    expect(getByText('Select a server')).toBeInTheDocument();
    expect(getByText('Select a voice channel')).toBeInTheDocument();
  });

  it('calls setSelectedGuild and setChannels on guild change', () => {
    const setSelectedGuild = jest.fn();
    const setChannels = jest.fn();

    const { getByRole } = render(
      <Main
        guilds={mockGuilds}
        selectedGuild=""
        setSelectedGuild={setSelectedGuild}
        channels={[]}
        setChannels={setChannels}
        selectedChannel=""
        setSelectedChannel={() => {}}
        handlePlaySound={() => {}}
        isButtonDisabled={false}
        audios={mockAudios}
      />,
    );

    fireEvent.change(getByRole('combobox', { name: /Select a server/i }), {
      target: { value: '1' },
    });

    expect(setSelectedGuild).toHaveBeenCalledWith('1');
    expect(setChannels).toHaveBeenCalledWith(mockGuilds[0].voiceChannels);
  });

  it('calls handlePlaySound on button click', () => {
    const handlePlaySound = jest.fn();

    const { getByTestId } = render(
      <Main
        guilds={mockGuilds}
        selectedGuild="1"
        setSelectedGuild={() => {}}
        channels={mockGuilds[0].voiceChannels}
        setChannels={() => {}}
        selectedChannel="1"
        setSelectedChannel={() => {}}
        handlePlaySound={handlePlaySound}
        isButtonDisabled={false}
        audios={mockAudios}
      />,
    );

    fireEvent.click(getByTestId('sound-buttonAudio 1'));

    expect(handlePlaySound).toHaveBeenCalledWith('Audio 1');
  });
});

describe('MainSnapshot', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Main
        guilds={mockGuilds}
        selectedGuild=""
        setSelectedGuild={() => {}}
        channels={[]}
        setChannels={() => {}}
        selectedChannel=""
        setSelectedChannel={() => {}}
        handlePlaySound={() => {}}
        isButtonDisabled={false}
        audios={mockAudios}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});

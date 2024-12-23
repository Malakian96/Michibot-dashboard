import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GuildSelector from '../src/components/GuildSelector';

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

describe('GuildSelector', () => {
  it('renders correctly with guilds', () => {
    const { getByText } = render(
      <GuildSelector
        guilds={mockGuilds}
        selectedGuild=""
        setSelectedGuild={() => {}}
        setChannels={() => {}}
      />,
    );
    expect(getByText('Select a server')).toBeInTheDocument();
    expect(getByText('Guild 1')).toBeInTheDocument();
    expect(getByText('Guild 2')).toBeInTheDocument();
  });

  it('calls setSelectedGuild and setChannels on guild change', () => {
    const setSelectedGuild = jest.fn();
    const setChannels = jest.fn();

    const { getByRole } = render(
      <GuildSelector
        guilds={mockGuilds}
        selectedGuild=""
        setSelectedGuild={setSelectedGuild}
        setChannels={setChannels}
      />,
    );

    fireEvent.change(getByRole('combobox'), { target: { value: '1' } });

    expect(setSelectedGuild).toHaveBeenCalledWith('1');
    expect(setChannels).toHaveBeenCalledWith(mockGuilds[0].voiceChannels);
  });
});

describe('GuildSelectorSnapshot', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <GuildSelector
        guilds={mockGuilds}
        selectedGuild=""
        setSelectedGuild={() => {}}
        setChannels={() => {}}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});

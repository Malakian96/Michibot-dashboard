import { render, screen, fireEvent } from '@testing-library/react';
import ChannelSelector from '../src/components/ChannelSelector';

const mockChannels = [
  { id: '1', name: 'Channel 1' },
  { id: '2', name: 'Channel 2' },
];

const mockSetSelectedChannel = jest.fn();

describe('ChannelSelector', () => {
  it('renders correctly', () => {
    render(
      <ChannelSelector
        channels={mockChannels}
        selectedChannel=""
        setSelectedChannel={mockSetSelectedChannel}
      />,
    );
    expect(screen.getByText('Select a voice channel')).toBeInTheDocument();
  });

  it('displays the correct options', () => {
    render(
      <ChannelSelector
        channels={mockChannels}
        selectedChannel=""
        setSelectedChannel={mockSetSelectedChannel}
      />,
    );
    expect(screen.getByText('Channel 1')).toBeInTheDocument();
    expect(screen.getByText('Channel 2')).toBeInTheDocument();
  });

  it('calls setSelectedChannel on change', () => {
    render(
      <ChannelSelector
        channels={mockChannels}
        selectedChannel=""
        setSelectedChannel={mockSetSelectedChannel}
      />,
    );
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '1' } });
    expect(mockSetSelectedChannel).toHaveBeenCalledWith('1');
  });
});

describe('ChannelSelectorSnapshot', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <ChannelSelector
        channels={mockChannels}
        selectedChannel=""
        setSelectedChannel={mockSetSelectedChannel}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});

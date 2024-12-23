import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PlayButton from '../src/components/PlayButton';

describe('PlayButton', () => {
  it('renders correctly when enabled', () => {
    const { getByText } = render(
      <PlayButton
        selectedGuild="1"
        selectedChannel="1"
        handlePlaySound={() => {}}
        disabled={false}
      />,
    );
    expect(getByText('Play Sound')).toBeInTheDocument();
    expect(getByText('Play Sound')).not.toHaveClass('cursor-not-allowed');
  });

  it('renders correctly when disabled', () => {
    const { getByText } = render(
      <PlayButton
        selectedGuild={null}
        selectedChannel={null}
        handlePlaySound={() => {}}
        disabled={true}
      />,
    );
    expect(getByText('Play Sound')).toBeInTheDocument();
    expect(getByText('Play Sound')).toHaveClass('cursor-not-allowed');
  });

  it('calls handlePlaySound when clicked', () => {
    const handlePlaySound = jest.fn();
    const { getByText } = render(
      <PlayButton
        selectedGuild="1"
        selectedChannel="1"
        handlePlaySound={handlePlaySound}
        disabled={false}
      />,
    );

    fireEvent.click(getByText('Play Sound'));
    expect(handlePlaySound).toHaveBeenCalled();
  });

  it('does not call handlePlaySound when disabled', () => {
    const handlePlaySound = jest.fn();
    const { getByText } = render(
      <PlayButton
        selectedGuild={null}
        selectedChannel={null}
        handlePlaySound={handlePlaySound}
        disabled={true}
      />,
    );

    fireEvent.click(getByText('Play Sound'));
    expect(handlePlaySound).not.toHaveBeenCalled();
  });
});

describe('PlayButtonSnapshot', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <PlayButton
        selectedGuild="1"
        selectedChannel="1"
        handlePlaySound={() => {}}
        disabled={false}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});

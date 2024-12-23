import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SoundBoard from '../src/components/Soundboard';

describe('SoundBoard', () => {
  const audios = ['audio1.mp3', 'audio2.mp3'];
  const handlePlaySound = jest.fn();

  it('renders correctly with given props', () => {
    const { getByText } = render(
      <SoundBoard
        audios={audios}
        handlePlaySound={handlePlaySound}
        isButtonDisabled={false}
      />,
    );

    audios.forEach((audio) => {
      expect(getByText(audio)).toBeInTheDocument();
    });
  });

  it('disables buttons when isButtonDisabled is true', () => {
    const { getByTestId } = render(
      <SoundBoard
        audios={audios}
        handlePlaySound={handlePlaySound}
        isButtonDisabled={true}
      />,
    );

    audios.forEach((audio) => {
      expect(getByTestId(`sound-button${audio}`)).toBeDisabled();
    });
  });

  it('calls handlePlaySound when a button is clicked', () => {
    const { getByTestId } = render(
      <SoundBoard
        audios={audios}
        handlePlaySound={handlePlaySound}
        isButtonDisabled={false}
      />,
    );

    fireEvent.click(getByTestId(`sound-button${audios[0]}`));
    expect(handlePlaySound).toHaveBeenCalledWith(audios[0]);
  });

  it('matches snapshot', () => {
    const { container } = render(
      <SoundBoard
        audios={audios}
        handlePlaySound={handlePlaySound}
        isButtonDisabled={false}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});

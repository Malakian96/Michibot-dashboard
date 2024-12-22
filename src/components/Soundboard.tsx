import React from 'react';

interface SoundBoardProps {
  audios: string[];
  handlePlaySound: (audio: string) => void;
  isButtonDisabled: boolean;
}

const catGifs = [
  'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
  'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif',
  'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif',
  'https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif',
  'https://media.giphy.com/media/13borq7Zo2kulO/giphy.gif',
  'https://media.giphy.com/media/Lq0h93752f6J9tijrh/giphy.gif',
  'https://media.giphy.com/media/Q56ZI04r6CakM/giphy.gif',
  'https://media.giphy.com/media/3oriO7A7bt1wsEP4cw/giphy.gif',
  'https://media.giphy.com/media/l0HUpt2s9Pclgt9Vm/giphy.gif',
  'https://media.giphy.com/media/1BgIQWDh52EVid0KlU/giphy.gif',
]; // Agrega más GIFs según sea necesario

const SoundBoard: React.FC<SoundBoardProps> = ({
  audios,
  handlePlaySound,
  isButtonDisabled,
}) => {
  return (
    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {audios.map((audio, index) => (
        <div key={audio} className="flex flex-col items-center">
          <button
            onClick={() => handlePlaySound(audio)}
            disabled={isButtonDisabled}
            className={`w-32 h-32 rounded-md overflow-hidden ${
              isButtonDisabled
                ? 'opacity-50'
                : 'hover:scale-105 transition-transform'
            }`}
            style={{
              backgroundImage: `url(${catGifs[index % catGifs.length]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></button>
          <span className="text-xs text-white mt-1">{audio}</span>
        </div>
      ))}
    </div>
  );
};

export default SoundBoard;

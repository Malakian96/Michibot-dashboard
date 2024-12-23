import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Header from '@components/Header';
import Main, { Channel } from '@components/Main';
import Footer from '@components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  getAvailableAudios,
  getGuildsByUser,
  playSound,
} from '@/services/apiService';
import { useRouter } from 'next/router';

const Play = () => {
  const [guilds, setGuilds] = useState([]);
  const [selectedGuild, setSelectedGuild] = useState('');
  const [channels, setChannels] = useState<Channel[]>([]);
  const [audios, setAudios] = useState<string[]>([]);
  const [selectedChannel, setSelectedChannel] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session === null) {
      router.push('/');
    }
    if (session && session.user.id) {
      getGuildsByUser(session.user.id)
        .then(setGuilds)
        .catch(() => {
          toast.error('Failed to load guilds');
        });
    }
  }, [session, router]);

  useEffect(() => {
    getAvailableAudios()
      .then(setAudios)
      .catch(() => {
        toast.error('Failed to load audios');
      });
  }, []);

  useEffect(() => {
    setIsButtonDisabled(!selectedChannel || !selectedGuild);
  }, [selectedChannel, selectedGuild]);

  const handlePlaySound = async (audio: string) => {
    if (isButtonDisabled) return;

    setIsButtonDisabled(true);
    try {
      await playSound(selectedGuild, selectedChannel, audio);
      toast.success('Sound is playing!', { position: 'bottom-left' });
    } catch (e) {
      toast.error(`Failed to play sound! ${e}`, { position: 'bottom-left' });
    } finally {
      setTimeout(() => setIsButtonDisabled(false), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-discord-dark text-white flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center text-center">
        <Main
          guilds={guilds}
          selectedGuild={selectedGuild}
          setSelectedGuild={setSelectedGuild}
          channels={channels}
          setChannels={setChannels}
          selectedChannel={selectedChannel}
          setSelectedChannel={setSelectedChannel}
          handlePlaySound={handlePlaySound}
          isButtonDisabled={isButtonDisabled}
          audios={audios}
        />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Play;

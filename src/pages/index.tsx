import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import DiscordInvite from '@/components/DiscordInvite';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/play');
    }
  }, [status, router]);

  return (
    <div className="min-h-screen bg-discord-dark text-white flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center text-center">
        <DiscordInvite />
      </main>
      <ToastContainer />
    </div>
  );
};

export default Home;

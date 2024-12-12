import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [guilds, setGuilds] = useState([]);
  const [selectedGuild, setSelectedGuild] = useState("");
  const [channels, setChannels] = useState([]);
  const [audios, setAudios] = useState<string[]>([]);
  const [selectedChannel, setSelectedChannel] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      const userId = session.user?.image?.split("/")[4];
      axios.get(`http://localhost:8080/guilds/${userId}`).then((res) => {
        setGuilds(res.data);
      });

      axios.get("http://localhost:8080/audios").then((res) => {
        setAudios(res.data);
      });
    }
  }, [session]);

  useEffect(()=>{
    setIsButtonDisabled(!selectedChannel || !selectedGuild)
  },[selectedChannel, selectedGuild])

  const handlePlaySound = async (audio: string) => {
    if (isButtonDisabled) return; // Evita ejecutar la función si el botón está deshabilitado.
    setIsButtonDisabled(true); // Desactiva el botón.

    try {
      await axios
        .post("http://localhost:8080/play", {
          guildId: selectedGuild,
          channelId: selectedChannel,
          sound: audio,
        })
        .catch();
      toast.success("Sound is playing!", {
        position: "bottom-left",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Failed to play the sound. Try again!", {
        position: "bottom-left",
        autoClose: 3000,
      });
      console.error("Error playing sound:", error);
    } finally {
      // Reactiva el botón después de 1 segundo.
      setTimeout(() => setIsButtonDisabled(false), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-discord-dark text-white flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center text-center">
        {session ? (
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
        ) : (
          <p>Please sign in to use this feature.</p>
        )}
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Home;

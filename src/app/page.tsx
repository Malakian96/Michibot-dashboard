"use client";
import { useCallback } from "react";
import axios from "axios";

const Home = () => {
  const onClick = useCallback(async () => {
    await axios.post("http://localhost:3000/play", {
      channelId: "1303134031763869720",
      audioFileName: "meow",
    });
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClick}
        >
          Button
        </button>
      </main>
    </div>
  );
};

export default Home;

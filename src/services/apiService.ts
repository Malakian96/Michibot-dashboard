import axiosInstance from "./axiosInstance";

// Obtiene las guilds del usuario
export const getGuildsByUser = async (userId: string) => {
  const response = await axiosInstance.get(`/guilds/${userId}`);
  return response.data;
};

// Obtiene los canales de voz de una guild
export const getVoiceChannels = async (guildId: string) => {
  const response = await axiosInstance.get(`/channels/${guildId}`);
  return response.data;
};

// Obtiene la lista de audios disponibles
export const getAvailableAudios = async () => {
  const response = await axiosInstance.get(`/audios`);
  return response.data;
};

// Envía una solicitud para reproducir un sonido
export const playSound = async (
  guildId: string,
  channelId: string,
  sound: string
) => {
  const response = await axiosInstance.post(`/play`, {
    guildId,
    channelId,
    sound,
  });
  return response.data;
};

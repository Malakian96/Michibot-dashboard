import axiosInstance from '@services/axiosInstance';

export const getGuildsByUser = async (userId: string) => {
  const response = await axiosInstance.get(`/guilds/${userId}`);
  return response.data;
};

export const getVoiceChannels = async (guildId: string) => {
  const response = await axiosInstance.get(`/channels/${guildId}`);
  return response.data;
};

export const getAvailableAudios = async () => {
  const response = await axiosInstance.get(`/audios`);
  return response.data;
};

export const playSound = async (
  guildId: string,
  channelId: string,
  sound: string,
) => {
  const response = await axiosInstance.post(`/play`, {
    guildId,
    channelId,
    sound,
  });
  return response.data;
};

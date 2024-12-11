# Usa una imagen base compatible con ARM
FROM node:18-bullseye

# Configura las variables de entorno en el Dockerfile
ARG DISCORD_CLIENT_ID
ARG DISCORD_CLIENT_SECRET
ARG NEXTAUTH_SECRET

ENV DISCORD_CLIENT_ID=${DISCORD_CLIENT_ID}
ENV DISCORD_CLIENT_SECRET=${DISCORD_CLIENT_SECRET}
ENV NEXTAUTH_SECRET=${NEXTAUTH_SECRET}

# Configura el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios
COPY package*.json ./
RUN npm install

# Copia el resto del código
COPY . ./

# Construye la aplicación
RUN npm run build

# Expone el puerto de la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]

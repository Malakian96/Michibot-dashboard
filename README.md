## Deploy on Raspberry pi

docker buildx build --platform linux/arm/v7 -t michibot-dashboard .

docker save michibot-dashboard > michibot-dashboard.tar

scp michibot-dashboard.tar ${hostname}@${ip}:/home/${hostname}/

ssh ${hostname}@${ip}

docker load < /home/${hostname}/michibot-dashboard.tar

docker stop michibot-dashboard

docker rm michibot-dashboard

docker run -d --name michibot-dashboard -p 80:3000 \
  -e DISCORD_CLIENT_ID=${DISCORD_CLIENT_ID} \
  -e DISCORD_CLIENT_SECRET=${DISCORD_CLIENT_SECRET} \
  -e NEXTAUTH_SECRET=${NEXTAUTH_SECRET} \
  -e NEXTAUTH_URL=${NEXTAUTH_URL} \
  michibot-dashboard

#!/bin/bash

DOCKER_APP_CHAT_NAME="greenearth_chatting"

# 컨테이너 down
echo "server down"
docker-compose -p ${DOCKER_APP_CHAT_NAME} -f docker-compose-chat.yml down

# 이전 이미지 삭제
docker rmi greenearth_chatting:0.1

echo "server up"
docker-compose -p ${DOCKER_APP_CHAT_NAME} -f docker-compose-chat.yml up -d

sleep 8
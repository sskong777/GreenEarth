#!/bin/bash

DOCKER_APP_CHAT_NAME="greenearth_chatting"

# 현재 떠있는 컨테이너를 체크한다.
EXIST=$(docker-compose -p ${DOCKER_APP_CHAT_NAME} -f docker-compose.yml ps | grep Up)

echo ${EXIST}

# 컨테이너 down
echo "server down"
docker-compose -p ${DOCKER_APP_CHAT_NAME} -f docker-compose.yml down

# 이전 이미지 삭제
docker rmi greenearth_chatting:0.1

echo "server up"
docker-compose -p ${DOCKER_APP_CHAT_NAME} -f docker-compose.yml up -d

sleep 8

# 새로운 컨테이너가 제대로 떴는지 확인
EXIST_AFTER=$(docker-compose -p ${DOCKER_APP_CHAT_NAME} -f docker-compose.yml ps | grep Up)
echo EXIST_AFTER
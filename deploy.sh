#!/bin/bash

DOCKER_APP_BACK_NAME="greenearth_backend"
DOCKER_APP_FRONT_NAME="greenearth_frontend"

# backend 컨테이너 down
echo "Backend down"
docker-compose -p ${DOCKER_APP_BACK_NAME} -f docker-compose-back.yml down

# 이전 이미지 삭제
docker rmi greenearth_backend:0.1

# # frontend 컨테이너 down
# echo "Frontend down"
# docker-compose -p ${DOCKER_APP_FRONT_NAME} -f docker-compose-front.yml down

# # 이전 이미지 삭제
# docker rmi greenearth_front:0.1

echo "Backend up"
docker-compose -p ${DOCKER_APP_BACK_NAME} -f docker-compose-back.yml up -d

# echo "Frontend down"
# docker-compose -p ${DOCKER_APP_FRONT_NAME} -f docker-compose-front.yml up -d

sleep 5

echo "Server On"


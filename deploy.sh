#!/bin/bash

DOCKER_APP_NAME="greenearth_backend"

# 현재 떠있는 컨테이너를 체크한다.
EXIST=$(docker-compose -p ${DOCKER_APP_NAME} -f docker-compose.yml ps | grep Up)

echo ${EXIST}

# 켜져있다면 down
if [ -z "$EXIST" ]; then
    echo "server down"
    docker-compose -p ${DOCKER_APP_NAME} -f docker-compose.yml down

    # 이전 이미지 삭제
    docker rmi greenearth_backend:0.1
fi

    echo "server up"
    docker-compose -p ${DOCKER_APP_NAME} -f docker-compose.yml up -d

sleep 8

# 새로운 컨테이너가 제대로 떴는지 확인
EXIST_AFTER=$(docker-compose -p ${DOCKER_APP_NAME} -f docker-compose.yml ps | grep Up)
echo EXIST_AFTER
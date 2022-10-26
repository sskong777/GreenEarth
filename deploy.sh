#!/bin/bash

DOCKER_APP_NAME="greenearth_backend"

# Blue 를 기준으로 현재 떠있는 컨테이너를 체크한다.
EXIST_BLUE=$(docker-compose -p ${DOCKER_APP_NAME}-blue -f docker-compose.blue.yml ps | grep Up)

echo ${EXIST_BLUE}
# 컨테이너 스위칭
if [ -z "$EXIST_BLUE" ]; then
    echo "blue up"
    docker-compose -p ${DOCKER_APP_NAME}-blue -f docker-compose.blue.yml up -d
    BEFORE_COMPOSE_COLOR="green"
    AFTER_COMPOSE_COLOR="blue"
else
    echo "green up"
    docker-compose -p ${DOCKER_APP_NAME}-green -f docker-compose.green.yml up -d
    BEFORE_COMPOSE_COLOR="blue"
    AFTER_COMPOSE_COLOR="green"
fi
 
sleep 10

# 새로운 컨테이너가 제대로 떴는지 확인
EXIST_AFTER=$(docker-compose -p ${DOCKER_APP_NAME}-${AFTER_COMPOSE_COLOR} -f docker-compose.${AFTER_COMPOSE_COLOR}.yml ps | grep Up)
if [ -n "$EXIST_AFTER" ]; then
    # nginx.config를 컨테이너에 맞게 변경해주고 reload 한다
    sudo cp /var/jenkins_home/inc/service-url.inc.${AFTER_COMPOSE_COLOR} /var/jenkins_home/inc/service-url.inc

    # 이전 컨테이너 종료
    docker-compose -p ${DOCKER_APP_NAME}-${BEFORE_COMPOSE_COLOR} -f docker-compose.${BEFORE_COMPOSE_COLOR}.yml down
    echo "$BEFORE_COMPOSE_COLOR down"

    # 이전 이미지 삭제
    # 동일한 태그를 가진 Docker 이미지가 빌드될 경우, 기존에 있던 이미지는 삭제되지는 않고, tag가 none으로 변경된 상태로 남아 있게 된다.
    # 더 이상 컨테이너에 연결되지 않고, 태그가 없어진 이미지를 Dangling image라고 한다.
    # 이러한 dangling image를 그대로 방치하면 파일시스템 용량을 차지하게 되고, Docker 이미지 확인에도 불편함이 있을 수 있기 때문에 삭제.
    docker rmi alphagom_backend:0.1-${BEFORE_COMPOSE_COLOR}
fi
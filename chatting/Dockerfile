# 사용한 java 버전에 맞는 값을 입력해주세요.
#FROM openjdk:11-jdk-alpine
FROM adoptopenjdk/openjdk11

ARG JAR_FILE=build/libs/chatting-0.0.1-SNAPSHOT.jar

# jar 파일 경로는 직접 입력해주세요..
ADD ${JAR_FILE} chatting.jar

#properties 실행 명령어
ENTRYPOINT ["java","-jar","chatting.jar"]
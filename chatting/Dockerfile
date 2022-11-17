FROM adoptopenjdk/openjdk11

# jar 파일 경로는 직접 입력해주세요..
COPY build/libs/chatting-0.0.1-SNAPSHOT.jar chatting.jar

#properties 실행 명령어
ENTRYPOINT ["java","-jar","chatting.jar"]

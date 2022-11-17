package com.greenEarth.chatting.dto;

import lombok.Getter;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
public class ChatMessage implements Serializable {

    private ChatType type = ChatType.CHAT;

    private String sender;          // 보내는 사람

    private String roomId;          // 채팅방 ID

    private String content;         // 내용

    private String color;

    private final LocalDateTime sendAt = LocalDateTime.now();   // 전송 시각

    @Override
    public String toString() {
        return String.format("[%s] { %s: %s [%s] (%s) }", type, sender, content,
                sendAt.format(DateTimeFormatter.ofPattern("yy-MM-dd(EEE) hh:mm:ss a")), roomId);
    }
}

package com.greenEarth.chatting.dto;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class ChatNotice {

    private String notice;         // 내용

    private final LocalDateTime sendAt = LocalDateTime.now();   // 전송 시각

    public void setJoinNotice(String username) {
        this.notice = username + "님이 뛰어들어왔어요!";
    }

    public void setExitNotice(String username) {
        this.notice = username + "님이 뛰쳐나갔어요!";
    }

}

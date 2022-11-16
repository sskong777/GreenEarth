package com.greenEarth.chatting.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class ChatNotice implements Serializable {

    private String username;

    private String notice;

    private final LocalDateTime sendAt = LocalDateTime.now();   // 전송 시각

    public void setJoinNotice() {
        this.notice = username + "님이 뛰어들어왔어요!";
    }

    public void setExitNotice(String username) {
        this.notice = username + "님이 뛰쳐나갔어요!";
    }

}

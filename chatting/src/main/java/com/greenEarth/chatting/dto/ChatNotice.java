package com.greenEarth.chatting.dto;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class ChatNotice {

    private String notice;         // 내용

    private final LocalDateTime sendAt = LocalDateTime.now();   // 전송 시각

    public void setOpenNotice() {
        this.notice = "관리자에게 상담을 요청한 상태입니다. 잠시만 기다려주세요!";
    }

    public void setCloseNotice() {
        this.notice = "상담이 끝났어요!";
    }

}

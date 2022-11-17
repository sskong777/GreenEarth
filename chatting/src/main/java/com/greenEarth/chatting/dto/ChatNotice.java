package com.greenEarth.chatting.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@NoArgsConstructor
public class ChatNotice implements Serializable {

    private ChatType type;

    private String username;

    private String roomId;

    private String notice;

    private final LocalDateTime sendAt = LocalDateTime.now();

    public void setJoinNotice() {
        this.notice = username + "님이 뛰어들어왔어요!";
    }

    public void setLeaveNotice() {
        this.notice = username + "님이 뛰쳐나갔어요!";
    }

    @Override
    public String toString() {
        return String.format("[%s] { %s: %s [%s] }", type, username, notice,
                sendAt.format(DateTimeFormatter.ofPattern("yy-MM-dd(EEE) hh:mm:ss a")));
    }

}

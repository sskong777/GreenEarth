package com.ssafy.greenEarth.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    EXPIRED_TOKEN("T001", "토큰이 만료되었습니다."),
    INVALID_TOKEN("T002", "토큰이 유효하지 않습니다."),
    EMPTY_TOKEN("T003", "토큰이 존재하지 않습니다."),
    NOT_EXIST_ACCOUNT("A001", "계정이 존재하지 않습니다."),
    INVALID_ACCOUNT("A002", "이메일 혹은 비밀번호가 일치하지 않습니다."),
    NOT_EXIST_MISSION("M001", "미션이 존재하지 않습니다."),
    NOT_EXIST_MISSION_LOG("M002", "미션 로그가 존재하지 않습니다."),
    NOT_EXIST_REWARD("ROO1", "보상이 존재하지 않습니다.");

    private final String code;
    private final String message;

}

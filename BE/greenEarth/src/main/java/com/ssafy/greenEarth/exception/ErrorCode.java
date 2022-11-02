package com.ssafy.greenEarth.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

import static org.springframework.http.HttpStatus.*;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    EXPIRED_TOKEN(UNAUTHORIZED, "T001", "엑세스 토큰이 만료되었습니다."),
    INVALID_TOKEN(UNAUTHORIZED, "T002", "엑세스 토큰이 유효하지 않습니다."),
    EMPTY_TOKEN(UNAUTHORIZED, "T003", "엑세스 토큰이 존재하지 않습니다."),
    NOT_EXIST_REFRESH_TOKEN(UNAUTHORIZED, "T004", "리프레시 토큰이 존재하지 않습니다."),

    NOT_EXIST_ACCOUNT(NOT_FOUND, "A001", "계정이 존재하지 않습니다."),
    ALREADY_LOGGED_IN(FORBIDDEN, "A002", "이미 로그인된 계정입니다."),
    INVALID_ACCOUNT(FORBIDDEN, "A003", "이메일 혹은 비밀번호가 일치하지 않습니다."),

    NOT_EXIST_MISSION(NOT_FOUND, "M001", "미션이 존재하지 않습니다."),
    NOT_EXIST_MISSION_LOG(NOT_FOUND, "M002", "미션 로그가 존재하지 않습니다."),

    NOT_EXIST_REWARD(NOT_FOUND, "ROO1", "보상이 존재하지 않습니다.");

    private final HttpStatus httpStatus;
    private final String code;
    private final String message;

}

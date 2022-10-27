package com.ssafy.greenEarth.exception;

public class CustomErrorException extends RuntimeException {
    public CustomErrorException(String msg) {
        super(msg);
    }
}

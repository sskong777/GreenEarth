package com.ssafy.greenEarth.dto.Auth;

import lombok.Data;

import java.util.Map;

@Data
public class TokenResDto {

    private String accessToken;

    private String refreshToken;

    public TokenResDto(Map<String, String> resMap) {
        this.accessToken = resMap.get("accessToken");
        this.refreshToken = resMap.get("refreshToken");
    }
}

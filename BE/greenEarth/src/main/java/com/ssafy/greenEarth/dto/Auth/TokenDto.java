package com.ssafy.greenEarth.dto.Auth;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Map;

@Data
@AllArgsConstructor
public class TokenDto {

    private String accessToken;

    private String refreshToken;

    public TokenDto(Map<String, String> resMap) {
        this.accessToken = resMap.get("accessToken");
        this.refreshToken = resMap.get("refreshToken");
    }
}

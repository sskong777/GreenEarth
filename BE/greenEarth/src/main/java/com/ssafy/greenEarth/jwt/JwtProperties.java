package com.ssafy.greenEarth.jwt;

public interface JwtProperties {
    String TOKEN_PREFIX = "Bearer ";                        // JWT 토큰 타입
    String HEADER_STRING = "Authorization";                 // 토큰 전달할 Http 헤더 항목
    long accessTokenValidityInSeconds = 60;            // Access Token 만료 기간 : 1일
    long refreshTokenValidityInSeconds = 60 * 60 * 24 * 7;      // Refresh Token 만료 기간 : 7일

}
